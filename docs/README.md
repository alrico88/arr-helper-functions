arr-helper-functions / [Exports](modules.md)

# arr-helper-functions

Misc. functions for finding elements in arrays, sorting, and more

## Installation

Using npm, `npm i arr-helper-functions`.

Using yarn, `yarn add arr-helper-functions`.

## Usage

Using `import`

```javascript
import { isInArray } from 'arr-helper-functions';

isInArray(2, [3, 2, 1]) // true
```

In a CommonJS environment

```javascript
const { filterFalsyValues } = require('arr-helper-functions');

filterFalsyValues([1, null, 2, false]) // [1, 2]
```

## Documentation

See [DOCS](./docs/modules.md)
