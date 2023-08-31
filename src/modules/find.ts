import { not } from './conditions';

export type ElementToLookFor = string | number | boolean | undefined | null;

/**
 * Returns whether an element is found in an array or not
 *
 * @export
 * @param {ElementToLookFor} element Item to look for
 * @param {any[]} array Array to look in
 * @return {boolean} Whether an element is found in an array or not
 */
export function isInArray(element: ElementToLookFor, array: any[]): boolean {
  return array.includes(element);
}

/**
 * Returns whether an element is not found in an array or not
 *
 * @export
 * @param {ElementToLookFor} element Item to look for
 * @param {any[]} array Array to look in
 * @return {boolean}  Whether an element is not found in an array or not
 */
export function isNotInArray(element: ElementToLookFor, array: any[]): boolean {
  return not(isInArray(element, array));
}

/**
 * Checks if all the items is found in the same array
 *
 * @export
 * @param {ElementToLookFor[]} elements Items to look for
 * @param {any[]} array Array to look in
 * @return {boolean} True if all elements are found. As soon as an item isn't found, returns false
 */
export function areInArray(
  elements: ElementToLookFor[],
  array: any[],
): boolean {
  return elements.every((d) => isInArray(d, array));
}

/**
 * Checks if an item is found in any of the provided arrays
 *
 * @export
 * @param {ElementToLookFor} element Item to look for
 * @param {any[][]} arrays Arrays to look in
 * @return {boolean} Returns true if the item is found in any of the arrays
 */
export function isInAnyArray(
  element: ElementToLookFor,
  arrays: any[][],
): boolean {
  return arrays.some((array) => isInArray(element, array));
}

/**
 * Checks if items are found in any of the provided arrays
 *
 * @export
 * @param {ElementToLookFor[]} items Items to look for
 * @param {any[][]} arrays Arrays to look in
 * @return {boolean} Returns false as soon as an item isn't found in any array
 */
export function areInAnyArray(
  items: ElementToLookFor[],
  arrays: any[][],
): boolean {
  return items.every((item) => isInAnyArray(item, arrays));
}

/**
 * Checks if all items are found in same array
 *
 * @export
 * @param {ElementToLookFor[]} items Items to look for
 * @param {any[][]} arrays Arrays to look in
 * @return {boolean} Returns true only if all items are found in the same array
 */
export function areInSameArray(
  items: ElementToLookFor[],
  arrays: any[][],
): boolean {
  return arrays.some((array) => areInArray(items, array));
}
