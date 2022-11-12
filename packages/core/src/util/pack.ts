/* eslint-disable @typescript-eslint/ban-ts-comment */
let erlpack: { pack(data: any): Buffer; unpack(data: Buffer): string } | false = false;

try {
    erlpack = require('erlpack');

    // @ts-ignore
    if (!erlpack.pack) erlpack = false;
} catch {} // eslint-disable-line no-empty

export const pack = erlpack ? erlpack.pack : JSON.stringify;

export const encoding = erlpack ? 'etf' : 'json';

const ab = new TextDecoder();

export const unpack = (data: any, type: 'etf' | 'json' = encoding) => {
    if (exports.encoding === 'json' || type === 'json') {
        if (typeof data !== 'string') {
            data = ab.decode(data);
        }
        return JSON.parse(data);
    }
    if (!Buffer.isBuffer(data)) data = Buffer.from(new Uint8Array(data));
    //@ts-ignore
    return erlpack.unpack(data);
};
