/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var numsdiff = new Map()
    var result = []
    for (let i = 0; i < nums.length; i++) {
        diff = target - nums[i]
        if (numsdiff[diff] != undefined) {
            result.push(numsdiff[diff], i)
        }
        numsdiff[nums[i]] = i
    }
    return result
};