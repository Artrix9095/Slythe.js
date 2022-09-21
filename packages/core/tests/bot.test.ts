import { Client } from '../';
import 'dotenv/config';

describe('Bot tests', () => {
    const client = new Client(['Guilds']);
    client.connect(process.env.TEST_BOT_TOKEN);
    test('Bot can login', async () => {
        const isReady = await new Promise(res => {
            client.on('ready', () => res(true));
        });

        expect(isReady).toBeTruthy();
    });
    afterAll(done => {
        client.disconnect();
        done();
    });
});
