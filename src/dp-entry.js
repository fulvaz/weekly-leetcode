// 如果我们有面值为1元、3元和5元的硬币若干枚，如何用最少的硬币凑够11元？

// 不能从10元怎么凑出来开始推理, 那就要考虑8元, 6元的情况, 自找苦吃啊.

// 从最小处吧, 令d(i)表示凑i元需要的最少硬币书 0元, 那需要0个硬币, d(1-1)需要1个, 2需要(d(1-1)+1)个, 很明显是2, d(i-1)表示用1元硬币去凑
// d(3), 这时候可以选3块的硬币了, 那么就是:即min(d(3-1)+1, d(3-3) + 1), 这也体现了动态规划的特点, 每次递推需要考虑当前最优的情况 那么递推公式基本有了
// d(5), min(d(5-1)+1, d(5-3)+1, d(5-5)+1), 所以min的比较是会变化的

const coins = [1, 3, 5];
const cache = new Map([[0, 0]]);

function main(total) {
    const result = runner(total);
    return result;
}

function runner(total) {
    // 没有也行, 就是老重复运算就不好了
    const cacheData = cache.get(total);
    if (cacheData !== undefined) {
        return cacheData;
    }

    const coinsCanUse = coins.filter(e => e <= total);
    const solutions = coinsCanUse.map((coin) => {
        return runner(total - coin) + 1;
    });

    const result = Math.min(...solutions);
    cache.set(total, result);

    return result;
}

exports.main = main;
