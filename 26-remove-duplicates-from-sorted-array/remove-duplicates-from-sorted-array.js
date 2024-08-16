/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    nums = Array.from(new Set(nums)).sort((a,b) => a-b).map((e,i) => {
        nums[i] = e
    })
    return nums.length
};