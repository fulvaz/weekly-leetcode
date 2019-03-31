/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                if (!ifValid(i, j, board)) {
                    return false;
                }
            }
        }
    }
    return true;
};

function ifValid(i, j, board) {
    return (
        ifRowValid(i, j, board) &&
        ifColValid(i, j, board) &&
        ifBlockValid(i, j, board)
    );
}

function ifRowValid(i, j, board) {
    const val = board[i][j];
    for (let p = 0; p < 9; p++) {
        if (board[i][p] !== '.' && p !== j) {
            if (board[i][p] === val) {
                return false;
            }
        }
    }
    return true;
}

function ifColValid(i, j, board) {
    const val = board[i][j];
    for (let p = 0; p < 9; p++) {
        if (board[p][j] !== '.' && p !== i) {
            if (board[p][j] === val) {
                return false;
            }
        }
    }
    return true;
}

function ifBlockValid(i, j, board) {
    let row1 = Math.floor(i / 3) * 3;
    let col1 = Math.floor(j / 3) * 3;
    // row1 = col1 = Math.max(row1, col1) * 3;
    let row2 = row1 + 2;
    let col2 = col1 + 2;

    const val = board[i][j];
    for (let p = row1; p <= row2; p++) {
        for (let q = col1; q <= col2; q++) {
            if (val === board[p][q] && p !== i && q !== j) {
                return false;
            }
        }
    }
    return true;
}

b = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

c = [
    ['.', '.', '5', '.', '.', '.', '.', '.', '6'],
    ['.', '.', '.', '.', '1', '4', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '9', '2', '.', '.'],
    ['5', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '3', '.'],
    ['.', '.', '.', '5', '4', '.', '.', '.', '.'],
    ['3', '.', '.', '.', '.', '.', '4', '2', '.'],
    ['.', '.', '.', '2', '7', '.', '6', '.', '.'],
];

console.log(isValidSudoku(c))
