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

//TODO: implement rate limiting control

export const GET = (url: string, opts?: RequestOptions) =>
    fetch(handleUrl(url), {
        method: 'GET',
        headers: {
            'User-Agent': USER_AGENT,
            Authorization: `Bot ${global.token}`,
            ...opts?.headers,
        },
        body: opts?.body,
    });

export const POST = (url: string, opts?: RequestOptions) =>
    fetch(handleUrl(url), {
        method: 'POST',
        headers: {
            'User-Agent': USER_AGENT,
            Authorization: `Bot ${global.token}`,
            ...opts?.headers,
        },
        body: opts?.body,
    });

export const PUT = (url: string, opts?: RequestOptions) =>
    fetch(handleUrl(url), {
        method: 'PUT',
        headers: {
            'User-Agent': USER_AGENT,
            Authorization: `Bot ${global.token}`,
            ...opts?.headers,
        },
        body: opts?.body,
    });

export const PATCH = (url: string, opts?: RequestOptions) =>
    fetch(handleUrl(url), {
        method: 'PATCH',
        headers: {
            'User-Agent': USER_AGENT,
            Authorization: `Bot ${global.token}`,
            ...opts?.headers,
        },
        body: opts?.body,
    });

export const DELETE = (url: string, opts?: RequestOptions) =>
    fetch(handleUrl(url), {
        method: 'DELETE',
        headers: {
            'User-Agent': USER_AGENT,
            Authorization: `Bot ${global.token}`,
            ...opts?.headers,
        },
        body: opts?.body,
    });
