import EventEmitter from 'events';
import pino from 'pino';

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

export class EventEmitterWithLogger extends EventEmitter {
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
