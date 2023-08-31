/**
 * Returns a new array without falsy values
 * false, null, and undefined will be removed from an array
 *
 * @export
 * @param {any[]} array Array to filter
 * @param {boolean} [includeZeros=false] Whether to consider 0s as falsy
 * @return {any[]} Filtered array
 */
export function filterFalsyValues(array: any[], includeZeros = false): any[] {
  const falsyValues = [false, null, undefined];

  function conditionChecker(d: any): boolean {
    if (falsyValues.includes(d)) {
      return false;
    }
    return includeZeros ? d !== 0 : true;
  }

  return array.filter(conditionChecker);
}
