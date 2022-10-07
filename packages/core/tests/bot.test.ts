import { Client } from '../';
import 'dotenv/config';

describe('Bot tests', () => {
    const client = new Client({
        intents: ['Guilds'],
        publicKey: process.env.TEST_BOT_PUBLIC_KEY,
    });
    test('Bot can login', async () => {
        const isReady = await new Promise(res => client.on('Ready', () => res(true)));

        expect(isReady).toBeTruthy();
    });
    test('Bot Can Receive Guilds', async () => {
        const guild = await new Promise(res => client.on('GuildCreate', res));

        expect(guild).toBeTruthy();
    });

    client.connect(process.env.TEST_BOT_TOKEN);

    afterAll(done => {
        client.kill().then(() => done()) as any;
    });
});
