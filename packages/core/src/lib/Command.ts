import {
    APIApplicationCommand,
    RESTPostAPIApplicationCommandsJSONBody as RestApplicationCommand,
    ApplicationCommandType as CommandType,
    Routes,
} from 'discord-api-types/v10';
import { POST } from '../util/http';

export interface CommandConfig {
    name: string;
    description?: string;
    guild?: string;
}

export class ApplicationCommand {
    constructor(protected __data: RestApplicationCommand & { guild_id?: string }) {}

    toJSON() {
        return this.__data;
    }

    toString() {
        return this.__data.type === CommandType.ChatInput ? '/' : '' + this.__data.name;
    }

    private _validateCommand(): [boolean, string[] | null] {
        const properties: (keyof typeof this.__data)[] = [];

        // check name
        const SLASH_COMMAND_REGEX = /^[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}$/u;

        if (SLASH_COMMAND_REGEX.test(this.__data.name)) properties.push('name');

        if (properties.length > 1) {
            return [false, properties];
        }
        return [true, null];
    }
    /**
     * @internal
     */
    construct(): Promise<APIApplicationCommand> {
        const [isValid, props] = this._validateCommand();

        if (!isValid && props) {
            throw new Error(
                `The following properties are invalid in this command: ${props?.map(
                    p => `\n - ${p}`
                )}\n Please read on how to make valid application commands here https://discord.com/developers/docs/interactions/application-commands`
            );
        }
        return POST(
            this.__data.guild_id
                ? Routes.applicationGuildCommands(clientId, this.__data.guild_id)
                : Routes.applicationCommands(clientId),
            { body: this }
        );
    }
}

export class SlashCommand extends ApplicationCommand {
    name!: string;
    description?: string;
    guild?: string;

    constructor(options: CommandConfig) {
        super({
            name: options.name,
            description: options.description || '',
            guild_id: options.guild,
            type: CommandType.ChatInput,
        });
        Object.assign(this, options);
    }
}
