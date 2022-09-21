import * as DAPI from 'discord-api-types/v10';
import { joinIntents } from '../util/gateway';
import GatewayHandler from './base/GatewayHandler';

export interface ClientConfig {
    token?: string | Buffer;
}

export class Client extends GatewayHandler {
    constructor(intents: (keyof typeof DAPI.GatewayIntentBits)[]) {
        super(intents);
    }

    
}
