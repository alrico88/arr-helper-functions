import { arrayOfObjectsToObject } from './conversion';
import { AccessorFunction, ArrayOfObjects, IndexerFunction } from './types';

export interface FastSearcherOptions {
  indexGetter: string | IndexerFunction,
  valueGetter?: string | AccessorFunction,
  keepOriginal?: boolean
}

export class FastArraySearcher {
  public originalArray: any[];

  private readonly searchObject: { [prop: string]: any };

  /**
   * Creates an instance of FastArraySearcher.
   * @param {ArrayOfObjects} arrayToSearch Array to search
   * @param {(string | IndexerFunction)} options.indexGetter Property or item to use as index. Must resolve to a string
   * @param {(string | AccessorFunction)} [options.valueGetter] Property or item to use as value (will be returned if found)
   * @param {boolean} [options.keepOriginal=false] Whether to keeo original array reference inside
   * @memberof FastArraySearcher
   */
  constructor(
    arrayToSearch: ArrayOfObjects,
    options: FastSearcherOptions,
  ) {
    this.originalArray = options.keepOriginal ? arrayToSearch : [];
    this.searchObject = arrayOfObjectsToObject(
      arrayToSearch,
      options.indexGetter,
      options.valueGetter,
    );
  }

  /**
   * Finds element in array
   *
   * @param {string} element The element to search for
   * @return {(any|undefined)} The found item, if found
   * @memberof FastArraySearcher
   */
  public find(element: string): any {
    return this.searchObject[element];
  }
}
