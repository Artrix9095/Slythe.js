/**
 * @internal
 */

import EventEmitter from 'events';

export default class TypedEmitter<
    T extends { [key: string | symbol]: any[] }
> extends EventEmitter {
    constructor() {
        super();
    }

    override on<C extends keyof T>(name: C, callback: (...args: T[C]) => any) {
        this.addListener(name as string, callback as any);
        return this;
    }
    override emit<C extends keyof T>(name: C, ...data: T[C]) {
        this.listeners(name as string).forEach(fn => fn(...data));
        return true;
    }
}
