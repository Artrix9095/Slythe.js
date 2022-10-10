/**
 * @internal
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import * as DAPI from 'discord-api-types/v10';
import { WebSocket } from 'ws';
import {
    GatewayChannelCreateDispatch,
    GatewayChannelDeleteDispatch,
    GatewayChannelPinsUpdateDispatch,
    GatewayChannelUpdateDispatch,
    GatewayCloseCodes,
    GatewayDispatchEvents as Dispatch,
    GatewayDispatchPayload,
    GatewayGuildBanAddDispatch,
    GatewayGuildBanRemoveDispatch,
    GatewayGuildCreateDispatch,
    GatewayGuildDeleteDispatch,
    GatewayGuildEmojisUpdateDispatch,
    GatewayGuildIntegrationsUpdateDispatch,
    GatewayGuildMemberAddDispatch,
    GatewayGuildMemberRemoveDispatch,
    GatewayGuildMembersChunkDispatch,
    GatewayGuildMemberUpdateDispatch,
    GatewayGuildRoleCreateDispatch,
    GatewayGuildRoleDeleteDispatch,
    GatewayGuildRoleUpdateDispatch,
    GatewayGuildScheduledEventCreateDispatch,
    GatewayGuildScheduledEventDeleteDispatch,
    GatewayGuildScheduledEventUpdateDispatch,
    GatewayGuildScheduledEventUserAddDispatch,
    GatewayGuildScheduledEventUserRemoveDispatch,
    GatewayGuildStickersUpdateDispatch,
    GatewayGuildUpdateDispatch,
    GatewayIdentifyData,
    GatewayIntegrationCreateDispatch,
    GatewayIntegrationDeleteDispatch,
    GatewayIntegrationUpdateDispatch,
    GatewayIntentBits,
    GatewayInteractionCreateDispatch,
    GatewayInviteCreateDispatch,
    GatewayInviteDeleteDispatch,
    GatewayMessageCreateDispatch,
    GatewayMessageDeleteBulkDispatch,
    GatewayMessageDeleteDispatch,
    GatewayMessageReactionAddDispatch,
    GatewayMessageReactionRemoveAllDispatch,
    GatewayMessageReactionRemoveDispatch,
    GatewayMessageReactionRemoveEmojiDispatch,
    GatewayMessageUpdateDispatch,
    GatewayOpcodes,
    GatewayPresenceUpdateData,
    GatewayReadyDispatch,
    GatewayReadyDispatchData,
    GatewayResumedDispatch,
    GatewayStageInstanceCreateDispatch,
    GatewayStageInstanceDeleteDispatch,
    GatewayStageInstanceUpdateDispatch,
    GatewayThreadCreateDispatch,
    GatewayThreadDeleteDispatch,
    GatewayThreadListSyncDispatch,
    GatewayThreadMembersUpdateDispatch,
    GatewayThreadMemberUpdateDispatch,
    GatewayThreadUpdateDispatch,
    GatewayTypingStartDispatch,
    GatewayUserUpdateDispatch,
    GatewayVoiceServerUpdateDispatch,
    GatewayVoiceStateUpdate,
    GatewayWebhooksUpdateDispatch,
} from 'discord-api-types/gateway/v10';
import { joinIntents } from '../../util/gateway';
import { EventEmitterWithLogger } from './Logger';
import { snakeToPascal } from '../../util/string';
import { LevelWithSilent } from 'pino';

type GatewayDispatchEventsBinder = {
    // Channels
    [Dispatch.ChannelCreate]: GatewayChannelCreateDispatch;
    [Dispatch.ChannelUpdate]: GatewayChannelUpdateDispatch;
    [Dispatch.ChannelDelete]: GatewayChannelDeleteDispatch;
    [Dispatch.ChannelPinsUpdate]: GatewayChannelPinsUpdateDispatch;
    // Guild CRUD
    [Dispatch.GuildCreate]: GatewayGuildCreateDispatch;
    [Dispatch.GuildDelete]: GatewayGuildDeleteDispatch;
    [Dispatch.GuildUpdate]: GatewayGuildUpdateDispatch;
    [Dispatch.GuildEmojisUpdate]: GatewayGuildEmojisUpdateDispatch;
    [Dispatch.GuildMemberAdd]: GatewayGuildMemberAddDispatch;
    [Dispatch.GuildMemberRemove]: GatewayGuildMemberRemoveDispatch;
    [Dispatch.GuildMemberUpdate]: GatewayGuildMemberUpdateDispatch;
    [Dispatch.GuildMembersChunk]: GatewayGuildMembersChunkDispatch;
    [Dispatch.GuildBanAdd]: GatewayGuildBanAddDispatch;
    [Dispatch.GuildBanRemove]: GatewayGuildBanRemoveDispatch;
    [Dispatch.GuildIntegrationsUpdate]: GatewayGuildIntegrationsUpdateDispatch;
    [Dispatch.GuildRoleCreate]: GatewayGuildRoleCreateDispatch;
    [Dispatch.GuildRoleDelete]: GatewayGuildRoleDeleteDispatch;
    [Dispatch.GuildRoleUpdate]: GatewayGuildRoleUpdateDispatch;
    [Dispatch.GuildScheduledEventCreate]: GatewayGuildScheduledEventCreateDispatch;
    [Dispatch.GuildScheduledEventUpdate]: GatewayGuildScheduledEventUpdateDispatch;
    [Dispatch.GuildScheduledEventDelete]: GatewayGuildScheduledEventDeleteDispatch;
    [Dispatch.GuildScheduledEventUserAdd]: GatewayGuildScheduledEventUserAddDispatch;
    [Dispatch.GuildScheduledEventUserRemove]: GatewayGuildScheduledEventUserRemoveDispatch;
    [Dispatch.GuildStickersUpdate]: GatewayGuildStickersUpdateDispatch;
    // Integrations and Interactions
    [Dispatch.IntegrationCreate]: GatewayIntegrationCreateDispatch;
    [Dispatch.IntegrationUpdate]: GatewayIntegrationUpdateDispatch;
    [Dispatch.IntegrationDelete]: GatewayIntegrationDeleteDispatch;
    [Dispatch.ApplicationCommandPermissionsUpdate]: any;
    [Dispatch.InteractionCreate]: GatewayInteractionCreateDispatch;
    // Invites
    [Dispatch.InviteCreate]: GatewayInviteCreateDispatch;
    [Dispatch.InviteDelete]: GatewayInviteDeleteDispatch;
    // Messages
    [Dispatch.MessageCreate]: GatewayMessageCreateDispatch;
    [Dispatch.MessageUpdate]: GatewayMessageUpdateDispatch;
    [Dispatch.MessageDelete]: GatewayMessageDeleteDispatch;
    [Dispatch.MessageDeleteBulk]: GatewayMessageDeleteBulkDispatch;
    [Dispatch.MessageReactionAdd]: GatewayMessageReactionAddDispatch;
    [Dispatch.MessageReactionRemove]: GatewayMessageReactionRemoveDispatch;
    [Dispatch.MessageReactionRemoveAll]: GatewayMessageReactionRemoveAllDispatch;
    [Dispatch.MessageReactionRemoveEmoji]: GatewayMessageReactionRemoveEmojiDispatch;
    // Bot stuff
    [Dispatch.PresenceUpdate]: GatewayPresenceUpdateData;
    [Dispatch.Ready]: GatewayReadyDispatch;
    [Dispatch.Resumed]: GatewayResumedDispatch;
    // Stage
    [Dispatch.StageInstanceCreate]: GatewayStageInstanceCreateDispatch;
    [Dispatch.StageInstanceUpdate]: GatewayStageInstanceUpdateDispatch;
    [Dispatch.StageInstanceDelete]: GatewayStageInstanceDeleteDispatch;
    // Thread
    [Dispatch.ThreadCreate]: GatewayThreadCreateDispatch;
    [Dispatch.ThreadDelete]: GatewayThreadDeleteDispatch;
    [Dispatch.ThreadUpdate]: GatewayThreadUpdateDispatch;
    [Dispatch.ThreadListSync]: GatewayThreadListSyncDispatch;
    [Dispatch.ThreadMemberUpdate]: GatewayThreadMemberUpdateDispatch;
    [Dispatch.ThreadMembersUpdate]: GatewayThreadMembersUpdateDispatch;
    [Dispatch.ThreadUpdate]: GatewayThreadUpdateDispatch;
    [Dispatch.TypingStart]: GatewayTypingStartDispatch;
    [Dispatch.UserUpdate]: GatewayUserUpdateDispatch;
    // Misc
    [Dispatch.VoiceServerUpdate]: GatewayVoiceServerUpdateDispatch;
    [Dispatch.VoiceStateUpdate]: GatewayVoiceStateUpdate;
    [Dispatch.WebhooksUpdate]: GatewayWebhooksUpdateDispatch;
};

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export default class GatewayHandler extends EventEmitterWithLogger<
    {
        [K in keyof typeof Dispatch]: [
            GatewayDispatchEventsBinder[typeof Dispatch[K]]['d']
        ];
    } & { rawMSG: [GatewayDispatchPayload] }
> {
    public isReady = false;
    public session: { seq?: number; id?: string; reconnectUrl?: string } = {};
    protected ws?: WebSocket;
    private heartBeatIntervalId: NodeJS.Timer | null = null;
    constructor(
        public intents: (keyof typeof GatewayIntentBits)[],
        protected token?: string,
        logLevel?: LevelWithSilent
    ) {
        super(logLevel);
        global.logger = this.logger;
    }

    protected _heartbeat() {
        this._sendOp(GatewayOpcodes.HeartbeatAck);
    }

    protected _sendEvent(e: Dispatch, d?: any) {
        this.ws?.send(
            JSON.stringify({
                op: GatewayOpcodes.Dispatch,
                t: e,
                d,
            })
        );
    }
    protected _sendOp(op: GatewayOpcodes, d?: any) {
        this.ws?.send(
            JSON.stringify({
                op,
                t: null,
                d,
            })
        );
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected _onReady(ready: GatewayReadyDispatch) {
        throw new Error('Implement this');
    }
    protected _identify() {
        this.logger.debug('Sending Identify');
        this._sendOp(GatewayOpcodes.Identify, {
            token: this.token,
            intents: joinIntents(this.intents),
            properties: {
                os: process.platform,
                browser: 'slythejs',
                device: 'slythejs',
            },
        } as GatewayIdentifyData);
    }
    protected handleMessage(data: GatewayDispatchPayload & { d: any }) {
        // https://discord.com/developers/docs/topics/gateway#resuming
        if (data.s) this.session.seq = data.s;
        this.emit('rawMSG', data.d);
        if (data.op !== GatewayOpcodes.Dispatch) {
            this.logger.debug('Received Message with OP Code ' + GatewayOpcodes[data.op]); //TODO: fix this
            if (data.op === GatewayOpcodes.Hello) {
                const jitter = Math.random(); // https://discord.com/developers/docs/topics/gateway#heartbeat-interval

                this.heartBeatIntervalId = setInterval(
                    () => this._heartbeat(),
                    data.d.heartbeat_interval * jitter
                );

                this._identify();
            } else if (data.op === GatewayOpcodes.Reconnect) {
                this.logger.debug('Reconnect Requested');
                this.disconnect();
                this.connect();
            } else if (data.op === GatewayOpcodes.InvalidSession) {
                this.logger.warn('Received Invalid session');
                if (data.d) {
                    this.logger.debug('Reconnect Requested via Invalid session');
                    this.disconnect();
                    this.connect();
                } else {
                    throw new Error(
                        'Discord gave back an Invalid session. We cannot reconnect.'
                    );
                }
            } else if (data.op === GatewayOpcodes.Heartbeat) {
                this._heartbeat();
            }
        } else {
            this.logger.debug('Received Message with Event ' + data.t);
            if (data.t === Dispatch.Ready) {
                this.session.id = (data.d as GatewayReadyDispatchData).session_id;
                this.session.reconnectUrl = (
                    data.d as GatewayReadyDispatchData
                ).resume_gateway_url;

                this._onReady(data);

                this.emit('Ready', data.d);
            } else {
                this.emit(snakeToPascal(data.t), data.d);
            }
        }
    }
    protected _reconnect() {
        this._sendOp(GatewayOpcodes.Resume, {
            token: this.token,
            session_id: this.session?.id,
            seq: this.session.seq,
        });
    }
    /**
     * Connect to discord's websocket server
     * TODO: add etf encoding https://discord.com/developers/docs/topics/gateway#etfjson
     */
    connect(token?: string) {
        if (!token && !this.token) {
            throw new Error('No Token provided');
        }
        this.token ??= token;

        if (!this.token) throw new Error('Your token is required to run the bot');

        global.token = this.token;

        const isReconnecting = !!this.session?.id;
        isReconnecting && this.logger.debug('Reconnected with resume in mind...');
        const gatewayUrl = isReconnecting
            ? this.session.reconnectUrl
            : 'wss://gateway.discord.gg/';
        this.ws = new WebSocket(gatewayUrl + `?v=${DAPI.GatewayVersion}&encoding=json`); //TODO: support erlpack etc

        this.ws.on('error', (code?: GatewayCloseCodes, reason?: Buffer) => {
            if (!code && this.isReady) {
                this.logger.error('Sudden Disconnect from discord... Reconnecting');
                this.disconnect();
                this.connect();
            } else {
                if (code === GatewayCloseCodes.AuthenticationFailed) {
                    throw new Error('Invalid token');
                } else {
                    reason && this.logger.warn(reason.toString());
                    this.logger.error('Discord disconnected with the error\n' + code);
                    this.disconnect();
                    this.connect();
                }
            }
        });

        this.ws.on('open', () => {
            if (isReconnecting) this._reconnect();

            this.ws?.on('message', d => this.handleMessage(JSON.parse(d.toString())));
        });
    }
    /**
     * Disconnects the bot from discord
     * NOTE: this is probably not what you're looking for, use client.kill()
     */
    disconnect() {
        this.isReady = false;
        clearInterval(this.heartBeatIntervalId!);
        this.ws?.close();
    }
}
