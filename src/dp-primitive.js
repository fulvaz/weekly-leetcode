// 找LIS longest increasing subsequence 最长升序序列
// 求任意序列的最长升序序列长度

// 审题很重要啊...
// 思路是对某个数, 如果需要找到最长升序序列, 那么除了自己, 还要加上比自己小且在自己前方的数字的最长子序列
// d(i)表示前n个数的LIS长度, A表示序列
// 那么状态方程就出来了 d(i) = max(1, d(j) + 1), A[j] < A[i], j < i

// 举个栗子: 5，3，4，8，6，7
// d(i)表示前n个数的LIS长度
// d(1) = 1 (序列: 5))
// d(2) = 1 (序列: 3))
// d(3) = d(2) + 1 事实上算法时找到全部比3小的数字, 然后找到其最大升序序列长度, 加上自己便是当前的最长长度 (序列: 3, 4)
// d(4) = max(d(1), d(2), d(3)) + 1

function main(seq) {
    return runner(seq);
}

function runner(seq) {
    // // 当然是从后面遍历起啊
    // seq.reverse().forEach((e, idx) => {
    //     // 要找到前面n个比自己小的数--的序列, 就是要找到他们的idx
    //     // 前面n个的序列
    //     // -1 是因为要排除自己
    //     const seqForward = seq.slice(0, seq.length - idx - 1);
    //     const subIdxs = seqForward.map((subE, subIdx) => {
    //         if (subE < e) {
    //             return subIdx;
    //         }
    //         return undefined;
    //     }).filter(fitlere => filter !== undefined);

    //     const subSeqs = subIdxs.map(subIdx => seqForward.slice(0, subIdx + 1));
    //     runner(subSeqs);
    // });

    const cache = [];

    for (let i = 0; i < seq.length; i++) {
        cache[i] = 1;
        // 开始找最长
        for (let j = 0; j < i; j++) {
            // 排前面且比自己小
            if (seq[j] < seq[i] && cache[i] < cache[j] + 1) {
                cache[i] = cache[j] + 1;
            }
        }
    }
    return Math.max(...cache);
}

exports.main = main;