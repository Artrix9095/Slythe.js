import { Client } from '../';
import 'dotenv/config';

describe('Bot tests', () => {
    const client = new Client({
        intents: ['Guilds'],
        publicKey: process.env.TEST_BOT_PUBLIC_KEY,
        loggerLevel: process.env.GITHUB_ACTIONS ? 'info' : 'trace',
    });

    client.connect(process.env.TEST_BOT_TOKEN);

    const isReady = new Promise(res => client.on('Ready', () => res(true)));
    const guild = new Promise(res => client.on('GuildCreate', res));

    test('Bot can login', async () => {
        await expect(isReady).resolves.toBeTruthy();
    });
    test('Bot Can Receive Guilds', async () => {
        await expect(guild).resolves.toBeTruthy();
    });

    test('Bot can send messages', async () => {
        const channel = await client.getChannel(process.env.TEST_BOT_CHANNEL_ID!);

        const message = await channel.send({
            content: 'Hello, World!',
            tts: false,
            embeds: [
                {
                    title: 'Hello, Embed!',
                    description: 'This is an embedded message.',
                },
            ],
        });
        console.log(message);

        expect(message).toBeTruthy();
    });

    test('Bot can get guild', async () => {
        const guild = await client.getGuild(process.env.TEST_BOT_GUILD_ID!);

        expect(guild).toBeTruthy();
    });

    afterAll(done => {
        client.kill().then(() => done());
    });
});
