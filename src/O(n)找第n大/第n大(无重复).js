function find(arr, n, p = 0, q = arr.length - 1) {
    const pivot = arr[q];
    
    let i = p;
    for (let j = p; j < q; j++) {
        // 注意降序排列
        if (arr[j] >= pivot) {
            swap(arr, i, j);
            i++;
        }
    }

    swap(arr, i, q);

    if (i === n - 1) return pivot;

    if (i < n - 1) {
        return find(arr, n, i + 1, q);
    } else {
        return find(arr, n, p, i - 1);
    }
}

function swap(arr, i, j) {
    let tmp = arr[j];
    arr[j] = arr[i];
    arr[i] = tmp;
}

const r = find([1, 3, 5, 7, 2, 4, 6, 8], 2);
console.log(r === 7);