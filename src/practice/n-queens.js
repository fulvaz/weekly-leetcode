/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const xyDiff = new Set();
    const xySum = new Set();
    const col = new Set();
    const r = new Set();
    const result = [];
    const curr = [];
    
    dfs(0, n, col, xyDiff, xySum, curr, result);

    
    return result;
};

function dfs(i, n, col, xyDiff, xySum, curr, result) {
    // 终结条件
    if (i === n) {
        result.push([...curr]);
        return;
    }
    
    // 处理数据
    // 向下
    for (let p = 0; p < n; p++) {
        if (col.has(p) ||  xyDiff.has(i - p) || xySum.has(i + p)) {
            continue;
        }
        
        col.add(p);
        xyDiff.add(i - p);
        xySum.add(i + p);
        
        const str = Array(n).fill(null).map(_ => '.');
        str[p] = 'Q';
        
        curr.push(str.join(''));
        
        dfs(i + 1, n, col, xyDiff, xySum, curr, result);
        
        // 清理
        col.delete(p);
        xyDiff.delete(i - p);
        xySum.delete(i + p);
        curr.pop();
    }
}

console.log(JSON.stringify(solveNQueens(4)));

console.log(JSON.stringify([[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]));