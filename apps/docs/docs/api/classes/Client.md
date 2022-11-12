---
id: "Client"
title: "Class: Client"
sidebar_label: "Client"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `default`

  ↳ **`Client`**

## Constructors

### constructor

• **new Client**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ClientConfig`](../interfaces/ClientConfig.md) |

#### Overrides

GatewayHandler.constructor

#### Defined in

[lib/Client.ts:32](https://github.com/Artrix9095/Slythe.js/blob/34c394e/packages/core/src/lib/Client.ts#L32)

## Properties

### bot

• **bot**: ``null`` \| `APIUser` = `null`

#### Defined in

[lib/Client.ts:23](https://github.com/Artrix9095/Slythe.js/blob/34c394e/packages/core/src/lib/Client.ts#L23)

___

### intents

• **intents**: (``"Guilds"`` \| ``"GuildMembers"`` \| ``"GuildBans"`` \| ``"GuildEmojisAndStickers"`` \| ``"GuildIntegrations"`` \| ``"GuildWebhooks"`` \| ``"GuildInvites"`` \| ``"GuildVoiceStates"`` \| ``"GuildPresences"`` \| ``"GuildMessages"`` \| ``"GuildMessageReactions"`` \| ``"GuildMessageTyping"`` \| ``"DirectMessages"`` \| ``"DirectMessageReactions"`` \| ``"DirectMessageTyping"`` \| ``"MessageContent"`` \| ``"GuildScheduledEvents"`` \| ``"AutoModerationConfiguration"`` \| ``"AutoModerationExecution"``)[]

#### Inherited from

GatewayHandler.intents

#### Defined in

[lib/base/GatewayHandler.ts:173](https://github.com/Artrix9095/Slythe.js/blob/34c394e/packages/core/src/lib/base/GatewayHandler.ts#L173)

___

### isReady

• **isReady**: `boolean` = `false`

#### Inherited from

GatewayHandler.isReady

#### Defined in

[lib/base/GatewayHandler.ts:162](https://github.com/Artrix9095/Slythe.js/blob/34c394e/packages/core/src/lib/base/GatewayHandler.ts#L162)

___

### logger

• **logger**: `Logger`<{ `level`: `LevelWithSilent` ; `transport`: { `options`: { `colorize`: `boolean` = true } ; `target`: `string` = 'pino-pretty' }  }\>

#### Inherited from

GatewayHandler.logger

#### Defined in

[lib/base/Logger.ts:23](https://github.com/Artrix9095/Slythe.js/blob/34c394e/packages/core/src/lib/base/Logger.ts#L23)

## Methods

### connect

▸ **connect**(`token?`): `void`

Connect to discord's websocket server
TODO: add etf encoding https://discord.com/developers/docs/topics/gateway#etfjson

#### Parameters

| Name | Type |
| :------ | :------ |
| `token?` | `string` |

#### Returns

`void`

#### Inherited from

GatewayHandler.connect

#### Defined in

[lib/base/GatewayHandler.ts:298](https://github.com/Artrix9095/Slythe.js/blob/34c394e/packages/core/src/lib/base/GatewayHandler.ts#L298)

___

### disconnect

▸ **disconnect**(): `void`

Disconnects the bot from discord
NOTE: this is probably not what you're looking for, use client.kill()

#### Returns

`void`

#### Inherited from

GatewayHandler.disconnect

#### Defined in

[lib/base/GatewayHandler.ts:342](https://github.com/Artrix9095/Slythe.js/blob/34c394e/packages/core/src/lib/base/GatewayHandler.ts#L342)

___

### emit

▸ **emit**<`C`\>(`name`, ...`data`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends ``"ApplicationCommandPermissionsUpdate"`` \| ``"ChannelCreate"`` \| ``"ChannelDelete"`` \| ``"ChannelPinsUpdate"`` \| ``"ChannelUpdate"`` \| ``"GuildBanAdd"`` \| ``"GuildBanRemove"`` \| ``"GuildCreate"`` \| ``"GuildDelete"`` \| ``"GuildEmojisUpdate"`` \| ``"GuildIntegrationsUpdate"`` \| ``"GuildMemberAdd"`` \| ``"GuildMemberRemove"`` \| ``"GuildMembersChunk"`` \| ``"GuildMemberUpdate"`` \| ``"GuildRoleCreate"`` \| ``"GuildRoleDelete"`` \| ``"GuildRoleUpdate"`` \| ``"GuildStickersUpdate"`` \| ``"GuildUpdate"`` \| ``"IntegrationCreate"`` \| ``"IntegrationDelete"`` \| ``"IntegrationUpdate"`` \| ``"InteractionCreate"`` \| ``"InviteCreate"`` \| ``"InviteDelete"`` \| ``"MessageCreate"`` \| ``"MessageDelete"`` \| ``"MessageDeleteBulk"`` \| ``"MessageReactionAdd"`` \| ``"MessageReactionRemove"`` \| ``"MessageReactionRemoveAll"`` \| ``"MessageReactionRemoveEmoji"`` \| ``"MessageUpdate"`` \| ``"PresenceUpdate"`` \| ``"StageInstanceCreate"`` \| ``"StageInstanceDelete"`` \| ``"StageInstanceUpdate"`` \| ``"Ready"`` \| ``"Resumed"`` \| ``"ThreadCreate"`` \| ``"ThreadDelete"`` \| ``"ThreadListSync"`` \| ``"ThreadMembersUpdate"`` \| ``"ThreadMemberUpdate"`` \| ``"ThreadUpdate"`` \| ``"TypingStart"`` \| ``"UserUpdate"`` \| ``"VoiceServerUpdate"`` \| ``"VoiceStateUpdate"`` \| ``"WebhooksUpdate"`` \| ``"GuildScheduledEventCreate"`` \| ``"GuildScheduledEventUpdate"`` \| ``"GuildScheduledEventDelete"`` \| ``"GuildScheduledEventUserAdd"`` \| ``"GuildScheduledEventUserRemove"`` \| ``"AutoModerationRuleCreate"`` \| ``"AutoModerationRuleUpdate"`` \| ``"AutoModerationRuleDelete"`` \| ``"AutoModerationActionExecution"`` \| ``"rawMSG"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `C` |
| `...data` | {} & { `rawMSG`: [`GatewayDispatchPayload`]  }[`C`] |

#### Returns

`boolean`

#### Inherited from

GatewayHandler.emit

#### Defined in

[lib/base/EventEmitter.ts:21](https://github.com/Artrix9095/Slythe.js/blob/34c394e/packages/core/src/lib/base/EventEmitter.ts#L21)

___

### getChannel

▸ **getChannel**(`id`): `Promise`<[`Channel`](Channel.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Id of the channel |

#### Returns

`Promise`<[`Channel`](Channel.md)\>

#### Defined in

[lib/Client.ts:58](https://github.com/Artrix9095/Slythe.js/blob/34c394e/packages/core/src/lib/Client.ts#L58)

___

### getGuild

▸ **getGuild**(`id`): `Promise`<[`Guild`](Guild.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`Guild`](Guild.md)\>

#### Defined in

[lib/Client.ts:61](https://github.com/Artrix9095/Slythe.js/blob/34c394e/packages/core/src/lib/Client.ts#L61)

___

### kill

▸ **kill**(): `Promise`<`void`\>

Kills the bot

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Client.ts:67](https://github.com/Artrix9095/Slythe.js/blob/34c394e/packages/core/src/lib/Client.ts#L67)

___

### on

▸ **on**<`C`\>(`name`, `callback`): [`Client`](Client.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends ``"ApplicationCommandPermissionsUpdate"`` \| ``"ChannelCreate"`` \| ``"ChannelDelete"`` \| ``"ChannelPinsUpdate"`` \| ``"ChannelUpdate"`` \| ``"GuildBanAdd"`` \| ``"GuildBanRemove"`` \| ``"GuildCreate"`` \| ``"GuildDelete"`` \| ``"GuildEmojisUpdate"`` \| ``"GuildIntegrationsUpdate"`` \| ``"GuildMemberAdd"`` \| ``"GuildMemberRemove"`` \| ``"GuildMembersChunk"`` \| ``"GuildMemberUpdate"`` \| ``"GuildRoleCreate"`` \| ``"GuildRoleDelete"`` \| ``"GuildRoleUpdate"`` \| ``"GuildStickersUpdate"`` \| ``"GuildUpdate"`` \| ``"IntegrationCreate"`` \| ``"IntegrationDelete"`` \| ``"IntegrationUpdate"`` \| ``"InteractionCreate"`` \| ``"InviteCreate"`` \| ``"InviteDelete"`` \| ``"MessageCreate"`` \| ``"MessageDelete"`` \| ``"MessageDeleteBulk"`` \| ``"MessageReactionAdd"`` \| ``"MessageReactionRemove"`` \| ``"MessageReactionRemoveAll"`` \| ``"MessageReactionRemoveEmoji"`` \| ``"MessageUpdate"`` \| ``"PresenceUpdate"`` \| ``"StageInstanceCreate"`` \| ``"StageInstanceDelete"`` \| ``"StageInstanceUpdate"`` \| ``"Ready"`` \| ``"Resumed"`` \| ``"ThreadCreate"`` \| ``"ThreadDelete"`` \| ``"ThreadListSync"`` \| ``"ThreadMembersUpdate"`` \| ``"ThreadMemberUpdate"`` \| ``"ThreadUpdate"`` \| ``"TypingStart"`` \| ``"UserUpdate"`` \| ``"VoiceServerUpdate"`` \| ``"VoiceStateUpdate"`` \| ``"WebhooksUpdate"`` \| ``"GuildScheduledEventCreate"`` \| ``"GuildScheduledEventUpdate"`` \| ``"GuildScheduledEventDelete"`` \| ``"GuildScheduledEventUserAdd"`` \| ``"GuildScheduledEventUserRemove"`` \| ``"AutoModerationRuleCreate"`` \| ``"AutoModerationRuleUpdate"`` \| ``"AutoModerationRuleDelete"`` \| ``"AutoModerationActionExecution"`` \| ``"rawMSG"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `C` |
| `callback` | (...`args`: {} & { `rawMSG`: [`GatewayDispatchPayload`]  }[`C`]) => `any` |

#### Returns

[`Client`](Client.md)

#### Inherited from

GatewayHandler.on

#### Defined in

[lib/base/EventEmitter.ts:17](https://github.com/Artrix9095/Slythe.js/blob/34c394e/packages/core/src/lib/base/EventEmitter.ts#L17)
