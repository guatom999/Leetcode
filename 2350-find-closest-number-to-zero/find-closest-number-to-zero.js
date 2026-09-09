/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
    closet = 0

    for (let i = 1; i < nums.length; i++) {
        console.log(closet)
        if (Math.abs(nums[i]) == Math.abs(nums[closet])) {
            if (nums[i] > nums[closet]){
                closet = i
            }
        }
        else if(Math.abs(nums[i]) < Math.abs(nums[closet])) {
            closet = i
        }
    }

    return nums[closet]
};