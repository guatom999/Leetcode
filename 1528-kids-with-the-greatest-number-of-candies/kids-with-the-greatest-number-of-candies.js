/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let greatestCandie = 0
    let result = []
    for (let i = 0; i < candies.length; i++) {
        greatestCandie = Math.max(greatestCandie, candies[i])
    }
    
    for(let i = 0 ; i < candies.length;i++){
        if(candies[i] + extraCandies < greatestCandie){
            result[i] = false
        }else{
            result[i] = true
        }
    }

    return result
    
};