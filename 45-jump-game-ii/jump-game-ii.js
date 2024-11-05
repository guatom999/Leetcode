/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    res = 0
    start = 0
    max = 0
    currentIndex = 0
    while (max < (nums.length -1)){
        for(let i = start ; i < currentIndex + 1 ; i++){
            max = Math.max(max , nums[i] + i)
        }
        start = currentIndex + 1
        currentIndex = max
        res++
    }
    return res
};