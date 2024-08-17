/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // console.log(Math.min(...prices))
    var min = prices[0]
    res = 0
    for (let i = 0; i < prices.length; i++) {
        var count = 0
        min = Math.min(min, prices[i])
        count = prices[i] - min
        res = Math.max(res, count)
    }

    // console.log("max is", res)
    return res
};