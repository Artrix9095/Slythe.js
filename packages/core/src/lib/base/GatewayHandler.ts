import EventEmitter from 'events';
import TypedEventEmitter from './EventEmitter';
import * as DAPI from 'discord-api-types/v10';
import { WebSocket } from 'ws';
import {
    GatewayChannelDeleteDispatchData,
    GatewayDispatchEvents,
} from 'discord-api-types/v10';

export default class GatewayHandler
    extends EventEmitter

    //TODO: Add intellisense to listeners
    implements TypedEventEmitter<any>
{
    protected ws?: WebSocket;
    constructor() {
        super();
    }
    /**
     * Connect to discord's websocket server
     * TODO: add etf encoding https://discord.com/developers/docs/topics/gateway#etfjson
     */
    protected connect() {
        this.ws = new WebSocket(
            `wss://gateway.discord.gg/?v=${DAPI.GatewayVersion}&encoding=json`
        );

        this.ws.on('open', () => {
            this.ws?.on('message', data => {
                const res: {
                    op: DAPI.GatewayOpcodes;
                    t?: DAPI.GatewayDispatchEvents;
                    d: any;
                } = JSON.parse(data.toString('utf-8'));
                if (res.op !== DAPI.GatewayOpcodes.Dispatch) {
                }
            });
        });
    }
}
