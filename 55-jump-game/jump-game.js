/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    arriveLength = nums[0]
    if (nums.length == 1) {
        return true
    }
    if (arriveLength == 0) {
        return false
    }


    for (let i = 1; i < nums.length; i++) {
        if (arriveLength === 0) {
            return false
        }
        if (arriveLength <= nums[i]) {
            arriveLength = nums[i]
            if (arriveLength >= ((nums.length - 1) - i)) {
                return true
            }
            continue
        } else if (nums[i] < arriveLength && arriveLength !== 0) {
            arriveLength -= 1
            if (arriveLength >= ((nums.length - 1) - i)) {
                return true
            }
        } else {
            return false
        }

    }
    return false
};