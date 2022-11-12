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

## Accessors

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

Channel.id

#### Defined in

[lib/structures/Channel.ts:16](https://github.com/Artrix9095/Slythe.js/blob/9d0ce5c/packages/core/src/lib/structures/Channel.ts#L16)

___

### name

• `get` **name**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

Channel.name

#### Defined in

[lib/structures/Channel.ts:20](https://github.com/Artrix9095/Slythe.js/blob/9d0ce5c/packages/core/src/lib/structures/Channel.ts#L20)

## Methods

### delete

▸ **delete**(): `Promise`<[`Channel`](Channel.md)\>

#### Returns

`Promise`<[`Channel`](Channel.md)\>

#### Inherited from

[Channel](Channel.md).[delete](Channel.md#delete)

#### Defined in

[lib/structures/Channel.ts:24](https://github.com/Artrix9095/Slythe.js/blob/9d0ce5c/packages/core/src/lib/structures/Channel.ts#L24)

___

### getGuild

▸ **getGuild**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[lib/structures/Channel.ts:63](https://github.com/Artrix9095/Slythe.js/blob/9d0ce5c/packages/core/src/lib/structures/Channel.ts#L63)

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

[lib/structures/Channel.ts:28](https://github.com/Artrix9095/Slythe.js/blob/9d0ce5c/packages/core/src/lib/structures/Channel.ts#L28)

___

### toJSON

▸ **toJSON**(): `APIChannel`

#### Returns

`APIChannel`

#### Inherited from

[Channel](Channel.md).[toJSON](Channel.md#tojson)

#### Defined in

[lib/structures/Channel.ts:35](https://github.com/Artrix9095/Slythe.js/blob/9d0ce5c/packages/core/src/lib/structures/Channel.ts#L35)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Channel](Channel.md).[toString](Channel.md#tostring)

#### Defined in

[lib/structures/Channel.ts:32](https://github.com/Artrix9095/Slythe.js/blob/9d0ce5c/packages/core/src/lib/structures/Channel.ts#L32)

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

[lib/structures/Channel.ts:39](https://github.com/Artrix9095/Slythe.js/blob/9d0ce5c/packages/core/src/lib/structures/Channel.ts#L39)
