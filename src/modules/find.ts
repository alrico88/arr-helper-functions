import {not} from './conditions';

export type elementToLookFor = string | number | boolean | undefined | null;

/**
 * Returns whether an element is found in an array or not
 *
 * @export
 * @param {elementToLookFor} element Item to look for
 * @param {any[]} array Array to look in
 * @return {boolean} Whether an element is found in an array or not
 */
export function isInArray(element: elementToLookFor, array: any[]): boolean {
  return array.includes(element);
}

/**
 * Returns whether an element is not found in an array or not
 *
 * @export
 * @param {elementToLookFor} element Item to look for
 * @param {any[]} array Array to look in
 * @return {boolean}  Whether an element is not found in an array or not
 */
export function isNotInArray(element: elementToLookFor, array: any[]): boolean {
  return not(isInArray(element, array));
}

/**
 * Checks if all the items is found in the same array
 *
 * @export
 * @param {elementToLookFor[]} elements Items to look for
 * @param {any[]} array Array to look in
 * @return {boolean} True if all elements are found. As soon as an item isn't found, returns false
 */
export function areInArray(elements: elementToLookFor[], array: any[]): boolean {
  let are = true;

  for (const element of elements) {
    if (!isInArray(element, array)) {
      are = false;
      break;
    }
  }

  return are;
}

/**
 * Checks if an item is found in any of the provided arrays
 *
 * @export
 * @param {elementToLookFor} element Item to look for
 * @param {any[][]} arrays Arrays to look in
 * @return {boolean} Returns true if the item is found in any of the arrays
 */
export function isInAnyArray(element: elementToLookFor, arrays: any[][]): boolean {
  return arrays.some((array) => isInArray(element, array));
}

/**
 * Checks if items are found in any of the provided arrays
 *
 * @export
 * @param {elementToLookFor[]} items Items to look for
 * @param {any[][]} arrays Arrays to look in
 * @return {boolean} Returns false as soon as an item isn't found in any array
 */
export function areInAnyArray(items: elementToLookFor[], arrays: any[][]): boolean {
  let is = true;

  for (const item of items) {
    const isInAny = isInAnyArray(item, arrays);

    if (not(isInAny)) {
      is = false;
      break;
    }
  }

  return is;
}

/**
 * Checks if all items are found in same array
 *
 * @export
 * @param {elementToLookFor[]} items Items to look for
 * @param {any[][]} arrays Arrays to look in
 * @return {boolean} Returns true only if all items are found in the same array
 */
export function areInSameArray(items: elementToLookFor[], arrays: any[][]): boolean {
  let is = false;
  for (const array of arrays) {
    let response = true;

    for (const item of items) {
      if (array.includes(item) === false) {
        response = false;
        break;
      }
    }

    if (response === true) {
      is = true;
      break;
    }
  }

  return is;
}
