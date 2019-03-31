/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let start = 1;
    let end = x;

    let mid = Math.floor((start + end) / 2);

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let t = mid * mid;

        if (t === x) return mid;
        if (t < x) {
            start = mid + 1;
        } else if (t > x) {
            end = mid - 1;
        }
        
    }

    return mid;

};

console.log(mySqrt(4))
