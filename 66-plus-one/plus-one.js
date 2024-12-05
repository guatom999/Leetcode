/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    var result = [];
    let bigIntNum = BigInt(digits.join("")) + 1n; // Use BigInt for large numbers
    let afterPlus = bigIntNum.toString();
    for (let i = 0; i < afterPlus.length; i++) {
        result.push(parseInt(afterPlus[i]));
    }
    return result;
};