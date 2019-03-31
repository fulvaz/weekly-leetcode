
function foo(str) {
    const subStrMap = new Map();
    let len = 0;
    for(let i = 0, j = 0; j < str.length; j++) {
        if (subStrMap.has(str[j])) {
            i = subStrMap.get(str[j]);
        }
        subStrMap.set(str[j], j);
        // 保持历史最高纪录js
        len = Math.max(len, j - i);
    }
    return len;
}


exports.foo = foo;

console.log(foo('abcaa'));