/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    diffMap = {}
    for (let i = 0; i < nums.length; i++) {
        different = target - nums[i]
        if (diffMap[different] !== undefined) {
            return [diffMap[different]+1, i+1]
        }
        diffMap[nums[i]] = i
    }
};