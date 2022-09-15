import * as DAPI from 'discord-api-types/v10';
import { joinIntents } from '../util/gateway';

export interface ClientConfig {
    token?: string | Buffer;
    intents: (keyof typeof DAPI.GatewayIntentBits)[];
}

export class Client {
    constructor(
        public config: ClientConfig = {
            intents: ['Guilds'],
        }
    ) {}

    connect() {
        const intents = joinIntents(this.config.intents);
    }
}
