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

[packages/core/src/lib/Client.ts:28](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/Client.ts#L28)

## Properties

### bot

• **bot**: ``null`` \| `APIUser` = `null`

#### Defined in

[packages/core/src/lib/Client.ts:24](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/Client.ts#L24)

___

### clientId

• `Protected` **clientId**: `string` = `''`

#### Defined in

[packages/core/src/lib/Client.ts:27](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/Client.ts#L27)

___

### intents

• **intents**: (``"Guilds"`` \| ``"GuildMembers"`` \| ``"GuildBans"`` \| ``"GuildEmojisAndStickers"`` \| ``"GuildIntegrations"`` \| ``"GuildWebhooks"`` \| ``"GuildInvites"`` \| ``"GuildVoiceStates"`` \| ``"GuildPresences"`` \| ``"GuildMessages"`` \| ``"GuildMessageReactions"`` \| ``"GuildMessageTyping"`` \| ``"DirectMessages"`` \| ``"DirectMessageReactions"`` \| ``"DirectMessageTyping"`` \| ``"MessageContent"`` \| ``"GuildScheduledEvents"`` \| ``"AutoModerationConfiguration"`` \| ``"AutoModerationExecution"``)[]

#### Inherited from

GatewayHandler.intents

#### Defined in

[packages/core/src/lib/base/GatewayHandler.ts:167](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/base/GatewayHandler.ts#L167)

___

### isReady

• **isReady**: `boolean` = `false`

#### Inherited from

GatewayHandler.isReady

#### Defined in

[packages/core/src/lib/base/GatewayHandler.ts:162](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/base/GatewayHandler.ts#L162)

___

### logLevel

• `Protected` **logLevel**: `LevelWithSilent` = `'info'`

#### Inherited from

GatewayHandler.logLevel

#### Defined in

[packages/core/src/lib/base/Logger.ts:30](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/base/Logger.ts#L30)

___

### logger

• **logger**: `Logger`<{ `level`: `LevelWithSilent` ; `transport`: { `options`: { `colorize`: `boolean` = true } ; `target`: `string` = 'pino-pretty' }  }\>

#### Inherited from

GatewayHandler.logger

#### Defined in

[packages/core/src/lib/base/Logger.ts:21](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/base/Logger.ts#L21)

___

### publicKey

• `Protected` **publicKey**: `string` = `''`

#### Defined in

[packages/core/src/lib/Client.ts:26](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/Client.ts#L26)

___

### server

• **server**: `FastifyInstance`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>, `IncomingMessage`, `ServerResponse`<`IncomingMessage`\>, `Logger`<{ `level`: `LevelWithSilent` ; `transport`: { `options`: { `colorize`: `boolean` = true } ; `target`: `string` = 'pino-pretty' }  }\>, `FastifyTypeProviderDefault`\> & `PromiseLike`<`FastifyInstance`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>, `IncomingMessage`, `ServerResponse`<`IncomingMessage`\>, `Logger`<{ `level`: `LevelWithSilent` ; `transport`: { `options`: { `colorize`: `boolean` = true } ; `target`: `string` = 'pino-pretty' }  }\>, `FastifyTypeProviderDefault`\>\>

#### Defined in

[packages/core/src/lib/Client.ts:25](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/Client.ts#L25)

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

[packages/core/src/lib/base/GatewayHandler.ts:163](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/base/GatewayHandler.ts#L163)

___

### token

• `Protected` `Optional` **token**: `string`

#### Inherited from

GatewayHandler.token

#### Defined in

[packages/core/src/lib/base/GatewayHandler.ts:168](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/base/GatewayHandler.ts#L168)

___

### ws

• `Protected` `Optional` **ws**: `WebSocket`

#### Inherited from

GatewayHandler.ws

#### Defined in

[packages/core/src/lib/base/GatewayHandler.ts:164](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/base/GatewayHandler.ts#L164)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](Client.md#capturerejectionsymbol)

#### Inherited from

GatewayHandler.captureRejectionSymbol

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:291

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

GatewayHandler.captureRejections

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:296

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

GatewayHandler.defaultMaxListeners

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:297

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](Client.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

GatewayHandler.errorMonitor

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:290

## Methods

### \_handleServer

▸ `Protected` **_handleServer**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/lib/Client.ts:64](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/Client.ts#L64)

___

### \_heartbeat

▸ `Protected` **_heartbeat**(): `void`

#### Returns

`void`

#### Inherited from

GatewayHandler.\_heartbeat

#### Defined in

[packages/core/src/lib/base/GatewayHandler.ts:175](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/base/GatewayHandler.ts#L175)

___

### \_identify

▸ `Protected` **_identify**(): `void`

#### Returns

`void`

#### Inherited from

GatewayHandler.\_identify

#### Defined in

[packages/core/src/lib/base/GatewayHandler.ts:201](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/base/GatewayHandler.ts#L201)

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

[packages/core/src/lib/Client.ts:73](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/Client.ts#L73)

___

### \_reconnect

▸ `Protected` **_reconnect**(): `void`

#### Returns

`void`

#### Inherited from

GatewayHandler.\_reconnect

#### Defined in

[packages/core/src/lib/base/GatewayHandler.ts:262](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/base/GatewayHandler.ts#L262)

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

[packages/core/src/lib/base/GatewayHandler.ts:179](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/base/GatewayHandler.ts#L179)

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

[packages/core/src/lib/base/GatewayHandler.ts:188](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/base/GatewayHandler.ts#L188)

___

### \_verifyDiscord

▸ `Protected` **_verifyDiscord**(`req`, `res`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `FastifyRequest`<`RouteGenericInterface`, `RawServerDefault`, `IncomingMessage`, `FastifySchema`, `FastifyTypeProviderDefault`, `unknown`, `FastifyBaseLogger`, `ResolveFastifyRequestType`<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\> |
| `res` | `FastifyReply`<`RawServerDefault`, `IncomingMessage`, `ServerResponse`<`IncomingMessage`\>, `RouteGenericInterface`, `unknown`, `FastifySchema`, `FastifyTypeProviderDefault`, `unknown`\> |
| `done` | `HookHandlerDoneFunction` |

#### Returns

`void`

#### Defined in

[packages/core/src/lib/Client.ts:43](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/Client.ts#L43)

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`Client`](Client.md)

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Client`](Client.md)

#### Inherited from

GatewayHandler.addListener

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:317

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

[packages/core/src/lib/base/GatewayHandler.ts:273](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/base/GatewayHandler.ts#L273)

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

[packages/core/src/lib/base/GatewayHandler.ts:317](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/base/GatewayHandler.ts#L317)

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
| `...data` | { `ApplicationCommandPermissionsUpdate`: [`any`] = "APPLICATION\_COMMAND\_PERMISSIONS\_UPDATE"; `AutoModerationActionExecution`: [`GatewayAutoModerationActionExecutionDispatchData`] = "AUTO\_MODERATION\_ACTION\_EXECUTION"; `AutoModerationRuleCreate`: [`unknown`] = "AUTO\_MODERATION\_RULE\_CREATE"; `AutoModerationRuleDelete`: [`unknown`] = "AUTO\_MODERATION\_RULE\_DELETE"; `AutoModerationRuleUpdate`: [`unknown`] = "AUTO\_MODERATION\_RULE\_UPDATE"; `ChannelCreate`: [`APIChannel`] = "CHANNEL\_CREATE"; `ChannelDelete`: [`APIChannel`] = "CHANNEL\_DELETE"; `ChannelPinsUpdate`: [`GatewayChannelPinsUpdateDispatchData`] = "CHANNEL\_PINS\_UPDATE"; `ChannelUpdate`: [`APIChannel`] = "CHANNEL\_UPDATE"; `GuildBanAdd`: [`GatewayGuildBanModifyDispatchData`] = "GUILD\_BAN\_ADD"; `GuildBanRemove`: [`GatewayGuildBanModifyDispatchData`] = "GUILD\_BAN\_REMOVE"; `GuildCreate`: [`GatewayGuildCreateDispatchData`] = "GUILD\_CREATE"; `GuildDelete`: [`APIUnavailableGuild`] = "GUILD\_DELETE"; `GuildEmojisUpdate`: [`GatewayGuildEmojisUpdateDispatchData`] = "GUILD\_EMOJIS\_UPDATE"; `GuildIntegrationsUpdate`: [`GatewayGuildIntegrationsUpdateDispatchData`] = "GUILD\_INTEGRATIONS\_UPDATE"; `GuildMemberAdd`: [`GatewayGuildMemberAddDispatchData`] = "GUILD\_MEMBER\_ADD"; `GuildMemberRemove`: [`GatewayGuildMemberRemoveDispatchData`] = "GUILD\_MEMBER\_REMOVE"; `GuildMemberUpdate`: [`GatewayGuildMemberUpdateDispatchData`] = "GUILD\_MEMBER\_UPDATE"; `GuildMembersChunk`: [`GatewayGuildMembersChunkDispatchData`] = "GUILD\_MEMBERS\_CHUNK"; `GuildRoleCreate`: [`GatewayGuildRoleModifyDispatchData`] = "GUILD\_ROLE\_CREATE"; `GuildRoleDelete`: [`GatewayGuildRoleDeleteDispatchData`] = "GUILD\_ROLE\_DELETE"; `GuildRoleUpdate`: [`GatewayGuildRoleModifyDispatchData`] = "GUILD\_ROLE\_UPDATE"; `GuildScheduledEventCreate`: [`APIGuildScheduledEvent`] = "GUILD\_SCHEDULED\_EVENT\_CREATE"; `GuildScheduledEventDelete`: [`APIGuildScheduledEvent`] = "GUILD\_SCHEDULED\_EVENT\_DELETE"; `GuildScheduledEventUpdate`: [`APIGuildScheduledEvent`] = "GUILD\_SCHEDULED\_EVENT\_UPDATE"; `GuildScheduledEventUserAdd`: [`GatewayGuildScheduledEventUserAddDispatchData`] = "GUILD\_SCHEDULED\_EVENT\_USER\_ADD"; `GuildScheduledEventUserRemove`: [`GatewayGuildScheduledEventUserAddDispatchData`] = "GUILD\_SCHEDULED\_EVENT\_USER\_REMOVE"; `GuildStickersUpdate`: [`GatewayGuildStickersUpdateDispatchData`] = "GUILD\_STICKERS\_UPDATE"; `GuildUpdate`: [`APIGuild`] = "GUILD\_UPDATE"; `IntegrationCreate`: [`GatewayIntegrationCreateDispatchData`] = "INTEGRATION\_CREATE"; `IntegrationDelete`: [`GatewayIntegrationDeleteDispatchData`] = "INTEGRATION\_DELETE"; `IntegrationUpdate`: [`GatewayIntegrationUpdateDispatchData`] = "INTEGRATION\_UPDATE"; `InteractionCreate`: [`APIInteraction`] = "INTERACTION\_CREATE"; `InviteCreate`: [`GatewayInviteCreateDispatchData`] = "INVITE\_CREATE"; `InviteDelete`: [`GatewayInviteDeleteDispatchData`] = "INVITE\_DELETE"; `MessageCreate`: [`GatewayMessageCreateDispatchData`] = "MESSAGE\_CREATE"; `MessageDelete`: [`GatewayMessageDeleteDispatchData`] = "MESSAGE\_DELETE"; `MessageDeleteBulk`: [`GatewayMessageDeleteBulkDispatchData`] = "MESSAGE\_DELETE\_BULK"; `MessageReactionAdd`: [`Omit`<{ `channel_id`: `string` ; `emoji`: `APIEmoji` ; `guild_id?`: `string` ; `member?`: `APIGuildMember` ; `message_id`: `string` ; `user_id`: `string`  }, `never`\>] = "MESSAGE\_REACTION\_ADD"; `MessageReactionRemove`: [`Omit`<{ `channel_id`: `string` ; `emoji`: `APIEmoji` ; `guild_id?`: `string` ; `member?`: `APIGuildMember` ; `message_id`: `string` ; `user_id`: `string`  }, ``"member"``\>] = "MESSAGE\_REACTION\_REMOVE"; `MessageReactionRemoveAll`: [`MessageReactionRemoveData`] = "MESSAGE\_REACTION\_REMOVE\_ALL"; `MessageReactionRemoveEmoji`: [`GatewayMessageReactionRemoveEmojiDispatchData`] = "MESSAGE\_REACTION\_REMOVE\_EMOJI"; `MessageUpdate`: [`GatewayMessageUpdateDispatchData`] = "MESSAGE\_UPDATE"; `PresenceUpdate`: [`unknown`] = "PRESENCE\_UPDATE"; `Ready`: [`GatewayReadyDispatchData`] = "READY"; `Resumed`: [`never`] = "RESUMED"; `StageInstanceCreate`: [`APIStageInstance`] = "STAGE\_INSTANCE\_CREATE"; `StageInstanceDelete`: [`APIStageInstance`] = "STAGE\_INSTANCE\_DELETE"; `StageInstanceUpdate`: [`APIStageInstance`] = "STAGE\_INSTANCE\_UPDATE"; `ThreadCreate`: [`APIChannel`] = "THREAD\_CREATE"; `ThreadDelete`: [`APIChannel`] = "THREAD\_DELETE"; `ThreadListSync`: [`GatewayThreadListSync`] = "THREAD\_LIST\_SYNC"; `ThreadMemberUpdate`: [`GatewayThreadMemberUpdateDispatchData`] = "THREAD\_MEMBER\_UPDATE"; `ThreadMembersUpdate`: [`GatewayThreadMembersUpdate`] = "THREAD\_MEMBERS\_UPDATE"; `ThreadUpdate`: [`APIChannel`] = "THREAD\_UPDATE"; `TypingStart`: [`GatewayTypingStartDispatchData`] = "TYPING\_START"; `UserUpdate`: [`APIUser`] = "USER\_UPDATE"; `VoiceServerUpdate`: [`GatewayVoiceServerUpdateDispatchData`] = "VOICE\_SERVER\_UPDATE"; `VoiceStateUpdate`: [`GatewayVoiceStateUpdateData`] = "VOICE\_STATE\_UPDATE"; `WebhooksUpdate`: [`GatewayWebhooksUpdateDispatchData`] = "WEBHOOKS\_UPDATE" } & { `rawMSG`: [`GatewayDispatchPayload`]  }[`C`] |

#### Returns

`boolean`

#### Inherited from

GatewayHandler.emit

#### Defined in

[packages/core/src/lib/base/EventEmitter.ts:18](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/base/EventEmitter.ts#L18)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

GatewayHandler.eventNames

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:632

___

### getChannel

▸ **getChannel**(`id`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Id of the channel |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/core/src/lib/Client.ts:83](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/Client.ts#L83)

___

### getGuild

▸ **getGuild**(`id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/core/src/lib/Client.ts:88](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/Client.ts#L88)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](Client.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

GatewayHandler.getMaxListeners

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:489

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

[packages/core/src/lib/base/GatewayHandler.ts:213](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/base/GatewayHandler.ts#L213)

___

### kill

▸ **kill**(): `Promise`<`void`\>

Kills the bot and host

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/lib/Client.ts:94](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/Client.ts#L94)

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`Since`**

v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

GatewayHandler.listenerCount

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:579

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

GatewayHandler.listeners

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:502

___

### off

▸ **off**(`eventName`, `listener`): [`Client`](Client.md)

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Client`](Client.md)

#### Inherited from

GatewayHandler.off

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:462

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
| `callback` | (...`args`: { `ApplicationCommandPermissionsUpdate`: [`any`] = "APPLICATION\_COMMAND\_PERMISSIONS\_UPDATE"; `AutoModerationActionExecution`: [`GatewayAutoModerationActionExecutionDispatchData`] = "AUTO\_MODERATION\_ACTION\_EXECUTION"; `AutoModerationRuleCreate`: [`unknown`] = "AUTO\_MODERATION\_RULE\_CREATE"; `AutoModerationRuleDelete`: [`unknown`] = "AUTO\_MODERATION\_RULE\_DELETE"; `AutoModerationRuleUpdate`: [`unknown`] = "AUTO\_MODERATION\_RULE\_UPDATE"; `ChannelCreate`: [`APIChannel`] = "CHANNEL\_CREATE"; `ChannelDelete`: [`APIChannel`] = "CHANNEL\_DELETE"; `ChannelPinsUpdate`: [`GatewayChannelPinsUpdateDispatchData`] = "CHANNEL\_PINS\_UPDATE"; `ChannelUpdate`: [`APIChannel`] = "CHANNEL\_UPDATE"; `GuildBanAdd`: [`GatewayGuildBanModifyDispatchData`] = "GUILD\_BAN\_ADD"; `GuildBanRemove`: [`GatewayGuildBanModifyDispatchData`] = "GUILD\_BAN\_REMOVE"; `GuildCreate`: [`GatewayGuildCreateDispatchData`] = "GUILD\_CREATE"; `GuildDelete`: [`APIUnavailableGuild`] = "GUILD\_DELETE"; `GuildEmojisUpdate`: [`GatewayGuildEmojisUpdateDispatchData`] = "GUILD\_EMOJIS\_UPDATE"; `GuildIntegrationsUpdate`: [`GatewayGuildIntegrationsUpdateDispatchData`] = "GUILD\_INTEGRATIONS\_UPDATE"; `GuildMemberAdd`: [`GatewayGuildMemberAddDispatchData`] = "GUILD\_MEMBER\_ADD"; `GuildMemberRemove`: [`GatewayGuildMemberRemoveDispatchData`] = "GUILD\_MEMBER\_REMOVE"; `GuildMemberUpdate`: [`GatewayGuildMemberUpdateDispatchData`] = "GUILD\_MEMBER\_UPDATE"; `GuildMembersChunk`: [`GatewayGuildMembersChunkDispatchData`] = "GUILD\_MEMBERS\_CHUNK"; `GuildRoleCreate`: [`GatewayGuildRoleModifyDispatchData`] = "GUILD\_ROLE\_CREATE"; `GuildRoleDelete`: [`GatewayGuildRoleDeleteDispatchData`] = "GUILD\_ROLE\_DELETE"; `GuildRoleUpdate`: [`GatewayGuildRoleModifyDispatchData`] = "GUILD\_ROLE\_UPDATE"; `GuildScheduledEventCreate`: [`APIGuildScheduledEvent`] = "GUILD\_SCHEDULED\_EVENT\_CREATE"; `GuildScheduledEventDelete`: [`APIGuildScheduledEvent`] = "GUILD\_SCHEDULED\_EVENT\_DELETE"; `GuildScheduledEventUpdate`: [`APIGuildScheduledEvent`] = "GUILD\_SCHEDULED\_EVENT\_UPDATE"; `GuildScheduledEventUserAdd`: [`GatewayGuildScheduledEventUserAddDispatchData`] = "GUILD\_SCHEDULED\_EVENT\_USER\_ADD"; `GuildScheduledEventUserRemove`: [`GatewayGuildScheduledEventUserAddDispatchData`] = "GUILD\_SCHEDULED\_EVENT\_USER\_REMOVE"; `GuildStickersUpdate`: [`GatewayGuildStickersUpdateDispatchData`] = "GUILD\_STICKERS\_UPDATE"; `GuildUpdate`: [`APIGuild`] = "GUILD\_UPDATE"; `IntegrationCreate`: [`GatewayIntegrationCreateDispatchData`] = "INTEGRATION\_CREATE"; `IntegrationDelete`: [`GatewayIntegrationDeleteDispatchData`] = "INTEGRATION\_DELETE"; `IntegrationUpdate`: [`GatewayIntegrationUpdateDispatchData`] = "INTEGRATION\_UPDATE"; `InteractionCreate`: [`APIInteraction`] = "INTERACTION\_CREATE"; `InviteCreate`: [`GatewayInviteCreateDispatchData`] = "INVITE\_CREATE"; `InviteDelete`: [`GatewayInviteDeleteDispatchData`] = "INVITE\_DELETE"; `MessageCreate`: [`GatewayMessageCreateDispatchData`] = "MESSAGE\_CREATE"; `MessageDelete`: [`GatewayMessageDeleteDispatchData`] = "MESSAGE\_DELETE"; `MessageDeleteBulk`: [`GatewayMessageDeleteBulkDispatchData`] = "MESSAGE\_DELETE\_BULK"; `MessageReactionAdd`: [`Omit`<{ `channel_id`: `string` ; `emoji`: `APIEmoji` ; `guild_id?`: `string` ; `member?`: `APIGuildMember` ; `message_id`: `string` ; `user_id`: `string`  }, `never`\>] = "MESSAGE\_REACTION\_ADD"; `MessageReactionRemove`: [`Omit`<{ `channel_id`: `string` ; `emoji`: `APIEmoji` ; `guild_id?`: `string` ; `member?`: `APIGuildMember` ; `message_id`: `string` ; `user_id`: `string`  }, ``"member"``\>] = "MESSAGE\_REACTION\_REMOVE"; `MessageReactionRemoveAll`: [`MessageReactionRemoveData`] = "MESSAGE\_REACTION\_REMOVE\_ALL"; `MessageReactionRemoveEmoji`: [`GatewayMessageReactionRemoveEmojiDispatchData`] = "MESSAGE\_REACTION\_REMOVE\_EMOJI"; `MessageUpdate`: [`GatewayMessageUpdateDispatchData`] = "MESSAGE\_UPDATE"; `PresenceUpdate`: [`unknown`] = "PRESENCE\_UPDATE"; `Ready`: [`GatewayReadyDispatchData`] = "READY"; `Resumed`: [`never`] = "RESUMED"; `StageInstanceCreate`: [`APIStageInstance`] = "STAGE\_INSTANCE\_CREATE"; `StageInstanceDelete`: [`APIStageInstance`] = "STAGE\_INSTANCE\_DELETE"; `StageInstanceUpdate`: [`APIStageInstance`] = "STAGE\_INSTANCE\_UPDATE"; `ThreadCreate`: [`APIChannel`] = "THREAD\_CREATE"; `ThreadDelete`: [`APIChannel`] = "THREAD\_DELETE"; `ThreadListSync`: [`GatewayThreadListSync`] = "THREAD\_LIST\_SYNC"; `ThreadMemberUpdate`: [`GatewayThreadMemberUpdateDispatchData`] = "THREAD\_MEMBER\_UPDATE"; `ThreadMembersUpdate`: [`GatewayThreadMembersUpdate`] = "THREAD\_MEMBERS\_UPDATE"; `ThreadUpdate`: [`APIChannel`] = "THREAD\_UPDATE"; `TypingStart`: [`GatewayTypingStartDispatchData`] = "TYPING\_START"; `UserUpdate`: [`APIUser`] = "USER\_UPDATE"; `VoiceServerUpdate`: [`GatewayVoiceServerUpdateDispatchData`] = "VOICE\_SERVER\_UPDATE"; `VoiceStateUpdate`: [`GatewayVoiceStateUpdateData`] = "VOICE\_STATE\_UPDATE"; `WebhooksUpdate`: [`GatewayWebhooksUpdateDispatchData`] = "WEBHOOKS\_UPDATE" } & { `rawMSG`: [`GatewayDispatchPayload`]  }[`C`]) => `any` |

#### Returns

[`Client`](Client.md)

#### Inherited from

GatewayHandler.on

#### Defined in

[packages/core/src/lib/base/EventEmitter.ts:14](https://github.com/Artrix9095/Slythe.js/blob/4e6e283/packages/core/src/lib/base/EventEmitter.ts#L14)

___

### once

▸ **once**(`eventName`, `listener`): [`Client`](Client.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Client`](Client.md)

#### Inherited from

GatewayHandler.once

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:377

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`Client`](Client.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Client`](Client.md)

#### Inherited from

GatewayHandler.prependListener

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:597

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`Client`](Client.md)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Client`](Client.md)

#### Inherited from

GatewayHandler.prependOnceListener

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:613

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`Since`**

v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

GatewayHandler.rawListeners

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:532

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Client`](Client.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Client`](Client.md)

#### Inherited from

GatewayHandler.removeAllListeners

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:473

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Client`](Client.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Client`](Client.md)

#### Inherited from

GatewayHandler.removeListener

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:457

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Client`](Client.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Client`](Client.md)

#### Inherited from

GatewayHandler.setMaxListeners

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:483

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`Since`**

v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

GatewayHandler.getEventListeners

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:262

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

GatewayHandler.listenerCount

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:234

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`Since`**

v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

GatewayHandler.on

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:217

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`Since`**

v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

GatewayHandler.once

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:157

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

GatewayHandler.once

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:158

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

**`Since`**

v15.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `DOMEventTarget`)[] | - |

#### Returns

`void`

#### Inherited from

GatewayHandler.setMaxListeners

#### Defined in

node_modules/.pnpm/@types+node@18.7.18/node_modules/@types/node/events.d.ts:280
