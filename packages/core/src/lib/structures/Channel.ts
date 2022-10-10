import { APIChannel, Routes } from 'discord-api-types/v10';
import { POST } from '../../util/http';
import BaseStructure from './base';

export class Channel extends BaseStructure<Channel, APIChannel> {
    public get id() {
        return this.__data.id;
    }

    public get name() {
        return this.__data.name ?? null;
    }

    /**
     *
     * @internal
     */
    init() {
        return new TextChannel(this.__data); // TODO make a switch statement that will determine what kind of channel it is
    }
}

export class TextChannel extends Channel {
    send(content: any): any {
        return POST(Routes.channelMessages(this.id), { body: content }).then(res =>
            res.json()
        );
    }
}
