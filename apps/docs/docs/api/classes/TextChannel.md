---
id: "TextChannel"
title: "Class: TextChannel"
sidebar_label: "TextChannel"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Channel`](Channel.md)

  ↳ **`TextChannel`**

## Constructors

### constructor

• **new TextChannel**(`__data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__data` | `APIGuildChannel`<`GuildText`\> |

#### Overrides

[Channel](Channel.md).[constructor](Channel.md#constructor)

#### Defined in

[lib/structures/Channel.ts:51](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L51)

## Properties

### \_\_data

• `Protected` **\_\_data**: `APIGuildChannel`<`GuildText`\>

#### Inherited from

[Channel](Channel.md).[__data](Channel.md#__data)

#### Defined in

[lib/structures/Channel.ts:51](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L51)

## Accessors

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

Channel.id

#### Defined in

[lib/structures/Channel.ts:13](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L13)

___

### name

• `get` **name**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

Channel.name

#### Defined in

[lib/structures/Channel.ts:17](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L17)

## Methods

### delete

▸ **delete**(): `Promise`<[`Channel`](Channel.md)\>

#### Returns

`Promise`<[`Channel`](Channel.md)\>

#### Inherited from

[Channel](Channel.md).[delete](Channel.md#delete)

#### Defined in

[lib/structures/Channel.ts:21](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L21)

___

### getGuild

▸ **getGuild**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[lib/structures/Channel.ts:55](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L55)

___

### send

▸ **send**(`content`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `any` |

#### Returns

`any`

#### Inherited from

[Channel](Channel.md).[send](Channel.md#send)

#### Defined in

[lib/structures/Channel.ts:25](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L25)

___

### toJSON

▸ **toJSON**(): `APIChannel`

#### Returns

`APIChannel`

#### Inherited from

[Channel](Channel.md).[toJSON](Channel.md#tojson)

#### Defined in

[lib/structures/Channel.ts:32](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L32)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Channel](Channel.md).[toString](Channel.md#tostring)

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

#### Inherited from

[Channel](Channel.md).[create](Channel.md#create)

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

#### Inherited from

[Channel](Channel.md).[init](Channel.md#init)

#### Defined in

[lib/structures/Channel.ts:40](https://github.com/Artrix9095/Slythe.js/blob/1b3319e/packages/core/src/lib/structures/Channel.ts#L40)
