/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    minPrice = prices[0]
    max = 0
    for(let i = 0;i < prices.length;i++){
        if(prices[i] < minPrice){
            minPrice = prices[i]
        }else {
            if((prices[i] - minPrice) > max){
                max = prices[i] - minPrice
            }
        }
    }

    return max
};