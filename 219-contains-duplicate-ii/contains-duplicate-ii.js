/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    check = new Map()
    for (let i = 0; i < nums.length; i++) {
        if(check.has(nums[i])){
            if(Math.abs(check.get(nums[i]) - i) <= k){
                return true
            }
        }
        check.set(nums[i],  i)
    }
    return false
};