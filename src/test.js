
// function start(n = 2, a = 0, b = 0, r = []) {
//     if (n === a && n === b) {
//         console.count();
//         console.log(r);
//         return;
//     }

//     if (a < n) start(n, a + 1, b, [...r, ')']);
//     if (b < n) start(n, a, b + 1, [...r, '(']);
// }
function start(n = 2, r = []) {
    if (n === 0) {
        console.count();
        console.log(r);
        return;
    }

    start(n - 1, [...r, 'a']);
    start(n - 1, [...r, 'b']);
}
start();