function split(n, result = []) {
    const current = result.reduce((p, n) => {
        return p * n;
    }, 1);

    // if (result[0] === 1) {
    //     console.log([1, n]);
    //     return;
    // } else if (result[0] === n) {
    //     console.log([n, 1]);
    //     return;
    // }

    if (n === current && result.length > 1) {
        console.log(result);
    } else if (n < current) {
        return;
    } else if (n >= current) {
        const start = result.indexOf(1) !== -1 ? 2 : 1;
        for (let i = start; i <= n; i++) {
            split(n, [...result, i]);
        }
    }
}

split(8);