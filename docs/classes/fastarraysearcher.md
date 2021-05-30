[arr-helper-functions](../README.md) / [Exports](../modules.md) / FastArraySearcher

# Class: FastArraySearcher

## Table of contents

### Constructors

- [constructor](fastarraysearcher.md#constructor)

### Properties

- [originalArray](fastarraysearcher.md#originalarray)
- [searchObject](fastarraysearcher.md#searchobject)

### Methods

- [find](fastarraysearcher.md#find)

## Constructors

### constructor

\+ **new FastArraySearcher**(`arrayToSearch`: ArrayOfObjects, `indexGetter`: *string* \| IndexerFunction, `valueGetter?`: *string* \| AccessorFunction): [*FastArraySearcher*](fastarraysearcher.md)

Creates an instance of FastArraySearcher.

**`memberof`** FastArraySearcher

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arrayToSearch` | ArrayOfObjects | Array to search   |
`indexGetter` | *string* \| IndexerFunction | Property or item to use as index. Must resolve to a string   |
`valueGetter?` | *string* \| AccessorFunction | - |

**Returns:** [*FastArraySearcher*](fastarraysearcher.md)

Defined in: [modules/fastFind.ts:6](https://github.com/alrico88/arr-helper-functions/blob/a663d6d/src/modules/fastFind.ts#L6)

## Properties

### originalArray

• **originalArray**: *any*[]

Defined in: [modules/fastFind.ts:5](https://github.com/alrico88/arr-helper-functions/blob/a663d6d/src/modules/fastFind.ts#L5)

___

### searchObject

• `Private` `Readonly` **searchObject**: *object*

#### Type declaration:

Defined in: [modules/fastFind.ts:6](https://github.com/alrico88/arr-helper-functions/blob/a663d6d/src/modules/fastFind.ts#L6)

## Methods

### find

▸ **find**(`element`: *string*): *any*

Finds element in array

**`memberof`** FastArraySearcher

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`element` | *string* | The element to search for   |

**Returns:** *any*

The found item, if found

Defined in: [modules/fastFind.ts:27](https://github.com/alrico88/arr-helper-functions/blob/a663d6d/src/modules/fastFind.ts#L27)
