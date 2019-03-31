/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力解法
// var maxProduct = function(nums) {
//     let max = Number.MIN_SAFE_INTEGER;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = nums.length; j > i; j--) {
//             const p = product(nums.slice(i, j));
//             if (max < p) {
//                 max = p;
//             }
//         }
//     } 
//     return max;
// }

// function product(nums) {
//     return nums.slice(1).reduce((p, n) => {
//         return p * n;
//     }, nums[0]);
// }
