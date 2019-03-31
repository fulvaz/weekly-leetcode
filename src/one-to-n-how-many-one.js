// 从1到n整数中1出现的次数：O(logn)算法
// https://blog.csdn.net/yi_afly/article/details/52012593
// 404的话去有道云笔记找
// 本质上是计算个位, 百位, 千位....1出现的次数

// 534

function count(n) {
    let round = n;
    let base = 1;
    let total = 0;
    while (round > 0) {
        weight = Math.floor(round % 10);
        round = Math.floor(round / 10);

        total += round * base;

        // 个位啊, 一次循环只出现一次
        if (weight > 1) {
            total += base;
        } else if (weight === 1) {
            total += n % base;
        }

        base *= 10;
    }

    return total;

}
console.log(count(534));
console.assert(count(534) === 214);
console.log(count(530));
console.assert(count(530) === 213);
console.log(count(504));
console.assert(count(504) === 201);
console.log(count(514));
console.assert(count(514) === 206);
