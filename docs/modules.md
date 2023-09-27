[arr-helper-functions](README.md) / Exports

# arr-helper-functions

## Table of contents

### Classes

- [ArraySorter](classes/ArraySorter.md)
- [FastArraySearcher](classes/FastArraySearcher.md)
- [SortingFunction](classes/SortingFunction.md)

### Functions

- [areInAnyArray](modules.md#areinanyarray)
- [areInArray](modules.md#areinarray)
- [areInSameArray](modules.md#areinsamearray)
- [distinctValues](modules.md#distinctvalues)
- [filterFalsyValues](modules.md#filterfalsyvalues)
- [getBestSortingFunction](modules.md#getbestsortingfunction)
- [getFirstAndLastElement](modules.md#getfirstandlastelement)
- [isEmpty](modules.md#isempty)
- [isInAnyArray](modules.md#isinanyarray)
- [isInArray](modules.md#isinarray)
- [isNotEmpty](modules.md#isnotempty)
- [isNotInArray](modules.md#isnotinarray)
- [sortArray](modules.md#sortarray)

## Functions

### areInAnyArray

▸ **areInAnyArray**(`items`, `arrays`): `boolean`

Checks if items are found in any of the provided arrays

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | `ElementToLookFor`[] | Items to look for |
| `arrays` | `any`[][] | Arrays to look in |

#### Returns

`boolean`

Returns false as soon as an item isn't found in any array

**`Export`**

#### Defined in

[modules/find.ts:67](https://github.com/alrico88/arr-helper-functions/blob/master/src/modules/find.ts#L67)

___

### areInArray

▸ **areInArray**(`elements`, `array`): `boolean`

Checks if all the items is found in the same array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elements` | `ElementToLookFor`[] | Items to look for |
| `array` | `any`[] | Array to look in |

#### Returns

`boolean`

True if all elements are found. As soon as an item isn't found, returns false

**`Export`**

#### Defined in

[modules/find.ts:37](https://github.com/alrico88/arr-helper-functions/blob/master/src/modules/find.ts#L37)

___

### areInSameArray

▸ **areInSameArray**(`items`, `arrays`): `boolean`

Checks if all items are found in same array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | `ElementToLookFor`[] | Items to look for |
| `arrays` | `any`[][] | Arrays to look in |

#### Returns

`boolean`

Returns true only if all items are found in the same array

**`Export`**

#### Defined in

[modules/find.ts:82](https://github.com/alrico88/arr-helper-functions/blob/master/src/modules/find.ts#L82)

___

### distinctValues

▸ **distinctValues**(`array`, `property?`): `any`[]

Gets the distinct values of an array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `any`[] | Array to find unique values of |
| `property?` | `string` \| `AccessorFunction` | Property to map or accesor function to use to obtain the desired value |

#### Returns

`any`[]

The unique array of values

**`Export`**

#### Defined in

[modules/unique.ts:11](https://github.com/alrico88/arr-helper-functions/blob/master/src/modules/unique.ts#L11)

___

### filterFalsyValues

▸ **filterFalsyValues**(`array`, `includeZeros?`): `any`[]

Returns a new array without falsy values
false, null, and undefined will be removed from an array

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `any`[] | `undefined` | Array to filter |
| `includeZeros?` | `boolean` | `false` | Whether to consider 0s as falsy |

#### Returns

`any`[]

Filtered array

**`Export`**

#### Defined in

[modules/filter.ts:10](https://github.com/alrico88/arr-helper-functions/blob/master/src/modules/filter.ts#L10)

___

### getBestSortingFunction

▸ **getBestSortingFunction**(`array`): [`SortingFunction`](classes/SortingFunction.md)

Gets the most appropriate sort depending on array content

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `any`[] | Array to analyse |

#### Returns

[`SortingFunction`](classes/SortingFunction.md)

The function to pass the sort() method

**`Export`**

#### Defined in

[modules/sort.ts:38](https://github.com/alrico88/arr-helper-functions/blob/master/src/modules/sort.ts#L38)

___

### getFirstAndLastElement

▸ **getFirstAndLastElement**<`T`\>(`array`): [`T`, `T`]

Gets the first and last elements of an array

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to get elements of |

#### Returns

[`T`, `T`]

The first and last elements

**`Export`**

#### Defined in

[modules/sort.ts:112](https://github.com/alrico88/arr-helper-functions/blob/master/src/modules/sort.ts#L112)

___

### isEmpty

▸ **isEmpty**(`array`): `boolean`

Checks if array is empty

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `any`[] | Array to check length of |

#### Returns

`boolean`

True if array.length === 0

**`Export`**

#### Defined in

[modules/content.ts:10](https://github.com/alrico88/arr-helper-functions/blob/master/src/modules/content.ts#L10)

___

### isInAnyArray

▸ **isInAnyArray**(`element`, `arrays`): `boolean`

Checks if an item is found in any of the provided arrays

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `ElementToLookFor` | Item to look for |
| `arrays` | `any`[][] | Arrays to look in |

#### Returns

`boolean`

Returns true if the item is found in any of the arrays

**`Export`**

#### Defined in

[modules/find.ts:52](https://github.com/alrico88/arr-helper-functions/blob/master/src/modules/find.ts#L52)

___

### isInArray

▸ **isInArray**(`element`, `array`): `boolean`

Returns whether an element is found in an array or not

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `ElementToLookFor` | Item to look for |
| `array` | `any`[] | Array to look in |

#### Returns

`boolean`

Whether an element is found in an array or not

**`Export`**

#### Defined in

[modules/find.ts:13](https://github.com/alrico88/arr-helper-functions/blob/master/src/modules/find.ts#L13)

___

### isNotEmpty

▸ **isNotEmpty**(`array`): `boolean`

Checks if array is not empty

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `any`[] | Array to check if empty |

#### Returns

`boolean`

True if array.length > 0

**`Export`**

#### Defined in

[modules/content.ts:21](https://github.com/alrico88/arr-helper-functions/blob/master/src/modules/content.ts#L21)

___

### isNotInArray

▸ **isNotInArray**(`element`, `array`): `boolean`

Returns whether an element is not found in an array or not

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `ElementToLookFor` | Item to look for |
| `array` | `any`[] | Array to look in |

#### Returns

`boolean`

Whether an element is not found in an array or not

**`Export`**

#### Defined in

[modules/find.ts:25](https://github.com/alrico88/arr-helper-functions/blob/master/src/modules/find.ts#L25)

___

### sortArray

▸ **sortArray**(`array`): `any`[]

Clones array and sorts it with most appropriate sorting function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `any`[] | Array to sort |

#### Returns

`any`[]

Cloned and sorted array

**`Export`**

#### Defined in

[modules/sort.ts:98](https://github.com/alrico88/arr-helper-functions/blob/master/src/modules/sort.ts#L98)
