#!/usr/bin/env node --no-warnings

import { program } from 'commander';
import start from './commands/start.js';
import chalk from 'chalk';
import init from './commands/init.js';
//@ts-ignore
import packageJSON from '../package.json' assert { type: 'json' };
import info from './commands/info.js';
import { fileURLToPath } from 'url';
import path from 'path';
import 'dotenv/config';

try {
    // When 'npm link' is used it checks the clone location. Not the project.
    import('@slythejs/core');
} catch (err) {
    process.argv.includes('init')
        ? null
        : (() => {
              console.error(
                  chalk.red(
                      `@slythejs/core was not found. We require that you include it in 'dependencies' of your 'package.json'. To add it, run 'npm install @slythejs/core\n`
                  )
              );
              process.exit(1);
          })();
}

global.__filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
global.__dirname = path.dirname(__filename);

const LIB_DIR = path.join(__dirname, '../');

program
    .name('slythejs')
    .description('CLI full of utilities for slythejs')
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    .version(packageJSON.version)
    .addCommand(start)
    .addCommand(init)
    .addCommand(info);

program.parse();
