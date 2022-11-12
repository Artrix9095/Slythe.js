import {
    APIUser,
    CDNRoutes,
    ImageFormat,
    Locale,
    Routes,
    UserAvatarFormat,
    UserBannerFormat,
} from 'discord-api-types/v10';
import { POST } from '../../util/http';
import { Channel } from './Channel';

//TODO: add flags
export class User {
    constructor(protected __data: APIUser) {}
    get id() {
        return this.__data.id;
    }
    get isBot() {
        return this.__data.bot;
    }

    get name() {
        return this.__data.username;
    }
    get isSystem() {
        return this.__data.system ?? false;
    }
    /**
     *
     * @param format The format you want the banner url to be in (E.G png, webp etc) @default png
     * @param force Whether or not you want to force the format, by default, we ignore the selected format if there is a gif available, but if you want it to *always* be a specific format, turn this on @default false
     * @returns The banner URL
     */
    banner(format: UserBannerFormat = ImageFormat.PNG, force = false) {
        return this.__data.banner
            ? CDNRoutes.userBanner(
                  this.id,
                  this.__data.banner,
                  force
                      ? format
                      : this.__data.banner.startsWith('a_')
                      ? ImageFormat.GIF
                      : format
              )
            : null;
    }
    /**
     *
     * @param format The format you want the avatar url to be in (E.G png, webp etc) @default png
     * @param force Whether or not you want to force the format, by default, we ignore the selected format if there is a gif available, but if you want it to *always* be a specific format, turn this on @default false
     * @returns The avatar URL
     */
    avatar(format: UserAvatarFormat = ImageFormat.PNG, force = false) {
        return this.__data.banner
            ? CDNRoutes.userAvatar(
                  this.id,
                  this.__data.banner,
                  force
                      ? format
                      : this.__data.banner.startsWith('a_')
                      ? ImageFormat.GIF
                      : format
              )
            : null;
    }
    /**
     * Creates a DM with a user
     * @returns A DM channel
     */
    createDM() {
        return POST(Routes.userChannels(), { body: { recipient_id: this.id } }).then(c =>
            Channel.init(c)
        );
    }

    get discriminator() {
        return this.__data.discriminator;
    }

    get tag() {
        return `${this.name}#${this.discriminator}`;
    }

    get isVerified() {
        return this.__data.verified ?? false;
    }

    get accentColor() {
        return this.__data.accent_color ?? null;
    }

    get locale(): Locale {
        return (this.__data.locale as Locale) ?? Locale.EnglishUS;
    }
    toString() {
        return this.tag;
    }

    toJSON() {
        return this.__data;
    }
}
