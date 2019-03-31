
function qsort(arr, left, right) {
    const condition = function(toCompare, pivot) {
        const compareFront = parseInt(toCompare.toString() + pivot.toString(), 10);
        const pivotFront = parseInt(pivot.toString() + toCompare.toString(), 10);
        // 1. toCompare在pivot前面, 返回true
        if (compareFront < pivotFront) {
            return true;
        }

        // toCompare在pivot后面, 返回false
        if (compareFront >= pivotFront) {
            return false;
        }
    }

    if (right - left < 1) return

    const pivot = arr[left];
    let index = left + 1;
    for (let i = left + 1; i <= right; i++) {
        if (condition(arr[i], pivot)) {
            swap(arr, index, i);
            index++;
        }
    }
    const targetIdx = index - 1;
    swap(arr, left, targetIdx);
    qsort(arr, left, targetIdx - 1);
    qsort(arr, targetIdx + 1, right);
}

function swap(arr, i, j) {
    const tmp = arr[j];
    arr[j] = arr[i];
    arr[i] = tmp;
}

const arr = [213, 321, 1, 123];
123213321
qsort(arr, 0, arr.length - 1);
console.log(arr.join(''))
