import * as DAPI from 'discord-api-types/v10';
import GatewayHandler from './base/GatewayHandler';
import { fastify, FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';
import { verifyKey } from 'discord-interactions';
import { InteractionResponseType, InteractionType, Routes } from 'discord-api-types/v10';
import { GET } from '../util/http';
import { Channel } from './structures/Channel';
import { LevelWithSilent } from 'pino';

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
    public server = fastify({ logger: this.logger });
    protected publicKey = '';
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
            this.server.listen({ port: (process.env.PORT as any) || 8080 });
        }
        this.server.addHook('preHandler', this._verifyDiscord);
    }
    protected _verifyDiscord(
        req: FastifyRequest,
        res: FastifyReply,
        done: HookHandlerDoneFunction
    ) {
        const sig = req.headers['X-Signature-Ed25519'] as string;
        const timestamp = req.headers['X-Signature-Timestamp'] as string;

        const isValid = verifyKey(
            JSON.stringify(req.body),
            sig,
            timestamp,
            this.publicKey
        );

        const error: any = !isValid ? new Error('Invalid request') : null;

        error && (error.statusCode = 400);

        done(error);
    }
    protected _handleServer() {
        this.server.post('/', async (req, res) => {
            const { type, id, data } = req.body as any;

            if (type === InteractionType.Ping)
                return res.send({ type: InteractionResponseType.Pong });
        });
    }
    protected override _onReady({ d: data }: DAPI.GatewayReadyDispatch) {
        this.isReady = true;
        this.bot = data.user;

        this.clientId = data.user.id;
    }
    /**
     *
     * @param id Id of the channel
     */
    public getChannel(id: string) {
        return GET(Routes.channel(id))
            .then(res => res.json())
            .then(data => new Channel(data as any).init());
    }
    public getGuild(id: string) {
        return GET(Routes.guild(id)).then(res => res.json());
    }
    /**
     * Kills the bot and host
     */
    async kill() {
        await this.server.close().catch();
        this.disconnect();
    }
}
