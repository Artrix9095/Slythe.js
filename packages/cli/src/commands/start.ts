import { Command } from 'commander';
import { createSpinner } from 'nanospinner';
import path from 'path';
import { EXEC_DIR } from '../constants.js';
import { sleep } from '../util.js';
import { existsSync, readdirSync } from 'fs';
import { mkdir, readdir, readFile, writeFile } from 'fs/promises';
import type { Compiler, Config, Options } from '@swc/core';
import { Client } from '@slythejs/core';
const core = await import('@slythejs/core');

export default new Command()
    .name('start')
    .option(
        '-c, --config <string>',
        'Custom config dir',
        path.join(EXEC_DIR, 'slythe.config.js')
    )
    .action(async ({ config: configDir }) => {
        console.log(configDir);
        let config;
        const cfgSpinner = createSpinner('Loading config...').start();
        await sleep();
        try {
            config = await import('file://' + configDir);
        } catch (e) {
            cfgSpinner.error({ text: 'Invalid config\n' + e });
            process.exit(1);
        }
        cfgSpinner.success({ text: 'Config loaded' });
        const loadedModulesSpinner = createSpinner('Loading core modules...').start();
        const swc = await import('@swc/core');
        loadedModulesSpinner.success({ text: 'Core modules loaded' });
        const swcConfig: Config = existsSync(path.join(EXEC_DIR, '.swcrc'))
            ? JSON.parse(await readFile(path.join(EXEC_DIR, '.swcrc')).toString())
            : {
                  jsc: {
                      parser: {
                          syntax: 'typescript',
                      },
                  },
              };

        const compiler = new swc.Compiler();

        await compileFiles(
            compiler,
            {
                ...swcConfig,
            },
            config,
            path.join(EXEC_DIR, config.rootDir || './src'),
            path.join(EXEC_DIR, '.slythe')
        );
        const files = getFiles(path.join(EXEC_DIR, '.slythe'));
        const commandDirs = files
            .filter(n => n.includes('commands'))
            .filter(n => n.endsWith('.js'));

        const commands = await Promise.all(
            commandDirs.map(async dir => ({
                name: dir
                    .replace(path.join(EXEC_DIR, '.slythe', 'commands'), '') // remove directory
                    .substring(1) // remove /
                    .replace('.js', ''),
                exports: await import(`file://${dir}`),
            }))
        );
        const botStartSpinner = createSpinner('Starting bot...\n\n').start();
        const bot = await startBot(config, core, commands);

        botStartSpinner.success({ text: 'Bot online', mark: '🤖' });
    });

const startBot = async (
    config: any,
    core: typeof import('@slythejs/core'),
    commands: any[]
): Promise<Client> =>
    new Promise((res, rej) => {
        const client = new core.Client({
            intents: ['GuildMessages'],
            token: config.token,
            ...config.clientConfig,
        })
            .on('Ready', () => res(client))
            .connect();
    });

const getFiles = (dir: string) => {
    const ret: string[] = [];
    const filesAndFolders = readdirSync(dir, { withFileTypes: true });

    const folders = filesAndFolders.filter(f => f.isDirectory());

    if (folders) {
        folders.forEach(folder => {
            ret.push(...getFiles(path.join(dir, folder.name)));
        });
    }

    const files = filesAndFolders.filter(f => f.isFile());

    ret.push(...files.map(f => path.join(dir, f.name)));

    return ret;
};

const compileFiles = async (
    compiler: Compiler,
    swcConfig: Options,
    config: any,
    dir: string,
    outDir: string
) => {
    console.log();
    const paths = (await readdir(dir, { withFileTypes: true })).filter(path =>
        config.ignorePathsRegex
            ? !config.ignorePathsRegex.test(path.name)
            : true &&
              !/node_modules/gm.test(path.name) &&
              (/.ts/gm.test(path.name) || path.isDirectory())
    );
    const files = paths.filter(path => path.isFile());

    const dirs = paths.filter(path => path.isDirectory());

    dirs.forEach(dirent =>
        compileFiles(
            compiler,
            swcConfig,
            config,
            path.join(dir, dirent.name),
            path.join(outDir, dirent.name)
        )
    );

    const outFiles = await Promise.all(
        files.map(async file => {
            const spinner = createSpinner(`Compiling: ${file.name}`).start();
            const res = await compiler.transformFile(
                path.join(dir, file.name),
                swcConfig
            );

            spinner.success({ text: 'Compiled: ' + file.name });
            return { ...res, name: file.name };
        })
    );
    if (!existsSync(outDir)) await mkdir(outDir);
    for (const file of outFiles) {
        await writeFile(path.join(outDir, file.name.replace('.ts', '.js')), file.code);
    }
};
