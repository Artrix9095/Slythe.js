/**
 * @internal
 */

import { RouteBases } from 'discord-api-types/v10';
import fetch, { Response } from 'node-fetch';
type RequestOptions = {
    body?: any;
    headers?: any;
};
// https://discord.com/developers/docs/reference#user-agent
const USER_AGENT = `Slythe.js (${global.LIB_VERSION}, https://github.com/Artrix9095/Slythe.js)`;
const DISCORD_API_URL = RouteBases.api;

type APIResponse = Response & {
    __base: { url: string; method: string; opts: any };
};

const handleUrl = (url: string) => (url.startsWith('/') ? DISCORD_API_URL + url : url);

const handleBody = (body?: any): [body: any, isJSON: boolean] => {
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

export const loggerMiddleware = (res: APIResponse) => {
    logger.debug(
        `Received status code [${res.status}] from ${res.url.replace(
            DISCORD_API_URL,
            ''
        )} `
    );
    return res;
};

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const errorMiddleware = async (res: APIResponse): Promise<APIResponse> => {
    if (res.status === 429) {
        // rate limited
        const json = await res.json();
        logger.warn(`You're being rate limited for ${json.retry_after} seconds`);
        await sleep(json.retry_after * 1000 + 100);

        return await REQUEST(res.__base.url, res.__base.method, res.__base.opts);
    } else if (res.status >= 400) {
        const error = await res.json();
        throw new Error(error.message);
    } else {
        return res;
    }
};
// This function is needed so the request can be retried during rate limiting
const responseMiddleware = (data: { url: string; method: string; opts: any }) => {
    return (res: Response): APIResponse => Object.assign(res, { __base: data });
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
    })
        .then(responseMiddleware({ url, method, opts }))
        .then(loggerMiddleware)
        .then(errorMiddleware);
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
