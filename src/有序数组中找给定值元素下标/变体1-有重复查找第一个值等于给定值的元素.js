function find(arr, val, p = 0, q = arr.length - 1) {
    if (p >= q) {
        if (arr[p] === val) return p;
        else return null;
    }

    const mid = Math.floor(p + (q - p) / 2);

    if (arr[mid] === val && arr[mid - 1] !== val) {
        return mid;
    } else if (arr[mid] === val && arr[mid - 1] === val) {
        return find(arr, val, p, mid - 1);
    }

    if (val > arr[mid]) {
        return find(arr, val, mid + 1, q);
    } else {
        return find(arr, val, p, mid - 1);
    }
}

const r = find([1, 2, 3, 3, 3, 4, 5, 6], 3);
console.assert(r, 2);