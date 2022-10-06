import * as DAPI from 'discord-api-types/v10';
import GatewayHandler from './base/GatewayHandler';
import { fastify } from 'fastify';

export interface ClientConfig {
    token?: string | Buffer;
}

const IS_PROD = process.env.NODE_ENV && process.env.NODE_ENV !== 'development';

export class Client extends GatewayHandler {
    public bot: DAPI.APIUser | null = null;
    public server = fastify({ logger: this.logger });
    constructor(intents: (keyof typeof DAPI.GatewayIntentBits)[]) {
        super(intents);
        this.logger.info(
            `Running in a ${IS_PROD ? 'production' : 'development'} environment `
        );
        if (IS_PROD) {
            this.server.listen({ port: (process.env.PORT as any) || 8080 });
        }
    }
    protected override _onReady({ d: data }: DAPI.GatewayReadyDispatch) {
        this.isReady = true;
        this.bot = data.user;
    }
    /**
     * Kills the bot and host
     */
    async kill() {
        await this.server.close().catch();
        this.disconnect();
    }
}
