/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    result = []
    start = nums[0]
    end = nums[0]
    for (let i = 1; i <= nums.length; i++) {
        console.log("i is", i)
        if (nums[i] === (end + 1)) {
            end = nums[i]
        }else {
            if (start === end) {
                result.push(`${end}`)
            } else {
                result.push(`${start}->${end}`)
            }
            start = nums[i]
            end = nums[i]
        }
    }

    return result
};