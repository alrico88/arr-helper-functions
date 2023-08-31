/* eslint-disable max-len */

import { describe, test, expect } from 'vitest';

import {
  areInAnyArray,
  areInArray,
  areInSameArray,
  distinctValues,
  FastArraySearcher,
  getBestSortingFunction,
  isInAnyArray,
  isInArray,
  sortArray,
  isEmpty,
  isNotEmpty,
  filterFalsyValues,
} from '../src';

describe('Test simple finding methods', () => {
  test('isInArray should return true if element is found in array', () => {
    expect(isInArray('hello', ['hello', 'world'])).toBe(true);
  });

  test('isInArray should return false if element is not found in array', () => {
    expect(isInArray('not here', ['hello', 'world'])).toBe(false);
  });

  test('isInAnyArray should return true if element is found in one of the arrays', () => {
    expect(isInAnyArray('hello', [['hello', 'world'], ['not', 'here']])).toBe(true);
  });

  test('isInAnyArray should false true if element is not found in any of the arrays', () => {
    expect(isInAnyArray('not here', [['hello', 'world'], ['not', 'here']])).toBe(false);
  });
});

describe('Test multiple elements finding methods', () => {
  test('areInArray should return true only if all elements found in array', () => {
    expect(areInArray(['hello', 'world'], ['multiple', 'hello', 'world', 'array'])).toBe(true);
  });

  test('areInArray should return false if some element is not found in array', () => {
    expect(areInArray(['hello', 'world'], ['multiple', 'hello', 'array'])).toBe(false);
  });

  test('areInAnyArray should return true if all elements are found in some array', () => {
    expect(areInAnyArray(
      ['hello', 'world'],
      [['hello'], ['testing', 'this'], ['world']],
    )).toBe(true);
  });

  test('areInAnyArray should return false if no element is found in an array', () => {
    expect(areInAnyArray(['false'], [['hello'], ['testing', 'this']])).toBe(false);
  });

  test('areInSameArray should return true if all elements are found in same array', () => {
    expect(areInSameArray(
      ['hello', 'world'],
      [['hello'], ['testing', 'this', 'hello', 'world']],
    )).toBe(true);
  });

  test('areInSameArray should return false if all elements can\'t be found on single array', () => {
    expect(areInSameArray(['false'], [['hello'], ['testing', 'this']])).toBe(false);
  });
});

describe('Test fast finding methods', () => {
  interface TestObj {
    name: string | number;
    value: number;
    position: string;
  }

  const testArray: TestObj[] = [
    {
      name: 'Test number 1',
      value: 1,
      position: 'first',
    },
    {
      name: 'Test number 2',
      value: 2,
      position: 'second',
    },
    {
      name: 3,
      value: 3,
      position: 'third',
    },
  ];

  test('Fast finder should return the value we are looking for', () => {
    const fastFinder = new FastArraySearcher(testArray, {
      indexGetter: 'name',
      valueGetter: 'position',
    });
    expect(fastFinder.find('Test number 1')).toBe('first');
  });

  test('Fast finder should return the value we are looking for', () => {
    const fastFinder = new FastArraySearcher(testArray, {
      indexGetter: 'name',
      keepOriginal: true,
    });
    expect(fastFinder.find('Test number 1')).toStrictEqual({
      name: 'Test number 1',
      value: 1,
      position: 'first',
    });
  });

  test('Fast finder should return undefined if what we are looking for is not found', () => {
    const fastFinder = new FastArraySearcher(testArray, {
      indexGetter: 'name',
      valueGetter: 'position',
    });
    expect(fastFinder.find('Test number 5')).toBe(undefined);
  });

  test('Fast finder should accept as indexer a function as well as for a value getter', () => {
    function indexGetter(item: TestObj): string {
      return item.name.toString();
    }
    const fastFinder = new FastArraySearcher(
      testArray,
      {
        indexGetter,
        valueGetter: (d: TestObj): string => `${d.position}_${d.value}`,
      },
    );
    expect(fastFinder.find('Test number 1')).toBe('first_1');
  });

  test('Fast finder should throw an error if the value used as indexer is not a string', () => {
    function indexGetter(item: TestObj): string {
      return (item as unknown) as string;
    }

    expect(() => {
      // eslint-disable-next-line no-new
      new FastArraySearcher(
        testArray,
        {
          indexGetter,
          valueGetter: (d: TestObj): string => `${d.position}_${d.value}`,
        },
      );
    }).toThrow();
  });
});

describe('Test distinct values functions', () => {
  const testArray = ['this', 'is', 'repeated', 'repeated'];

  test('Unique finder should return no repeated elements', () => {
    expect(distinctValues(testArray)).toStrictEqual(['this', 'is', 'repeated']);
  });

  test('Unique finder should return no repeated elements, with objects', () => {
    expect(distinctValues(testArray.map((d) => ({
      bogus: 'a',
      text: d,
    })), 'text')).toStrictEqual(['this', 'is', 'repeated']);
  });
});

describe('Test sorting functions', () => {
  test('If most elements in array are number-like elements, the best sorting function should be numbers', () => {
    expect(getBestSortingFunction([1, '2', 'test']).sortType).toBe('number');
  });

  test('Array sorter should return sorted array', () => {
    expect(sortArray(['z', 'ñ', 'n', 2])).toStrictEqual([2, 'n', 'ñ', 'z']);
  });

  test('Array sorter should return sorted array as numbers even if some elements are numbers as strings', () => {
    expect(sortArray([2, 5, '1', '0'])).toStrictEqual(['0', '1', 2, 5]);
  });

  test('Empty arrays should not fail', () => {
    expect(sortArray([])).toStrictEqual([]);
  });
});

describe('Test content methods', () => {
  test('For an empty array, isEmpty should return true', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('For a not empty array, isEmpty should return false', () => {
    expect(isEmpty(['notEmpty'])).toBe(false);
  });

  test('For an empty array, isNotEmpty should return false', () => {
    expect(isNotEmpty([])).toBe(false);
  });

  test('For a not empty array, isNotEmpty should return true', () => {
    expect(isNotEmpty(['notEmpty'])).toBe(true);
  });
});

describe('Test filter methods', () => {
  test('Filter falsy values should return an array without falsy values', () => {
    expect(filterFalsyValues(['notFalsy', null, undefined, false, true])).toStrictEqual(['notFalsy', true]);
  });
});
