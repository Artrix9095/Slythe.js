import Emitter from '../dist/lib/base/EventEmitter';

describe('Test Custom Event Emitter', () => {
    const emitter = new Emitter<{ test: [6] }>();
    test('Emitting a function', () => {
        emitter.on('test', num => expect(num).toEqual(6));
        emitter.emit('test', 6);
    });
    afterEach(() => emitter.removeAllListeners());
});
