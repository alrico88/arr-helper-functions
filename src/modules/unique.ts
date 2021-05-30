import {AccessorFunction} from './types';

/**
 * Gets the distinct values of an array
 *
 * @export
 * @param {any[]} array Array to find unique values of
 * @param {(AccessorFunction | string)} [property] Property to map or accesor function to use to obtain the desired value
 * @return {any[]} The unique array of values
 */
export function distinctValues(array: any[], property?: AccessorFunction | string): any[] {
  let arrayToFindDistinctOf = array;

  if (property != null) {
    const mapper = typeof property === 'function' ? property : (d: any): any => d[property];

    arrayToFindDistinctOf = array.map(mapper);
  }

  return Array.from(new Set(arrayToFindDistinctOf));
}
