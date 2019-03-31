function find(arr, n, p = 0, q = arr.length - 1) {
    if (p >= q) {
        if (arr[p] === n) {
            return p;
        } else {
            return null;
        }
    }

    const mid = Math.floor(p + (q - p) / 2);

    if (arr[mid] === n) {
        if (arr[mid + 1] === n) {
            return find(arr, n, mid + 1, q);
        } else {
            return mid;
        }
    }

    if (arr[mid] < n) {
        return find(arr, n, mid + 1, q);
    } else {
        return find(arr, n, p, mid - 1);
    }
} 


const r = find([1, 2, 3, 3, 3, 4, 5, 6], 3);
console.assert(r, 4);