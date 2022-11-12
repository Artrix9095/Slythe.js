import { APIChannel, APIGuild, Routes, Snowflake } from 'discord-api-types/v10';
import { DELETE, POST, PUT } from '../../util/http';
import { Channel } from './Channel';

export class Guild {
    constructor(protected __data: APIGuild) {}
    public get id() {
        return this.__data.id;
    }

    createChannel(channel: Omit<APIChannel, 'id'>) {
        return POST(Routes.guildChannels(this.id), { body: channel }).then(res =>
            Channel.init(res)
        );
    }
    async kickMember(id: Snowflake) {
        await DELETE(Routes.guildMember(this.id, id), { serializeJson: false });
    }
    async banMember(id: Snowflake) {
        await PUT(Routes.guildBan(this.id, id), { serializeJson: false });
    }
    async unbanMember(id: Snowflake) {
        await DELETE(Routes.guildBan(this.id, id), { serializeJson: false });
    }
    async leave() {
        await DELETE(Routes.userGuild(this.id), { serializeJson: false });
    }
}
