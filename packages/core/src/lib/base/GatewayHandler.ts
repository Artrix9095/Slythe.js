import EventEmitter from 'events';
import TypedEventEmitter from './EventEmitter';
import * as DAPI from 'discord-api-types/v10';
import { WebSocket } from 'ws';
import {
    GatewayDispatchEvents,
    GatewayDispatchPayload,
    GatewayHello,
    GatewayHelloData,
    GatewayCloseCodes,
    GatewayIdentifyData,
    GatewayIntentBits,
    GatewayOpcodes,
} from 'discord-api-types/gateway/v10';
import { joinIntents } from '../../util/gateway';
import { EventEmitterWithLogger } from './Logger';

export default class GatewayHandler
    extends EventEmitterWithLogger

    //TODO: Add intellisense to listeners
    implements TypedEventEmitter<any>
{
    isReady = false;
    protected ws?: WebSocket;
    private heartBeatIntervalId: any | null = null;
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
        d: any;
        t: GatewayDispatchEvents;
        s: number;
    }) {
        // this.logger.info(data.d);
        this.emit('rawMSG', data);
        if (data.op !== GatewayOpcodes.Dispatch) {
            this.logger.info('Recieved Message with OP Code ' + GatewayOpcodes[data.op]); //TODO: fix this
            if (data.op === GatewayOpcodes.Hello) {
                // https://discord.com/developers/docs/topics/gateway#heartbeat-interval
                const jitter = Math.random();
                this.heartBeatIntervalId = setInterval(
                    () => this._heartbeat,
                    data.d.heartbeat_interval * jitter
                );

                this._identify();
            } else if (data.op === GatewayOpcodes.Heartbeat) {
                this._heartbeat();
            }
        } else {
            if (data.t === GatewayDispatchEvents.Ready) {
                this.logger.info('Recieved Message with Event ' + data.t); //TODO: fix this
                this.emit('ready');
            }
        }
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
        this.ws = new WebSocket(
            `wss://gateway.discord.gg/?v=${DAPI.GatewayVersion}&encoding=json`
        );

        this.ws.on('open', () => {
            this.ws?.on('message', d => this.handleMessage(JSON.parse(d.toString())));
        });
    }

    disconnect() {
        this.isReady = false;
        clearInterval(this.heartBeatIntervalId);
        this.ws?.close();
    }
}
