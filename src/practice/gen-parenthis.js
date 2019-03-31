var generateParenthesis = function(n) {
    return genInner(0, 0, n, '');
};

function genInner(l, r, n, result) {
    if (r === n && l === n) {
        return result;
    }
    
    if (l < n) {
        return genInner(l + 1, r, n, result + '(');
    }
    
    if (r < n && l > r) {
        return genInner(l, r + 1, n, result + ')');
    }
    
}

console.log(generateParenthesis(3));