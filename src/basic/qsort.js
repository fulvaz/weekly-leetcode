
// function qsort(arr, left, right) {
//     // 1. 注意条件限制
//     if (right - left < 1) return;

//     let pivot = arr[left];
//     let pivotIdx = left;
    
//     let problemIdx = pivotIdx + 1;

//     // 从左扫到右, 将比pivot小的值都挪到左边来, problemIdx记录需要挪动的位置
//     for (let i = problemIdx; i <= right; i++) {
//         // 一轮的buble sort即可
//         if (arr[i] < pivot) {
//             swap(arr, i, problemIdx);
//             problemIdx++;
//         }
//     }
//     // 注意交换需要减1
//     swap(arr, pivotIdx, problemIdx - 1);
//     // 注意交换范围
//     qsort(arr, left, problemIdx - 2);
//     qsort(arr, problemIdx, right);
// }

// function qsort(arr, s, e) {
//     if (s >= e) return;
//     const pivot = arr[e];
//     let i = s;
//     for (let j = i; j <= e - 1; j++) {
//         if (arr[j] < pivot) {
//             swap(arr, i, j);
//             i++;
//         }
//     }
//     swap(arr, i, e);
//     qsort(arr, s, i - 1);
//     qsort(arr, i + 1, e);
// }

// 每次选一个pivot, 选择合适的位置插入pivot, 保证pivot左边比自己小, 右边比自己大, 然后递归左右区间, 同样保证如此即可
function qsort(arr, p, q) {
    if (p >= q) return;

    // pivot取最后
    // [1, 8,  4, 17, 7, 21, 9, 25, 12, 32, 15]
    const pivot = arr[q];

    // i去左端
    let i = p;
    // 就是遍历整个区间
    for (j = p; j < q; j++) {
        // 这里是把比pivot小的值都挪到左边 
        // i就是从左端点往右移动的
        // 所以所有元素比较完毕后, i所在的位置左边的值都会比i小
        if (arr[j] < pivot) {
            swap(arr, i, j);
            i++;
        }
    }

    swap(arr, i, q);
    qsort(arr, p, i - 1);
    qsort(arr, i + 1, q);
}


function swap(arr, i, j) {
    let tmp = arr[j];
    arr[j] = arr[i];
    arr[i] = tmp;
}

function runner(arr) {
    qsort(arr, 0, arr.length - 1);
    console.log(arr);
}


runner([1, 2, 3, 4, 1, 5, 2, 6, 10, 3, 7]);
runner([]);