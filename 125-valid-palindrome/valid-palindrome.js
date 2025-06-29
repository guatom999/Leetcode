/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const newWord = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    console.log("newWord" , newWord)
    let reverseWord = ''
    for (let i = newWord.length - 1; i >= 0; i--) {
        reverseWord += newWord[i]
    }

    return reverseWord === newWord
};