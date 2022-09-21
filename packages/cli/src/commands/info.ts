import chalk from 'chalk';
import { Command } from 'commander';
import { createSpinner } from 'nanospinner';
import path from 'path';
import si from 'systeminformation';

function formatBytes(bytes: number, decimals = 2) {
    if (!+bytes) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

const getPackageVersion = async (packageName: string) => {
    const packageDir = path.join(__dirname, '../', 'node_modules', packageName);

    //@ts-ignore
    const packageJSON = await import('file://' + path.join(packageDir, 'package.json'), {
        assert: { type: 'json' },
    }).then(m => m.default);
    return packageJSON;
};

export default new Command()
    .name('info')
    .description('Show information on your system dep versions')
    .action(async () => {
        const spinner = createSpinner('Loading system information...').start();
        const coreVersion = (await getPackageVersion('@slythejs/core')).version;

        const os = await si.osInfo();

        const ram = await si.memLayout();

        const cpu = await si.cpu();

        const ramString = ram.map(dimm => formatBytes(dimm.size)) + '/' + ram.length;

        const cpuString = `${cpu.family} ${cpu.brand}`;
        spinner.success({ text: 'Loaded system information' });
        console.log(`
${chalk.red('System Information:')}
    CPU: ${cpuString}
    RAM: ${ramString} Dimm(s)
    OS: ${os.distro} ${os.kernel}
    Node Version: ${process.version}
${chalk.red('Package Versions')}
    Core: ${coreVersion}

        `);

        // console.log(ramString, '\n', cpuString);
    });
