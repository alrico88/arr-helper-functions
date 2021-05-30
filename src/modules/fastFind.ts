import {arrayOfObjectsToObject} from './conversion';
import {AccessorFunction, ArrayOfObjects, IndexerFunction} from './types';

export class FastArraySearcher {
  public originalArray: any[];
  private readonly searchObject: {[prop: string]: any};

  /**
   * Creates an instance of FastArraySearcher.
   * @param {ArrayOfObjects} arrayToSearch Array to search
   * @param {(string | IndexerFunction)} indexGetter Property or item to use as index. Must resolve to a string
   * @param {(string | AccessorFunction)} [valueGetter] Property or item to use as value (will be returned if found)
   * @memberof FastArraySearcher
   */
  constructor(arrayToSearch: ArrayOfObjects, indexGetter: string | IndexerFunction, valueGetter?: string | AccessorFunction) {
    this.originalArray = arrayToSearch;
    this.searchObject = arrayOfObjectsToObject(arrayToSearch, indexGetter, valueGetter);
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
