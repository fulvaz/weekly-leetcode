/**
 * @param {character[][]} board
 * @return {boolean}
 */
var solveSudoku = function(board) {
    const result = JSON.parse(JSON.stringify(board));
    dfs(board, 0, 0, result);
    return result;
};

function dfs(board, r, c, result) {
    // end
    if (r > 9 || c > 9) {
        return true;
    }

    // process
    for (let i = 1; i <= 9; i++) {
        result[r][c] = '' + i;
        const isValid = ifValid(r, c, result);
        if (!isValid) {
            result[r][c] = '.';
            continue;
        } else {
            const pos = nextPos(r, c, result);
            if (!pos) {
                return true;
            }
            const { r: nextR, c: nextC } = pos;
            const ifDeeperValid = dfs(board, nextR, nextC, result);
            if (ifDeeperValid) {
                return true;
            } else {
                result[r][c] = '.';
                continue;
            }
            // 多个分支, 下层错误如何处理?
        }
        // 遍历了九个数都没找到合适的, 该如何处理?
    }
    return false;
}

function nextPos(r, c, board) {
    while (r < 9) {
        c = c % 9;
        while (c < 9) {
            if (board[r][c] === '.') {
                return { r, c };
            } else {
                c++;
            }
        }
        r++;
    }
}

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
}``

b = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];


console.log(solveSudoku(b));
