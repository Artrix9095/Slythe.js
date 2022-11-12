import {
    APIChannel,
    APIGuildChannel,
    ChannelType,
    Routes,
    Snowflake,
} from 'discord-api-types/v10';
import { DELETE, GET, POST } from '../../util/http';

export class Channel {
    /**
     * @internal
     */
    constructor(protected __data: APIChannel) {}

    public get id(): Snowflake {
        return this.__data.id;
    }

    public get name() {
        return this.__data.name ?? null;
    }

    delete() {
        return DELETE(Routes.channel(this.id)).then(res => Channel.init(res));
    }

    send(content: any): any {
        return POST(Routes.channelMessages(this.id), { body: content });
    }

    toString() {
        return `<#${this.id}>`;
    }
    toJSON() {
        return this.__data;
    }
    // TODO: have a serializer that takes a object with camel case properties and turns it into snake case, and add defaults
    static create(data: Omit<APIChannel, 'id'>) {
        return data;
    }
    /**
     * @internal
     */
    static init(data: APIChannel): Channel {
        switch (data.type) {
            case ChannelType.GuildText:
                return new TextChannel(data);
            default:
                return new Channel(data);
        }
    }
}

export class TextChannel extends Channel {
    /**
     * @internal
     */
    constructor(protected __data: APIGuildChannel<ChannelType.GuildText>) {
        super(__data);
    }

    getGuild() {
        return GET(Routes.guild(this.__data.guild_id!));
    }
}
