// 在一个有序序列中插入一个值
// 因为需要在O(n^2)完成排序与搬运数据, 会哟理解的苦难

function sort(arr) {
    if (arr.length <= 1) return arr;

    for (let i = 1; i < arr.length; i++) {
        const candidate = arr[i];
        // 遍历已排序部分, 寻找一个可插入的位置
        let j = i - 1;
        for (; j >= 0; j--) {
            if (arr[j] <= candidate) {
                // 找到了, 注意考虑稳定性, 这里是<=, 且要放到j后面.
                break;
            } else {
                // 向后搬运数据
                arr[j + 1] = arr[j];
            }
        }

        arr[j + 1] = candidate;
    }

}


function runner(arr) {
    sort(arr);
    console.log(arr);
}

function swap(arr, i, j) {
    let tmp = arr[j];
    arr[j] = arr[i];
    arr[i] = tmp;
}

runner([1, 2, 3, 4, 1, 5, 2, 6, 10, 3, 7]);
runner([]);