import { Command } from 'commander';
import inquirer from 'inquirer';
import { writeFile } from 'fs/promises';
import chalkAnimation from 'chalk-animation';
import { sleep } from '../util.js';
import figlet from 'figlet';
import { EXEC_DIR } from '../constants.js';
import { createSpinner } from 'nanospinner';
import path from 'path';

export default new Command()
    .name('init')
    .description('Init your config')
    .action(async () => {
        const animation = chalkAnimation.rainbow(figlet.textSync('Init'), 0.25);
        animation.start();
        await sleep(3000);
        animation.stop();

        const res = await inquirer.prompt([
            {
                name: 'token',
                message: 'Bot Token',
                type: 'password',
                validate: i => !!i,
            },
            {
                name: 'devServerId',
                message: 'Development Server ID',
                type: 'input',
            },
        ]);
        const writeSpinner = createSpinner('Writing file').start();
        await writeFile(
            path.join(EXEC_DIR, 'slythe.config.js'),
            `export default ${JSON.stringify(res, null, 4)}`
        );
        writeSpinner.success({ text: 'Wrote to config ' });
    });
