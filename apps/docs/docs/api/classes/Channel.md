---
id: "Channel"
title: "Class: Channel"
sidebar_label: "Channel"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`Channel`**

  ↳ [`TextChannel`](TextChannel.md)

## Accessors

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[lib/structures/Channel.ts:16](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/Channel.ts#L16)

___

### name

• `get` **name**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[lib/structures/Channel.ts:20](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/Channel.ts#L20)

## Methods

### delete

▸ **delete**(): `Promise`<[`Channel`](Channel.md)\>

#### Returns

`Promise`<[`Channel`](Channel.md)\>

#### Defined in

[lib/structures/Channel.ts:24](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/Channel.ts#L24)

___

### send

▸ **send**(`content`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `any` |

#### Returns

`any`

#### Defined in

[lib/structures/Channel.ts:28](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/Channel.ts#L28)

___

### toJSON

▸ **toJSON**(): `APIChannel`

#### Returns

`APIChannel`

#### Defined in

[lib/structures/Channel.ts:35](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/Channel.ts#L35)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/structures/Channel.ts:32](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/Channel.ts#L32)

___

### create

▸ `Static` **create**(`data`): `Omit`<`APIChannel`, ``"id"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Omit`<`APIChannel`, ``"id"``\> |

#### Returns

`Omit`<`APIChannel`, ``"id"``\>

#### Defined in

[lib/structures/Channel.ts:39](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/Channel.ts#L39)
