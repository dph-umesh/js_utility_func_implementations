const flatten = require('./flattenArray');
const { expect } = require('@jest/globals');

test('Should flatten array', () => {
    const array = [1, 2, [3, [4]], 5, [6, 7, [8, 9, [10, 11]]]];
    const expectedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    expect(flatten(array)).toStrictEqual(expectedArray);
});

test('Should not flatten array', () => {
    const array = [1, 2, [3, [4]], 5, [6, 7, [8, 9, [10, 11]]]];
    expect(flatten(array, (maxDepth = 0))).toStrictEqual(array);
});

test('Should flatten at level one', () => {
    const array = [1, 2, [3, [4]], 5, [6, 7, [8, 9, [10, 11]]]];
    const expectedArray = [1, 2, 3, [4], 5, 6, 7, [8, 9, [10, 11]]];
    expect(flatten(array, (maxDepth = 1))).toStrictEqual(expectedArray);
});

test('Should flatten at level 2', () => {
    const array = [1, 2, [3, [4]], 5, [6, 7, [8, 9, [10, 11]]]];
    const expectedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, [10, 11]];
    expect(flatten(array, (maxDepth = 2))).toStrictEqual(expectedArray);
});
