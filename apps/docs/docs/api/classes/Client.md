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

[lib/Client.ts:26](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/Client.ts#L26)

## Properties

### bot

• **bot**: ``null`` \| `APIUser` = `null`

#### Defined in

[lib/Client.ts:23](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/Client.ts#L23)

___

### clientId

• `Protected` **clientId**: `string` = `''`

#### Defined in

[lib/Client.ts:25](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/Client.ts#L25)

___

### intents

• **intents**: (``"Guilds"`` \| ``"GuildMembers"`` \| ``"GuildBans"`` \| ``"GuildEmojisAndStickers"`` \| ``"GuildIntegrations"`` \| ``"GuildWebhooks"`` \| ``"GuildInvites"`` \| ``"GuildVoiceStates"`` \| ``"GuildPresences"`` \| ``"GuildMessages"`` \| ``"GuildMessageReactions"`` \| ``"GuildMessageTyping"`` \| ``"DirectMessages"`` \| ``"DirectMessageReactions"`` \| ``"DirectMessageTyping"`` \| ``"MessageContent"`` \| ``"GuildScheduledEvents"`` \| ``"AutoModerationConfiguration"`` \| ``"AutoModerationExecution"``)[]

#### Inherited from

GatewayHandler.intents

#### Defined in

[lib/base/GatewayHandler.ts:167](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/base/GatewayHandler.ts#L167)

___

### isReady

• **isReady**: `boolean` = `false`

#### Inherited from

GatewayHandler.isReady

#### Defined in

[lib/base/GatewayHandler.ts:162](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/base/GatewayHandler.ts#L162)

___

### logLevel

• `Protected` **logLevel**: `LevelWithSilent` = `'info'`

#### Inherited from

GatewayHandler.logLevel

#### Defined in

[lib/base/Logger.ts:30](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/base/Logger.ts#L30)

___

### logger

• **logger**: `Logger`<{ `level`: `LevelWithSilent` ; `transport`: { `options`: { `colorize`: `boolean` = true } ; `target`: `string` = 'pino-pretty' }  }\>

#### Inherited from

GatewayHandler.logger

#### Defined in

[lib/base/Logger.ts:21](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/base/Logger.ts#L21)

___

### publicKey

• `Protected` **publicKey**: `string` = `''`

#### Defined in

[lib/Client.ts:24](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/Client.ts#L24)

___

### session

• **session**: `Object` = `{}`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id?` | `string` |
| `reconnectUrl?` | `string` |
| `seq?` | `number` |

#### Inherited from

GatewayHandler.session

#### Defined in

[lib/base/GatewayHandler.ts:163](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/base/GatewayHandler.ts#L163)

___

### token

• `Protected` `Optional` **token**: `string`

#### Inherited from

GatewayHandler.token

#### Defined in

[lib/base/GatewayHandler.ts:168](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/base/GatewayHandler.ts#L168)

___

### ws

• `Protected` `Optional` **ws**: `WebSocket`

#### Inherited from

GatewayHandler.ws

#### Defined in

[lib/base/GatewayHandler.ts:164](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/base/GatewayHandler.ts#L164)

## Methods

### \_heartbeat

▸ `Protected` **_heartbeat**(): `void`

#### Returns

`void`

#### Inherited from

GatewayHandler.\_heartbeat

#### Defined in

[lib/base/GatewayHandler.ts:175](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/base/GatewayHandler.ts#L175)

___

### \_identify

▸ `Protected` **_identify**(): `void`

#### Returns

`void`

#### Inherited from

GatewayHandler.\_identify

#### Defined in

[lib/base/GatewayHandler.ts:201](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/base/GatewayHandler.ts#L201)

___

### \_onReady

▸ `Protected` **_onReady**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `GatewayReadyDispatch` |

#### Returns

`void`

#### Overrides

GatewayHandler.\_onReady

#### Defined in

[lib/Client.ts:39](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/Client.ts#L39)

___

### \_reconnect

▸ `Protected` **_reconnect**(): `void`

#### Returns

`void`

#### Inherited from

GatewayHandler.\_reconnect

#### Defined in

[lib/base/GatewayHandler.ts:262](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/base/GatewayHandler.ts#L262)

___

### \_sendEvent

▸ `Protected` **_sendEvent**(`e`, `d?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `GatewayDispatchEvents` |
| `d?` | `any` |

#### Returns

`void`

#### Inherited from

GatewayHandler.\_sendEvent

#### Defined in

[lib/base/GatewayHandler.ts:179](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/base/GatewayHandler.ts#L179)

___

### \_sendOp

▸ `Protected` **_sendOp**(`op`, `d?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | `GatewayOpcodes` |
| `d?` | `any` |

#### Returns

`void`

#### Inherited from

GatewayHandler.\_sendOp

#### Defined in

[lib/base/GatewayHandler.ts:188](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/base/GatewayHandler.ts#L188)

___

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

[lib/base/GatewayHandler.ts:273](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/base/GatewayHandler.ts#L273)

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

[lib/base/GatewayHandler.ts:317](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/base/GatewayHandler.ts#L317)

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

[lib/base/EventEmitter.ts:18](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/base/EventEmitter.ts#L18)

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

[lib/Client.ts:49](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/Client.ts#L49)

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

[lib/Client.ts:52](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/Client.ts#L52)

___

### handleMessage

▸ `Protected` **handleMessage**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |

#### Returns

`void`

#### Inherited from

GatewayHandler.handleMessage

#### Defined in

[lib/base/GatewayHandler.ts:213](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/base/GatewayHandler.ts#L213)

___

### kill

▸ **kill**(): `Promise`<`void`\>

Kills the bot

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/Client.ts:58](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/Client.ts#L58)

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

[lib/base/EventEmitter.ts:14](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/base/EventEmitter.ts#L14)
