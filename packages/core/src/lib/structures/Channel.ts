import {
    APIChannel,
    APIGuildChannel,
    ChannelType,
    Routes,
    Snowflake,
} from 'discord-api-types/v10';
import { GET, POST } from '../../util/http';
export class Channel {
    constructor(protected __data: APIChannel) {}

    public get id(): Snowflake {
        return this.__data.id;
    }


    public get name() {
        return this.__data.name ?? null;
    }

    send(content: any): any {
        return POST(Routes.channelMessages(this.id), { body: content });
    }

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
    constructor(protected __data: APIGuildChannel<ChannelType.GuildText>) {
        super(__data);
    }

    getGuild() {
        return GET(Routes.guild(this.__data.guild_id!));
    }
}
