/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var sumMap = new Map()
    for(let i = 0 ; i < nums.length;i++){
        different = target - nums[i]
        if(sumMap.get(different) != undefined){
            return [sumMap.get(different),i]
        }
        sumMap.set(nums[i], i)
    }

};