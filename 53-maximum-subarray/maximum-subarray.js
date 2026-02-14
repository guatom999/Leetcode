/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    maxSum = nums[0]
    currNum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        currNum = Math.max(currNum + nums[i] , nums[i])
        maxSum = Math.max(maxSum, nums[i], currNum)
    }
    return maxSum
};