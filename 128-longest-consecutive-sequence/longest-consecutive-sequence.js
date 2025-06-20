/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let newNumsSet = new Set(nums)
    max = 0
    for (let x of newNumsSet) {
        if (!newNumsSet.has(x - 1)) {
            let count = 0
            while (newNumsSet.has(x + count)) {
                count++
            }
            max = Math.max(max, count)
        }
    }


    return max
};