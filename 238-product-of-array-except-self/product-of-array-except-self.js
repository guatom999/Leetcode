/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    prefix = new Array(nums.length).fill(1)
    postfix = new Array(nums.length).fill(1)
    res = new Array(nums.length).fill(1)

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            // prefix[i] = prefix[i] * nums[i]
            prefix[i] *= nums[i]
        } else {
            prefix[i] *= prefix[i - 1] * nums[i]
        }
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            postfix[i] *= nums[i]
        } else {
            postfix[i] *= postfix[i + 1] * nums[i]
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            res[i] = postfix[i + 1]
        } else if (i === nums.length - 1) {
            res[i] = prefix[i - 1]
        } else {
            res[i] = prefix[i - 1] * postfix[i + 1]
        }
    }

    return res
};