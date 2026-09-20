/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    var maxRes = 0
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        
        if (i < k) {
            count += nums[i]
            if (i == k - 1) {
                maxRes = count / k
                continue
            }
        } else {
            count = (count + nums[i] - nums[i - k])
            maxRes = Math.max(count / k, maxRes)
        }
    }

    return maxRes
};