var maxProduct = function(nums) {
    let max = nums[0];
    let currMax = nums[0];
    let currMin = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const minMax = [
            Math.min(nums[i], currMax * nums[i], currMin * nums[i]),
            Math.max(nums[i], currMax * nums[i], currMin * nums[i]),
        ];
        currMin = minMax[0];
        currMax = minMax[1];

        if (max < currMax) max = currMax;
    }
    return max;
};

console.log(maxProduct([2, 3, -2, 4]));
