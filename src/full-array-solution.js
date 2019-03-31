/**
 * 检测是否可以交换
 * 查看交换的值在之后是否有重复出现，需求是只和特定的value仅交换一次，如果有重复则不交换
 * 此时有两种思路，一种是首次交换，之后抛弃所有同value的值（此时我们可以提供向前检测的方法）
 * 第二种是最后交换，在此之前所有值都不进行交换（这时我们使用向后检测的方法）
 * 这里我们使用向后检测，保证这是最后一个
 * @param arr
 * @param i
 * @param j
 */
var canSwap = function (arr, i, j) {
    return arr.slice(i, j).indexOf(arr[j]) === -1;
};

/**
 * 交换一个数组中的第i项和第j项（起始项为0）
 * @param arr
 * @param i
 * @param j
 */
var swap = function (arr, i, j) {
    var length = arr.length,
        temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
/**
 * 全排列使用的是递归交换数组中的数字
 * @param listArr
 * @param start 开始的值，调用时输入0
 * @param callback
 */
var permutate = function (listArr, start, callback) {
    var i,
        length = listArr.length;
    if (start === listArr.length - 1) {
        callback(listArr);
    } else {
        for (i = start; i < length; i++) {
            if (canSwap(listArr, start, i)) {
                // 就是说, 如果后面有这个值, 这次就不交换了
                // 以后交换后面那个值就好了, 保证只运行一次
                swap(listArr, start, i);
                permutate(listArr, start + 1, callback);
                console.log('');
                // 考虑只有两个元素的情况, 是不是还原了
                swap(listArr, start, i);
            }
        }
    }
};

permutate(['a', 'b', 'c'], 0, (e) => {
    console.log(e.join(','));
});