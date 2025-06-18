/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var majorElement = {}
    var max = 0
    var maxIndex = 0
    for (let i = 0; i < nums.length; i++) {
        if (majorElement[nums[i]] !== undefined) {
            majorElement[nums[i]] += 1
        } else {
            majorElement[nums[i]] = 1
        }
    }

    for(let x in majorElement){
        if(majorElement[x] > max){
            maxIndex = parseInt(x)
            max = majorElement[x]
        }
    }

    return maxIndex
};