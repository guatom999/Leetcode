/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    var min = nums.length + 1
    var start, end = 0
    var sum = 0

    for (let start = 0; start < nums.length; start++) {
        sum += nums[start]
        while (sum >= target) {
            min = Math.min(min, Math.abs(start - end + 1))
            sum -= nums[end]
            end++
        }

    }
    return min === nums.length + 1 ? 0 : min
};