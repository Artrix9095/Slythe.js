import * as DAPI from 'discord-api-types/v10';
import GatewayHandler from './base/GatewayHandler';

export interface ClientConfig {
    token?: string | Buffer;
}

export class Client extends GatewayHandler {
    public bot: DAPI.APIUser | null = null;
    constructor(intents: (keyof typeof DAPI.GatewayIntentBits)[]) {
        super(intents);
    }
    protected override _onReady({ d: data }: DAPI.GatewayReadyDispatch) {
        this.isReady = true;
        this.bot = data.user;
    }
}
