/**
 * @internal
 */

import { APIVersion, RouteBases } from 'discord-api-types/v10';
import fetch from 'node-fetch';
type RequestOptions = {
    body?: any;
    headers?: any;
};
// https://discord.com/developers/docs/reference#user-agent
const USER_AGENT = `Slythe.js (${global.LIB_VERSION}, https://github.com/Artrix9095/Slythe.js)`;
const DISCORD_API_URL = RouteBases.api;

const handleUrl = (url: string) => (url.startsWith('/') ? DISCORD_API_URL + url : url);

const handleBody = (body?: any) => {
    let isJSON = false;
    if (!body) return [undefined, false];

    let res = body;
    try {
        res = JSON.stringify(body);
        isJSON = true;
    } catch {
        // eslint-disable-next-line no-empty
    }
    return [res, isJSON];
};
//TODO: fix DRY code
//TODO: implement rate limiting control

export const REQUEST = (
    url: string,
    method = 'GET',
    opts: Partial<RequestOptions> = {}
) => {
    logger.debug(`Making a [GET] request to ${url}`);

    const [body, isJSON] = handleBody(opts.body);

    const headers = {
        'User-Agent': USER_AGENT,
        Authorization: `Bot ${global.token}`,
        
        ...(isJSON ? { 'Content-Type': 'application/json' } : {}),
        ...opts?.headers,
    };

    logger.trace(JSON.stringify(headers, null, 2));

    return fetch(handleUrl(url), {
        method,
        headers,
        body,
    });
};

export const GET = (url: string, opts: Partial<RequestOptions> = {}) =>
    REQUEST(url, 'GET', opts);

export const POST = (url: string, opts: Partial<RequestOptions> = {}) =>
    REQUEST(url, 'POST', opts);

export const PUT = (url: string, opts: Partial<RequestOptions> = {}) =>
    REQUEST(url, 'PUT', opts);

export const PATCH = (url: string, opts: Partial<RequestOptions> = {}) =>
    REQUEST(url, 'PATCH', opts);

export const DELETE = (url: string, opts: Partial<RequestOptions> = {}) =>
    REQUEST(url, 'DELETE', opts);
