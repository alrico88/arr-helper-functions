[arr-helper-functions](../README.md) / [Exports](../modules.md) / FastArraySearcher

# Class: FastArraySearcher

## Table of contents

### Constructors

- [constructor](FastArraySearcher.md#constructor)

### Properties

- [originalArray](FastArraySearcher.md#originalarray)
- [searchObject](FastArraySearcher.md#searchobject)

### Methods

- [find](FastArraySearcher.md#find)

## Constructors

### constructor

• **new FastArraySearcher**(`arrayToSearch`, `options`)

Creates an instance of FastArraySearcher.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayToSearch` | `ArrayOfObjects` | Array to search |
| `options` | `FastSearcherOptions` | - |

**`Memberof`**

FastArraySearcher

#### Defined in

[modules/fastFind.ts:23](https://github.com/alrico88/arr-helper-functions/blob/master/src/modules/fastFind.ts#L23)

## Properties

### originalArray

• **originalArray**: `any`[]

#### Defined in

[modules/fastFind.ts:11](https://github.com/alrico88/arr-helper-functions/blob/master/src/modules/fastFind.ts#L11)

___

### searchObject

• `Private` `Readonly` **searchObject**: `Object`

#### Index signature

▪ [prop: `string`]: `any`

#### Defined in

[modules/fastFind.ts:13](https://github.com/alrico88/arr-helper-functions/blob/master/src/modules/fastFind.ts#L13)

## Methods

### find

▸ **find**(`element`): `any`

Finds element in array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `string` | The element to search for |

#### Returns

`any`

The found item, if found

**`Memberof`**

FastArraySearcher

#### Defined in

[modules/fastFind.ts:42](https://github.com/alrico88/arr-helper-functions/blob/master/src/modules/fastFind.ts#L42)
