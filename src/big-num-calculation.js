print-matirx-clock-wise.jsconst assert = require('assert');

// 弃坑了, 实现减法就是时间上的问题
class BigNum {
    add(a, b) {
        const arrA = this.trimZero(a.split('').reverse());
        const arrB = this.trimZero(b.split('').reverse());

        const maxLen = Math.max(arrA.length, arrB.length);
        let sum = 0;
        let overFlow = 0;
        let sumArr = Array(maxLen);

        for (let i = 0; i < maxLen; i++) {
            sum = Number(arrA[i] || 0) + Number(arrB[i] || 0) + overFlow;
            overFlow = Math.floor(sum / 10);
            sumArr[i] = sum % 10;
        }
        sumArr.push(overFlow || '');
        sumArr = this.trimZero(sumArr);
        return sumArr.reverse().join('');
    }

    ifNagative(str) {
        return str.startsWith('-');
    }

    minus(a, b) {
        // +  -  +
        // -  -  +
        // +  -  -
        // -  -  - 即-a + b, b - a
        if (this.ifNagative(a) && !this.ifNagative(b)) {
            return '-' + this.add(a.slice(1), b.slice(1));
        } else if (!this.ifNagative(a) && this.ifNagative(b)) {
            return this.add(a, b.slice(1));
        } else if (this.ifNagative(a) && this.ifNagative(b)) {
            // |a| > |b|
            if ()
            return '-' + this.minusNormal(a, b);
            
            // |a| < |b|
        } else {
            return this.minusNormal(a, b);
        }
    }

    ifGreater(a, b) {
        // + +
        // + -
        // - +
        // - -

        const ifANag = this.ifNagative(a);
        const ifBNag = this.ifNagative(b);

        if (!ifANag && ifBNag) {
            return true;
        } else if (ifANag && !ifBNag) {
            return false;
        } else if (ifANag && ifBNag) {
            return 
        } else {

        }


        a = ifANag ? a.slice(1) : a;
        b = ifBNag ? b.slice(1) : b;

        if (a.length !== b.length) {
            if (a.length > b.length) {
                return true;
            } else {
                return false;
            }
        } else {

        }
    }

    // a>0 && b>0
    ifGreaterNormal(a, b) {

    }

    // 处理 a > b > 0的情况
    minusNormal(a, b) {
        const arrA = this.trimZero(a.split('').reverse());
        const arrB = this.trimZero(b.split('').reverse());

        const maxLen = arrA.length;
        let result = 0;
        let overFlow = 0;
        let resultArr = Array(maxLen);

        for (let i = 0; i < maxLen; i++) {
            const minuend = Number(arrA[i] || 0);
            const subtrahend = Number(arrB[i] || 0);

            if (minuend - subtrahend < 0) {
                result = minuend + 10 - subtrahend - overFlow;
                overFlow = 1;
                
            } else {
                result = minuend - subtrahend - overFlow;
                overFlow = 0;
            }
            resultArr[i] = result;
        }
        resultArr.push(overFlow || '');
        resultArr = this.trimZero(resultArr);
        return resultArr.reverse().join('');
    }


    trimZero(arr) {
        const arrCloned = [...arr];
        for (let i = arrCloned.length - 1; i >= 0; i--) {
            if (arrCloned[i] === 0 && arrCloned.length !== 1) arrCloned.length--;
            else break;
        }
        return arrCloned;
    }
}

const big = new BigNum();

assert.equal(big.add('9999939424324', '3123131231236'), '13123070655560');
assert.equal(big.add('9999939424324', '11111111'), '9999950535435');
assert.equal(big.add('0', '0'), '0');
assert.equal(big.minus('99999394243245', '3123131231236'), '96876263012009');
assert.equal(big.minus('999993942432454', '3123131231236'), '996870811201218');
assert.equal(big.minus('0', '0'), '0');

// NaN
// 负数
// 有零直接返回
// minus