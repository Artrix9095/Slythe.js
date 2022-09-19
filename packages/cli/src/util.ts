import figlet from 'figlet';

export const sleep = (ms = 1000) => new Promise(r => setTimeout(r, ms));
