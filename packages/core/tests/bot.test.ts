import { Client } from '../';
import 'dotenv/config';

describe('Bot tests', () => {
    const client = new Client({
        intents: ['Guilds'],
        publicKey: process.env.TEST_BOT_PUBLIC_KEY,
    });

    client.connect(process.env.TEST_BOT_TOKEN);

    const isReady = new Promise(res => client.on('Ready', () => res(true)));
    const guild = new Promise(res => client.on('GuildCreate', res));

    test('Bot can login', () => {
        expect(isReady).resolves.toBeTruthy();
    });
    test('Bot Can Receive Guilds', () => {
        expect(guild).resolves.toBeTruthy();
    });

    afterAll(done => {
        client.kill().then(() => done());
    });
});
