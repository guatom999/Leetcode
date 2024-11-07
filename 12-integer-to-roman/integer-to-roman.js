/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (value) {
    var romanValue = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
    var result = ""
    while (value > 0) {
        for (let i in romanValue) {
            if (value >= romanValue[i]) {
                value -= romanValue[i]
                result += i
                break
            }
        }
    }
    // console.log("result", result)
    return result
};