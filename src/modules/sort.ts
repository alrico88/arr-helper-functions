import { countArrayTypes } from 'array-types-counter';

export type CompareFn<T> = (a: T, b: T) => number;

/**
 * SortingFunction class
 *
 * @export
 * @class SortingFunction
 */
export class SortingFunction {
  public sortType: 'number' | 'string';

  public sortFunc: CompareFn<string> | CompareFn<number>;

  /**
   * Creates an instance of SortingFunction.
   * @param {('number' | 'string')} sortType
   * @param {(CompareFn<string> | CompareFn<number>)} sortFunc
   * @memberof SortingFunction
   */
  public constructor(
    sortType: 'number' | 'string',
    sortFunc: CompareFn<string> | CompareFn<number>,
  ) {
    this.sortType = sortType;
    this.sortFunc = sortFunc;
  }
}

/**
 * Gets the most appropriate sort depending on array content
 *
 * @export
 * @param {any[]} array Array to analyse
 * @return {SortingFunction} The function to pass the sort() method
 */
export function getBestSortingFunction(array: any[]): SortingFunction {
  const typesCount = countArrayTypes(array);

  function numberSort(a: number, b: number): number {
    return a - b;
  }

  if (typesCount[0]?.type === 'number') {
    return new SortingFunction('number', numberSort);
  }
  return new SortingFunction('string', Intl.Collator().compare);
}

/**
 * ArraySorter class
 *
 * @export
 * @class ArraySorter
 */
export class ArraySorter {
  private readonly arrayToSort: any[];

  /**
   * Creates an instance of ArraySorter.
   * @param {any[]} array
   * @memberof ArraySorter
   */
  public constructor(array: any[]) {
    this.arrayToSort = array;
  }

  /**
   * Sorts array
   *
   * @return {any[])}
   * @memberof ArraySorter
   */
  public sort(): any[] {
    const { sortType, sortFunc } = getBestSortingFunction(this.arrayToSort);

    if (sortType === 'string') {
      const arrCopy = [...this.arrayToSort] as string[];
      const sortingFunc = sortFunc as CompareFn<string>;

      return arrCopy.sort(sortingFunc);
    }
    const arrCopy = [...this.arrayToSort] as number[];
    const sortingFunc = sortFunc as CompareFn<number>;

    return arrCopy.sort(sortingFunc);
  }
}

/**
 * Clones array and sorts it with most appropriate sorting function
 *
 * @export
 * @param {any[]} array Array to sort
 * @return {any[]} Cloned and sorted array
 */
export function sortArray(array: any[]): any[] {
  const sorter = new ArraySorter(array);

  return sorter.sort();
}
