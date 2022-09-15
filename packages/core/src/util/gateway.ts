import * as DAPI from 'discord-api-types/v10';

/**
 *
 * @param intents An array of intents
 * @returns Joined Intent bits
 */
export const joinIntents = (intents: (keyof typeof DAPI.GatewayIntentBits)[]) =>
    intents.map(i => DAPI.GatewayIntentBits[i]).reduce((a, b) => a | b);
