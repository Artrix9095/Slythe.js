export default class BaseStructure<T, BaseData> {
    constructor(protected __data: BaseData) {}

    init(): T {
        throw new Error('Implement this');
    }
}
