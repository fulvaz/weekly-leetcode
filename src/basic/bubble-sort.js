function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
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