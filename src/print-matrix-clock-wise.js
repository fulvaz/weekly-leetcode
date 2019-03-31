

function mainAlgorithm(m) {
    let status = 0;

    function next(status) {
        return (status + 1) % 4;
    }

    let result = [];

    while(m.length > 0 || (m[0] && m[0].length > 0)) {
        switch(status) {
            case 0: {
                const {removed, remain} = removeFirstRow(m);
                m = remain;
                result = [...result, ...removed];
                status = next(status);
                break;
            }
            case 1: {
                const {removed, remain} = removeLastCol(m);
                m = remain;
                result = [...result, ...removed];
                status = next(status);
                break;
            }
            case 2: {
                const {removed, remain} = removeLastRow(m);
                m = remain;
                result = [...result, ...removed];
                status = next(status);
                break;
            }
            case 3: {
                const {removed, remain} = removeFirstCol(m);
                m = remain;
                result = [...result, ...removed];
                status = next(status);
                break;
            }
        }
    }
    
    return result;
}


function removeFirstRow(arr) {
    const remain = arr.slice(1);
    const removed = arr[0];
    return {remain, removed};
}

function removeLastRow(arr) {
    const remain = arr.slice(0, -1);
    const removed = [...arr.slice(-1)[0]];
    removed.reverse();
    return {remain, removed};
}

function removeFirstCol(arr) {
    const remain = arr.map(col => {
        return col.slice(1);
    });
    let removed = arr.map(col => {
        return col.slice(0, 1);
    }).reduce((p, n) => {
        return [
            ...p,
            ...n,
        ]
    }, []);
    removed = [...removed];
    removed.reverse();
    return {remain, removed};
}

function removeLastCol(arr) {
    const remain = arr.map(col => {
        return col.slice(0, -1);
    });
    const removed = arr.map(col => {
        return col.slice(-1);
    }).reduce((p, n) => {
        return [
            ...p,
            ...n,
        ]
    }, []);
    return {remain, removed};
}

const testData = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29],
];

mainAlgorithm([[1]]).forEach(e => console.log(e));

module.exports = {
    mainAlgorithm,
    removeLastCol,
    removeFirstCol,
    removeLastRow,
    removeFirstRow,
}

