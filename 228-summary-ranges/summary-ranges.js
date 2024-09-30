/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    var result = []
    var start = nums[0]
    var end = start
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] == end + 1) {
            end = nums[i]
        }
        else {
            if (start === end) {
                result.push(`${end}`)
            }else{
                result.push(`${start}->${end}`)
            }
            start = nums[i]
            end = start

        }
    }


    return result
};