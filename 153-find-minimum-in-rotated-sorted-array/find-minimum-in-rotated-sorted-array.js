/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    left = 0
    right = nums.length - 1
    
    while(left < right){
        mid = Math.floor((right + left ) / 2)
        if(nums[mid] > nums[right]){
            left = mid + 1
        }else {
            right = mid
        }
    }

    return nums[left]
};