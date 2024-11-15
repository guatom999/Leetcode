/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    numsSet = new Set(nums)
    max = 0
    for (let i = 0; i < nums.length; i++) {
        if(!(numsSet.has(nums[i] - 1))){
            count = 0
            while(numsSet.has((nums[i] + count))){
                count++
            }
            max = Math.max(max,count)
        }
    }
    return max
};