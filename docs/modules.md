[arr-helper-functions](README.md) / Exports

# arr-helper-functions

## Table of contents

### Classes

- [ArraySorter](classes/arraysorter.md)
- [FastArraySearcher](classes/fastarraysearcher.md)
- [SortingFunction](classes/sortingfunction.md)

### Functions

- [areInAnyArray](modules.md#areinanyarray)
- [areInArray](modules.md#areinarray)
- [areInSameArray](modules.md#areinsamearray)
- [distinctValues](modules.md#distinctvalues)
- [filterFalsyValues](modules.md#filterfalsyvalues)
- [getBestSortingFunction](modules.md#getbestsortingfunction)
- [isInAnyArray](modules.md#isinanyarray)
- [isInArray](modules.md#isinarray)
- [isNotInArray](modules.md#isnotinarray)
- [sortArray](modules.md#sortarray)

## Functions

### areInAnyArray

▸ **areInAnyArray**(`items`: elementToLookFor[], `arrays`: *any*[][]): *boolean*

Checks if items are found in any of the provided arrays

**`export`** 

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`items` | elementToLookFor[] | Items to look for   |
`arrays` | *any*[][] | Arrays to look in   |

**Returns:** *boolean*

Returns false as soon as an item isn't found in any array

Defined in: [modules/find.ts:70](https://github.com/alrico88/arr-helper-functions/blob/a663d6d/src/modules/find.ts#L70)

___

### areInArray

▸ **areInArray**(`elements`: elementToLookFor[], `array`: *any*[]): *boolean*

Checks if all the items is found in the same array

**`export`** 

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`elements` | elementToLookFor[] | Items to look for   |
`array` | *any*[] | Array to look in   |

**Returns:** *boolean*

True if all elements are found. As soon as an item isn't found, returns false

Defined in: [modules/find.ts:37](https://github.com/alrico88/arr-helper-functions/blob/a663d6d/src/modules/find.ts#L37)

___

### areInSameArray

▸ **areInSameArray**(`items`: elementToLookFor[], `arrays`: *any*[][]): *boolean*

Checks if all items are found in same array

**`export`** 

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`items` | elementToLookFor[] | Items to look for   |
`arrays` | *any*[][] | Arrays to look in   |

**Returns:** *boolean*

Returns true only if all items are found in the same array

Defined in: [modules/find.ts:93](https://github.com/alrico88/arr-helper-functions/blob/a663d6d/src/modules/find.ts#L93)

___

### distinctValues

▸ **distinctValues**(`array`: *any*[], `property?`: AccessorFunction \| *string*): *any*[]

Gets the distinct values of an array

**`export`** 

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`array` | *any*[] | Array to find unique values of   |
`property?` | AccessorFunction \| *string* | - |

**Returns:** *any*[]

The unique array of values

Defined in: [modules/unique.ts:11](https://github.com/alrico88/arr-helper-functions/blob/a663d6d/src/modules/unique.ts#L11)

___

### filterFalsyValues

▸ **filterFalsyValues**(`array`: *any*[], `includeZeros?`: *boolean*): *any*[]

Returns a new array without falsy values

**`export`** 

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`array` | *any*[] | - | Array to filter   |
`includeZeros` | *boolean* | false | - |

**Returns:** *any*[]

Filtered array

Defined in: [modules/filter.ts:9](https://github.com/alrico88/arr-helper-functions/blob/a663d6d/src/modules/filter.ts#L9)

___

### getBestSortingFunction

▸ **getBestSortingFunction**(`array`: *any*[]): [*SortingFunction*](classes/sortingfunction.md)

Gets the most appropriate sort depending on array content

**`export`** 

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`array` | *any*[] | Array to analyse   |

**Returns:** [*SortingFunction*](classes/sortingfunction.md)

The function to pass the sort() method

Defined in: [modules/sort.ts:34](https://github.com/alrico88/arr-helper-functions/blob/a663d6d/src/modules/sort.ts#L34)

___

### isInAnyArray

▸ **isInAnyArray**(`element`: elementToLookFor, `arrays`: *any*[][]): *boolean*

Checks if an item is found in any of the provided arrays

**`export`** 

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`element` | elementToLookFor | Item to look for   |
`arrays` | *any*[][] | Arrays to look in   |

**Returns:** *boolean*

Returns true if the item is found in any of the arrays

Defined in: [modules/find.ts:58](https://github.com/alrico88/arr-helper-functions/blob/a663d6d/src/modules/find.ts#L58)

___

### isInArray

▸ **isInArray**(`element`: elementToLookFor, `array`: *any*[]): *boolean*

Returns whether an element is found in an array or not

**`export`** 

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`element` | elementToLookFor | Item to look for   |
`array` | *any*[] | Array to look in   |

**Returns:** *boolean*

Whether an element is found in an array or not

Defined in: [modules/find.ts:13](https://github.com/alrico88/arr-helper-functions/blob/a663d6d/src/modules/find.ts#L13)

___

### isNotInArray

▸ **isNotInArray**(`element`: elementToLookFor, `array`: *any*[]): *boolean*

Returns whether an element is not found in an array or not

**`export`** 

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`element` | elementToLookFor | Item to look for   |
`array` | *any*[] | Array to look in   |

**Returns:** *boolean*

Whether an element is not found in an array or not

Defined in: [modules/find.ts:25](https://github.com/alrico88/arr-helper-functions/blob/a663d6d/src/modules/find.ts#L25)

___

### sortArray

▸ **sortArray**(`array`: *any*[]): *any*[]

Clones array and sorts it with most appropriate sorting function

**`export`** 

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`array` | *any*[] | Array to sort   |

**Returns:** *any*[]

Cloned and sorted array

Defined in: [modules/sort.ts:96](https://github.com/alrico88/arr-helper-functions/blob/a663d6d/src/modules/sort.ts#L96)
