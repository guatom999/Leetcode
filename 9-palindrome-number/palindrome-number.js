/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    palindrome = x.toString()
    var compareArray = ""
    for (let i = palindrome.length - 1; i >= 0; i--) {
        compareArray += palindrome[i]
    }

    return parseInt(compareArray) === x 

};