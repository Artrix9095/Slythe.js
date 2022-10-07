/**
 * @internal
 */
import pino from 'pino';
import TypedEventEmitter from './EventEmitter';

export default class Logger {
    logger = pino({
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true,
            },
        },
    });
}

export class EventEmitterWithLogger<
    T extends { [key: string]: any[] }
> extends TypedEventEmitter<T> {
    logger = pino({
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true,
            },
        },
    });
    constructor() {
        super();
    }
}
