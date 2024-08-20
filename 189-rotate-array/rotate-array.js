/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let rotateArr = new Array(nums.length)
    let keep = 0
    for (let i = 0; i < nums.length; i++) {
        newIndex = (i+k) % nums.length
        rotateArr[newIndex] = nums[i]
    }

    for(let i = 0 ; i < nums.length;i++){
        nums[i] = rotateArr[i]
    }

    console.log("rotateArr is" , rotateArr)

};