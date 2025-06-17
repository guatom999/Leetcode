/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var numsDif = new Map()
    var result = []
    for (let i = 0; i < nums.length; i++) {
        diff = target - nums[i]
        if (numsDif[nums[i]] !== undefined) {
            result.push(numsDif[nums[i]], i)
        }
        numsDif[diff] = i
    }


    return result
};