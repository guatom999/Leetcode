/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++
        if (digits[i] < 10) {
            console.log(digits[i])
            return digits;
        }
        digits[i] = 0
    }

    return [1, ...digits]

};