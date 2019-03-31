function inner(arr, start, needLen, result) {
    if (result.length === needLen) {
        console.log(result.join(', '));
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        swap(arr, start, i);
        result.push(arr[start]);
        inner(arr, start + 1, needLen - 1, result);
        result.pop();
        swap(arr, start, i);
        result
    }
    
}

function runner(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        inner(arr, 0, i+1, []);
    }
}

inner(['a', 'b', 'c'], 0, 1, []);

// runner(['a', 'b', 'c'])

function swap (arr, i, j) {
    var length = arr.length,
        temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

