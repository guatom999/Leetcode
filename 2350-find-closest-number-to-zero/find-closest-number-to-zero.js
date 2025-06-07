/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
    bfSort = []
    for (let i = 0; i < nums.length; i++) {
        bfSort.push(Math.abs(nums[i]))
    }
    min = 0
    for (let i = 1; i < nums.length; i++) {
        if (bfSort[i] < bfSort[min]) {
            min = i
        } else if (bfSort[i] == bfSort[min]) {
            if(nums[i] > nums[min]){
                min = i
            }
        }
    }
    return nums[min]

};