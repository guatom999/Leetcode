/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {

    dupCheck = {}
    for (let i = 0; i < nums.length; i++) {
        if (dupCheck[nums[i]] !== undefined) {
            return true
        }
        dupCheck[nums[i]] = 0

    }
    return false

};