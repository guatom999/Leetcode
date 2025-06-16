/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    var newSet = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (newSet.has(nums[i])) {
            return true
        }
        newSet.add(nums[i])

    }

    return false
};