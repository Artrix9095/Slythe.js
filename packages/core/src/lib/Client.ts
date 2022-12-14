import * as DAPI from 'discord-api-types/v10';
import GatewayHandler from './base/GatewayHandler';
import { Routes } from 'discord-api-types/v10';
import { GET } from '../util/http';
import { Channel } from './structures/Channel';
import { LevelWithSilent } from 'pino';
import { Guild } from './structures/Guild';
import { ApplicationCommand } from './Command';

export interface ClientConfig {
    token?: string;
    clientId?: string;
    publicKey?: string;
    intents: (keyof typeof DAPI.GatewayIntentBits)[];
    /**
     * @default silent
     */
    loggerLevel?: LevelWithSilent;
}

const IS_PROD = process.env.NODE_ENV === 'production';

export class Client extends GatewayHandler {
    public bot: DAPI.APIUser | null = null;
    /**
     * @internal
     */
    protected publicKey = '';
    /**
     * @internal
     */
    protected clientId = '';
    constructor(config: ClientConfig) {
        super(config.intents, config.token, config.loggerLevel);
        this.logger.info(
            `Running in a ${IS_PROD ? 'production' : 'development'} environment `
        );
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.publicKey = config.publicKey!;
        if (IS_PROD) {
            if (!this.publicKey) {
                throw new Error('Cannot start server without public key');
            }
        }
    }
    /**
     * @internal
     */
    protected override _onReady({ d: data }: DAPI.GatewayReadyDispatch) {
        this.isReady = true;
        this.bot = data.user;

        global.clientId = this.clientId = data.user.id;
    }
    /**
     *
     * @param id Id of the channel
     */
    public getChannel(id: string) {
        return GET(Routes.channel(id)).then(data => Channel.init(data));
    }
    public getGuild(id: string) {
        return GET(Routes.guild(id)).then(data => new Guild(data));
    }
    // TODO: create a callback and storage system for slash commands
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    public registerCommand(cmd: ApplicationCommand) {}
    /**
     * Kills the bot
     */
    async kill() {
        this.disconnect();
    }
}
