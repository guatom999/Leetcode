/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var sum = 0
    for(let i = 0 ; i < prices.length ; i++){
        if(prices[i] < prices[i+1]){
            sum += prices[i+1] - prices[i]
        }
    }

    return sum
};