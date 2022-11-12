---
id: "User"
title: "Class: User"
sidebar_label: "User"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new User**(`__data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__data` | `APIUser` |

#### Defined in

[lib/structures/User.ts:15](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/User.ts#L15)

## Accessors

### accentColor

• `get` **accentColor**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Defined in

[lib/structures/User.ts:89](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/User.ts#L89)

___

### discriminator

• `get` **discriminator**(): `string`

#### Returns

`string`

#### Defined in

[lib/structures/User.ts:77](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/User.ts#L77)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[lib/structures/User.ts:16](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/User.ts#L16)

___

### isBot

• `get` **isBot**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

[lib/structures/User.ts:19](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/User.ts#L19)

___

### isSystem

• `get` **isSystem**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/structures/User.ts:26](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/User.ts#L26)

___

### isVerified

• `get` **isVerified**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/structures/User.ts:85](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/User.ts#L85)

___

### locale

• `get` **locale**(): `Locale`

#### Returns

`Locale`

#### Defined in

[lib/structures/User.ts:93](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/User.ts#L93)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[lib/structures/User.ts:23](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/User.ts#L23)

___

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Defined in

[lib/structures/User.ts:81](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/User.ts#L81)

## Methods

### avatar

▸ **avatar**(`format?`, `force?`): ``null`` \| \`/avatars/${string}/${string}.jpeg\` \| \`/avatars/${string}/${string}.png\` \| \`/avatars/${string}/${string}.webp\` \| \`/avatars/${string}/${string}.gif\`

**`Default`**

png

**`Default`**

false

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `format` | `UserAvatarFormat` | `ImageFormat.PNG` | The format you want the avatar url to be in (E.G png, webp etc) |
| `force` | `boolean` | `false` | Whether or not you want to force the format, by default, we ignore the selected format if there is a gif available, but if you want it to *always* be a specific format, turn this on |

#### Returns

``null`` \| \`/avatars/${string}/${string}.jpeg\` \| \`/avatars/${string}/${string}.png\` \| \`/avatars/${string}/${string}.webp\` \| \`/avatars/${string}/${string}.gif\`

The avatar URL

#### Defined in

[lib/structures/User.ts:54](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/User.ts#L54)

___

### banner

▸ **banner**(`format?`, `force?`): ``null`` \| \`/banners/${string}/${string}.jpeg\` \| \`/banners/${string}/${string}.png\` \| \`/banners/${string}/${string}.webp\` \| \`/banners/${string}/${string}.gif\`

**`Default`**

png

**`Default`**

false

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `format` | `UserBannerFormat` | `ImageFormat.PNG` | The format you want the banner url to be in (E.G png, webp etc) |
| `force` | `boolean` | `false` | Whether or not you want to force the format, by default, we ignore the selected format if there is a gif available, but if you want it to *always* be a specific format, turn this on |

#### Returns

``null`` \| \`/banners/${string}/${string}.jpeg\` \| \`/banners/${string}/${string}.png\` \| \`/banners/${string}/${string}.webp\` \| \`/banners/${string}/${string}.gif\`

The banner URL

#### Defined in

[lib/structures/User.ts:35](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/User.ts#L35)

___

### createDM

▸ **createDM**(): `Promise`<[`Channel`](Channel.md)\>

Creates a DM with a user

#### Returns

`Promise`<[`Channel`](Channel.md)\>

A DM channel

#### Defined in

[lib/structures/User.ts:71](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/User.ts#L71)

___

### toJSON

▸ **toJSON**(): `APIUser`

#### Returns

`APIUser`

#### Defined in

[lib/structures/User.ts:100](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/User.ts#L100)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/structures/User.ts:96](https://github.com/Artrix9095/Slythe.js/blob/3381088/packages/core/src/lib/structures/User.ts#L96)
