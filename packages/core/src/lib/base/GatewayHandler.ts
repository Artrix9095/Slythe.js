/* eslint-disable @typescript-eslint/no-explicit-any */
import TypedEventEmitter from './EventEmitter';
import * as DAPI from 'discord-api-types/v10';
import { WebSocket } from 'ws';
import {
    GatewayCloseCodes,
    GatewayDispatchEvents,
    GatewayIdentifyData,
    GatewayIntentBits,
    GatewayOpcodes,
    GatewayReadyDispatch,
    GatewayReadyDispatchData,
} from 'discord-api-types/gateway/v10';
import { joinIntents } from '../../util/gateway';
import { EventEmitterWithLogger } from './Logger';

export default class GatewayHandler
    extends EventEmitterWithLogger

    //TODO: Add intellisense to listeners
    implements TypedEventEmitter<any>
{
    public isReady = false;
    public session: { seq?: number; id?: string; reconnectUrl?: string } = {};
    protected ws?: WebSocket;
    private heartBeatIntervalId: NodeJS.Timer | null = null;
    constructor(
        public intents: (keyof typeof GatewayIntentBits)[],
        protected token?: string
    ) {
        super();
    }

    protected _heartbeat() {
        this._sendOp(GatewayOpcodes.HeartbeatAck);
    }

    protected _sendEvent(e: GatewayDispatchEvents, d?: any) {
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
    protected _onReady(ready: GatewayReadyDispatch) {
        throw new Error('Implement this');
    }
    protected _identify() {
        this.logger.info('Sending Identify');
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
    protected handleMessage(data: {
        op: GatewayOpcodes;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        d: any;
        t: GatewayDispatchEvents;
        s?: number;
    }) {
        // https://discord.com/developers/docs/topics/gateway#resuming
        if (data.s) this.session.seq = data.s;
        this.emit('rawMSG', data);
        if (data.op !== GatewayOpcodes.Dispatch) {
            this.logger.info('Recieved Message with OP Code ' + GatewayOpcodes[data.op]); //TODO: fix this
            if (data.op === GatewayOpcodes.Hello) {
                // https://discord.com/developers/docs/topics/gateway#heartbeat-interval
                const jitter = Math.random();
                this.heartBeatIntervalId = setInterval(
                    () => this._heartbeat(),
                    data.d.heartbeat_interval * jitter
                );

                this._identify();
            } else if (data.op === GatewayOpcodes.Reconnect) {
                this.logger.info('Reconnect Requested');
                this.disconnect();
                this.connect();
            } else if (data.op === GatewayOpcodes.InvalidSession) {
                this.logger.warn('Recieved Invalid session');
                if (data.d) {
                    this.logger.info('Reconnect Requested via Invalid session');
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
            this.logger.info('Recieved Message with Event ' + data.t);
            if (data.t === GatewayDispatchEvents.Ready) {
                this.session.id = (data.d as GatewayReadyDispatchData).session_id;
                this.session.reconnectUrl = (
                    data.d as GatewayReadyDispatchData
                ).resume_gateway_url;
                this._onReady(data as any);
                this.emit('ready');
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
        const isReconnecting = !!this.session?.id;
        isReconnecting && this.logger.info('Reconnected with resume in mind...');
        const gatewayUrl = isReconnecting
            ? this.session.reconnectUrl
            : 'wss://gateway.discord.gg/';
        this.ws = new WebSocket(gatewayUrl + `?v=${DAPI.GatewayVersion}&encoding=json`);

        this.ws.on('error', (code?: GatewayCloseCodes, reason?: Buffer) => {
            if (!code) {
                this.logger.error('Sudden Disconnect from discord... Reconnecting');
                this.disconnect();
                this.connect();
            } else {
                if (code === GatewayCloseCodes.AuthenticationFailed) {
                    throw new Error('Invalid token');
                } else {
                    reason && this.logger.warn(reason.toString());
                    this.logger.warn('Discord disconnected with the error code: ' + code);
                    this.disconnect();
                    this.connect();
                }
            }
        });

        this.ws.on('open', () => {
            if (isReconnecting) {
                this._reconnect();
            }
            this.ws?.on('message', d => this.handleMessage(JSON.parse(d.toString())));
        });
    }
    /**
     * Disconnects the bot from discord
     * NOTE: this is probably not wat you're looking for, use client.kill()
     */
    disconnect() {
        this.isReady = false;
        clearInterval(this.heartBeatIntervalId!);
        this.ws?.close();
    }
}
