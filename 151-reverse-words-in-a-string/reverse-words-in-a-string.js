/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    afterTrim = s.trim().split(" ")
    result = ""

    for (let i = afterTrim.length - 1; i >= 0; i--) {
        if (afterTrim[i] !== '') {
            if (i !== 0) {
                result += afterTrim[i] + " "
            } else {
                result += afterTrim[i]
            }
        }
    }

    return result

};