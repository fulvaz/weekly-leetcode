const {mainAlgorithm,
    removeLastCol,
    removeFirstCol,
    removeLastRow,
    removeFirstRow,} = require('./print-matrix-clock-wise');

    const assert = require('assert');


const testData = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29],
];


const firstRowRemoved = 
    [0, 1, 2, 3, 4];

const firstRowRemain = [
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29],
];

const lastRowRemoved = 
    [29, 28, 27, 26, 25];

const lastRowRemain = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
];

const firstColRemain = [
    [1, 2, 3, 4],
    [6, 7, 8, 9],
    [11, 12, 13, 14],
    [16, 17, 18, 19],
    [21, 22, 23, 24],
    [26, 27, 28, 29],
];

const firstColRemoved = [
    0, 5, 10, 15, 20, 25
].reverse();

const lastColRemain = [
    [0, 1, 2, 3,],
    [5, 6, 7, 8,],
    [10, 11, 12, 13, ],
    [15, 16, 17, 18, ],
    [20, 21, 22, 23, ],
    [25, 26, 27, 28, ],
];

const lastColRemoved = [
    4, 9, 14, 19, 24, 29
];





const seq = [
    0, 1, 2, 3, 4, 9, 14, 19, 24, 29, 28, 27, 26, 25, 20, 15, 10, 5, 6, 7, 8, 13, 18,
    23, 22, 21, 16, 11, 12, 17
];

assert.deepStrictEqual(removeFirstRow(testData).remain, firstRowRemain);
assert.deepStrictEqual(removeFirstRow(testData).removed, firstRowRemoved);
assert.deepStrictEqual(removeLastRow(testData).remain, lastRowRemain);
assert.deepStrictEqual(removeLastRow(testData).removed, lastRowRemoved);
assert.deepStrictEqual(removeFirstCol(testData).remain, firstColRemain);
assert.deepStrictEqual(removeFirstCol(testData).removed, firstColRemoved);
assert.deepStrictEqual(removeLastCol(testData).remain, lastColRemain);
assert.deepStrictEqual(removeLastCol(testData).removed, lastColRemoved);
assert.deepStrictEqual(mainAlgorithm(testData), seq)
assert.deepStrictEqual(mainAlgorithm([[1]]), [1])

