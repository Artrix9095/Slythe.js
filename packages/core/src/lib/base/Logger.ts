/**
 * @internal
 */
import pino, { LevelWithSilent } from 'pino';
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
/**
 * @internal
 */
export class EventEmitterWithLogger<
    T extends { [key: string]: any[] }
> extends TypedEventEmitter<T> {
    logger = pino({
        level: this.logLevel,
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true,
            },
        },
    });
    constructor(protected logLevel: LevelWithSilent = 'info') {
        super();
    }
}
