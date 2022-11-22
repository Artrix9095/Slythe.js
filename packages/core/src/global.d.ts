import { Logger } from 'pino';

/* eslint-disable no-var */
declare global {
    declare var token: string;
    declare var clientId: string;
    declare var LIB_VERSION: string;
    declare var logger: Logger;
}
export {};
