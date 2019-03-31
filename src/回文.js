const stack = [];


var isPalindrome = function(s) {
    const a = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

    let slow = 0;
    let fast = 0;

    while(a[fast] && a[fast + 1]) {
        stack.push(a[slow]);
        slow++;
        fast += 2;
    }

    // 是一个偶数个数字符串
    if (!a[fast]) {
    } else {
        slow++;
        // fast就表示字符串长度了
        fast++;
    }

    while(slow < fast) {
        const val = stack.pop();
        if (val !== a[slow]) {
            return false;
        }
        slow++;
    }

    return true;
};


console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("abba"));
