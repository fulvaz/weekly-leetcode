const operands = [];
const operators = [];

const priority = {
    '+': 0,
    '-': 0,
    '*': 1,
    '/': 1,
    '{': 2,
    '}': 2,
}

function ifOperators(o) {
    return Object.keys(priority).includes(o);
}

function calc() {
    const op = operators.pop();
    const opd2 = operands.pop();
    const opd1 = operands.pop();
    
    let r;
    switch (op) {
        case '+': {
            r = opd1 + opd2;
            break;
        };
        case '-': {
            r = opd1 - opd2;
            break;
        };
        case '*': {
            r = opd1 * opd2;
            break;

        };
        case '/': {
            r = opd1 / opd2;
            break;
        };
    }

    operands.push(r);
}

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    s = s.replace(/\s/g, '');
    for (let i = 0; i < s.length; i++) {
        if (ifOperators(s[i])) {
            // 遇到比栈顶小的, 执行一次运算, 继续pop, 直到栈顶小于或者等于这个操作符
            while (priority[operators[[operators.length - 1]]] >= priority[s[i]]) {
                calc();
            }
            operators.push(s[i]);
        } else {
            operands.push(parseInt(s[i]));
        }
    }
    calc();
    return operands[0];
};

const r = calculate(" 2-1 + 2 ");
console.log(r);
