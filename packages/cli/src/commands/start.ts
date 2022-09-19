import { Command } from 'commander';
import { createSpinner } from 'nanospinner';
import path from 'path';
import { EXEC_DIR } from '../constants.js';
import { sleep } from '../util.js';
import { existsSync } from 'fs';
import { mkdir, readdir, readFile, writeFile } from 'fs/promises';
import type { Compiler, Config, Options } from '@swc/core';

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
        // @ts-ignore
        // const core = await import('@slythejs/core');
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

        const files = await compileFiles(
            compiler,
            {
                ...swcConfig,
            },
            config,
            path.join(EXEC_DIR, config.rootDir || './src'),
            path.join(EXEC_DIR, '.slythe')
        );
    });

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
        compileFiles(compiler, swcConfig, config, path.join(dir, dirent.name), outDir)
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
