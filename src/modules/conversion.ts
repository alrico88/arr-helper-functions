import {AccessorFunction, ArrayOfObjects, IndexerFunction, ObjectLike} from './types';

/**
 * Converts an array of objects to an object
 *
 * @export
 * @param {ArrayOfObjects} array The array of objects to convert
 * @param {(string | IndexerFunction)} indexGetter The value to use as index. Must resolve to a string
 * @param {(string | AccessorFunction)} [valueGetter] The property or expression to use as value
 * @return {Record<string, any>}
 */
export function arrayOfObjectsToObject(
  array: ArrayOfObjects,
  indexGetter: string | IndexerFunction,
  valueGetter?: string | AccessorFunction
): Record<string, any> {
  function getIndex(d: ObjectLike): string {
    if (typeof indexGetter === 'string') {
      return d[indexGetter];
    } else {
      const indexValue = indexGetter(d);

      if (typeof indexValue !== 'string') {
        throw new Error('A string should be returned for indexing');
      } else {
        return indexValue;
      }
    }
  }

  function getValue(d: ObjectLike): any {
    if (valueGetter == null) {
      return d;
    } else if (typeof valueGetter === 'string') {
      return d[valueGetter];
    } else {
      return valueGetter(d);
    }
  }

  return array.reduce((agg, item) => {
    agg[getIndex(item)] = getValue(item);

    return agg;
  }, {});
}
