/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    left = 0
    right = nums.length - 1
    result = 0

    while (left <= right) {
        mid = (Math.floor((right + left) / 2))
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return left
};