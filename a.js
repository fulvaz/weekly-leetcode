/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var threeSum = function(nums, target) {
    if (nums.length < 3) return [];
    
    // 需要找的值: c
    const set = {
      
    };
    result = [];
    
    for (let i = 0; i < nums.length; i++) {
        set[target - nums[i]] = [i];
        for (let j = i + 2; j < nums.length; j++) {
            const abSum = nums[i + 1] + nums[j];
            if (set[abSum] !== undefined) {
                result.push([set[abSum][0], i + 1, j]);
            }
        }
    }
    
    return result;

};

console.log(threeSum([-1,0,1,2,-1,-4], 0))