/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    var newSet = new Set(jewels)
    var count = 0
    for (let i = 0; i < stones.length; i++) {
        if(newSet.has(stones[i])){
            count++
        }
    }

    return count
};