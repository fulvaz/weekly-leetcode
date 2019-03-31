// 每个位置选择最小的一个
function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[i]) {
                swap(arr, i, j);
            }
        }
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