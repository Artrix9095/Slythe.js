/**
 * @internal
 */

import { APIVersion } from 'discord-api-types/v10';
import fetch from 'node-fetch';
type RequestOptions = {
    body?: any;
    headers?: any;
};
// https://discord.com/developers/docs/reference#user-agent
const USER_AGENT = `Slythe.js (${global.LIB_VERSION}, https://github.com/Artrix9095/Slythe.js)`;
const DISCORD_API_URL = `https://discord.com/api/${APIVersion}`;

const handleUrl = (url: string) => (url.startsWith('/') ? DISCORD_API_URL + url : url);

const handleBody = (body?: any) => {
    if (!body) return undefined;

    let res = body;
    try {
        res = JSON.parse(body);
    } catch {
        // eslint-disable-next-line no-empty
    }
    return res;
};

//TODO: implement rate limiting control

export const GET = (url: string, opts?: RequestOptions) => {
    logger.debug(`Making a [GET] request to ${url}`);

    const headers = {
        'User-Agent': USER_AGENT,
        Authorization: `Bot ${global.token}`,
        ...opts?.headers,
    };

    logger.trace(JSON.stringify(headers, null, 2));

    return fetch(handleUrl(url), {
        method: 'GET',
        headers,
        body: handleBody(opts?.body),
    });
};
export const POST = (url: string, opts?: RequestOptions) => {
    logger.debug(`Making a [POST] request to ${url}`);

    const headers = {
        'User-Agent': USER_AGENT,
        Authorization: `Bot ${global.token}`,
        ...opts?.headers,
    };

    logger.trace(JSON.stringify(headers, null, 2));

    return fetch(handleUrl(url), {
        method: 'POST',
        headers,
        body: handleBody(opts?.body),
    });
};
export const PUT = (url: string, opts?: RequestOptions) => {
    logger.debug(`Making a [PUT] request to ${url}`);

    const headers = {
        'User-Agent': USER_AGENT,
        Authorization: `Bot ${global.token}`,
        ...opts?.headers,
    };

    logger.trace(JSON.stringify(headers, null, 2));

    return fetch(handleUrl(url), {
        method: 'PUT',
        headers,
        body: handleBody(opts?.body),
    });
};
export const PATCH = (url: string, opts?: RequestOptions) => {
    logger.debug(`Making a [PATCH] request to ${url}`);

    const headers = {
        'User-Agent': USER_AGENT,
        Authorization: `Bot ${global.token}`,
        ...opts?.headers,
    };

    logger.trace(JSON.stringify(headers, null, 2));

    return fetch(handleUrl(url), {
        method: 'PATCH',
        headers,
        body: handleBody(opts?.body),
    });
};
export const DELETE = (url: string, opts?: RequestOptions) => {
    logger.debug(`Making a [DELETE] request to ${url}`);

    const headers = {
        'User-Agent': USER_AGENT,
        Authorization: `Bot ${global.token}`,
        ...opts?.headers,
    };

    logger.trace(JSON.stringify(headers, null, 2));

    return fetch(handleUrl(url), {
        method: 'DELETE',
        headers,
        body: handleBody(opts?.body),
    });
};
