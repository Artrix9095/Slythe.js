/**
 * @internal
 */

import fetch from 'node-fetch';
type RequestOptions = {
    body?: any;
    headers?: any;
};
// https://discord.com/developers/docs/reference#user-agent
const USER_AGENT = `Slythe.js (${global.LIB_VERSION}, https://github.com/Artrix9095/Slythe.js)`;

//TODO: implement rate limiting control

export const GET = (url: string, opts?: RequestOptions) =>
    fetch(url, {
        method: 'GET',
        headers: {
            'User-Agent': USER_AGENT,
            Authorization: `Bot ${global.token}`,
            ...opts?.headers,
        },
        body: opts?.body,
    });

export const POST = (url: string, opts?: RequestOptions) =>
    fetch(url, {
        method: 'POST',
        headers: {
            'User-Agent': USER_AGENT,
            Authorization: `Bot ${global.token}`,
            ...opts?.headers,
        },
        body: opts?.body,
    });

export const PUT = (url: string, opts?: RequestOptions) =>
    fetch(url, {
        method: 'PUT',
        headers: {
            'User-Agent': USER_AGENT,
            Authorization: `Bot ${global.token}`,
            ...opts?.headers,
        },
        body: opts?.body,
    });

export const PATCH = (url: string, opts?: RequestOptions) =>
    fetch(url, {
        method: 'PATCH',
        headers: {
            'User-Agent': USER_AGENT,
            Authorization: `Bot ${global.token}`,
            ...opts?.headers,
        },
        body: opts?.body,
    });

export const DELETE = (url: string, opts?: RequestOptions) =>
    fetch(url, {
        method: 'DELETE',
        headers: {
            'User-Agent': USER_AGENT,
            Authorization: `Bot ${global.token}`,
            ...opts?.headers,
        },
        body: opts?.body,
    });
