/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let splitWord = s.trim().split(" ")
    return splitWord[splitWord.length - 1].length
};