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

## Constructors

### constructor

• **new Channel**(`__data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__data` | `APIChannel` |

#### Defined in

[lib/structures/Channel.ts:11](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L11)

## Properties

### \_\_data

• `Protected` **\_\_data**: `APIChannel`

#### Defined in

[lib/structures/Channel.ts:11](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L11)

## Accessors

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[lib/structures/Channel.ts:13](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L13)

___

### name

• `get` **name**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[lib/structures/Channel.ts:17](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L17)

## Methods

### delete

▸ **delete**(): `Promise`<[`Channel`](Channel.md)\>

#### Returns

`Promise`<[`Channel`](Channel.md)\>

#### Defined in

[lib/structures/Channel.ts:21](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L21)

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

[lib/structures/Channel.ts:25](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L25)

___

### toJSON

▸ **toJSON**(): `APIChannel`

#### Returns

`APIChannel`

#### Defined in

[lib/structures/Channel.ts:32](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L32)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/structures/Channel.ts:29](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L29)

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

[lib/structures/Channel.ts:36](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L36)

___

### init

▸ `Static` **init**(`data`): [`Channel`](Channel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `APIChannel` |

#### Returns

[`Channel`](Channel.md)

#### Defined in

[lib/structures/Channel.ts:40](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L40)
