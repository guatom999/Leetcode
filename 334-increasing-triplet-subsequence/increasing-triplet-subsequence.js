/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    
    firstSequence = 2147483648
    secondSequence = 2147483648

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] <= firstSequence){
            firstSequence = nums[i]
        }else if(nums[i] <= secondSequence){
            secondSequence = nums[i]
        }else {
            return true
        }
    }

    return false
};