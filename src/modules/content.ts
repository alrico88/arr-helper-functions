import { not } from './conditions';

/**
 * Checks if array is empty
 *
 * @export
 * @param {any[]} array Array to check length of
 * @return {boolean} True if array.length === 0
 */
export function isEmpty(array: any[]): boolean {
  return array.length === 0;
}

/**
 * Checks if array is not empty
 *
 * @export
 * @param {any[]} array Array to check if empty
 * @return {boolean} True if array.length > 0
 */
export function isNotEmpty(array: any[]): boolean {
  return not(isEmpty(array));
}
