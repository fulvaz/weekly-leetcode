function internal(arr, start, stash) {
    if (!arr || start < 0) {
        return;
    }

    if (start === arr.length - 1) {
        // 很巧妙, 到最后一个时, 其全组合是他自己, 不需要改
        stash.push(arr.join(''))
    }

    // i 不能等于 start+1 啊, abc, a被忘了啊
    for (let i = start; i < arr.length; i++) {
        // 规律: 将每个元素放在最初位置, 对然后对除这个元素外的子序列进行全排序, 就可以得到其全排列的结果
        swap(arr, start, i);
        internal(arr, start + 1, stash);

        // 清理现场
        swap(arr, start, i);
    }
}

function deduplicate(arr) {
    arr = [...arr];
    arr.sort();
    return arr.filter((e, idx, array) => {
        if (idx < 1) return true;
        return e !== array[idx - 1];
    })
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function Permutation(str)
{
    // write code here
    const result = [];
    internal(str.split(''), 0, result);
    return deduplicate(result);
}

console.log(Permutation('abb'));
;