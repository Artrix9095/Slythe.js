---
id: "Guild"
title: "Class: Guild"
sidebar_label: "Guild"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Guild**(`__data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__data` | `APIGuild` |

#### Defined in

[lib/structures/Guild.ts:6](https://github.com/Artrix9095/Slythe.js/blob/e85ec14/packages/core/src/lib/structures/Guild.ts#L6)

## Accessors

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[lib/structures/Guild.ts:7](https://github.com/Artrix9095/Slythe.js/blob/e85ec14/packages/core/src/lib/structures/Guild.ts#L7)

## Methods

### banMember

▸ **banMember**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/structures/Guild.ts:19](https://github.com/Artrix9095/Slythe.js/blob/e85ec14/packages/core/src/lib/structures/Guild.ts#L19)

___

### createChannel

▸ **createChannel**(`channel`): `Promise`<[`Channel`](Channel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `Omit`<`APIChannel`, ``"id"``\> |

#### Returns

`Promise`<[`Channel`](Channel.md)\>

#### Defined in

[lib/structures/Guild.ts:11](https://github.com/Artrix9095/Slythe.js/blob/e85ec14/packages/core/src/lib/structures/Guild.ts#L11)

___

### kickMember

▸ **kickMember**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/structures/Guild.ts:16](https://github.com/Artrix9095/Slythe.js/blob/e85ec14/packages/core/src/lib/structures/Guild.ts#L16)

___

### unbanMember

▸ **unbanMember**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/structures/Guild.ts:22](https://github.com/Artrix9095/Slythe.js/blob/e85ec14/packages/core/src/lib/structures/Guild.ts#L22)
