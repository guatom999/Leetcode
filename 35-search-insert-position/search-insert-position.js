/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (target < nums[i]) {
            return i
        } else if (i == nums.length - 1) {
            return nums.length
        }
    }

};