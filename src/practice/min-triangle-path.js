var minimumTotal = function(triangle) {
    return solve(triangle)
};

function solve(triangle) {
    const result = [];
    for (let i = triangle.length - 1; i >= 0; i--) {
        for (let j = 0; j < i + 1; j++) {
            if (i === triangle.length - 1) {
                result[j] = triangle[i][j];
            } else {
                result[j] = triangle[i][j] + Math.min(result[j], result[j + 1]);
            }
        }
    }
    return result[0];
    
    
//     if (n === triangle.length - 1) {
        
//         return triangle[n][idx];
//     }
    
//     const r = triangle[n][idx] + Math.min(solve(triangle, n + 1, idx), solve(triangle, n + 1, idx + 1));
//     return r;
}

const r = minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]);
console.log(r);