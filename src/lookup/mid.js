function find(arr, p, q, val) {
    if (p >= q) {
        if (arr[p] === val) {
            return p;
        } else {
            return null;
        }
    } 
    const mid = Math.floor(p + (q - p) / 2);
    if (arr[mid] === val) {
        return mid;
    } else if (val < arr[mid]) {
        return find(arr, p, mid - 1, val);
    } else if (val > arr[mid]) {
        return find(arr, mid + 1, q, val)
    }
}

const r = find([0+ 1, 1+ 1, 2+ 1, 3+ 1, 4+ 1, 5+ 1, 6+ 1], 0, 6, 5);
const r2 = find([], 0, 0, 5);
console.log(r2);
