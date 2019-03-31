var isValid = function(s) {
    const stack = [];
    const mapping = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
    
    for(let  i = 0; i < s.length; i++) {
        if (mapping.has(s[i])) {
            stack.push(s[i]);
        } else {
            if (s[i] !== mapping.get(stack[stack.length - 1])) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    
    if (stack.length) return false;
    else return true;
    
};

console.log(isValid('()'));
console.log(isValid('(]'));
console.log(isValid('(()'));