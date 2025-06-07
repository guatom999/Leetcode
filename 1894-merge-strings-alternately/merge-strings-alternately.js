/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    longestLength = Math.max(word1.length, word2.length)
    result = ""
    for (let i = 0; i < longestLength; i++) {
        result += word1[i] ? word1[i] : ""
        result += word2[i] ? word2[i] : ""
    }

    return result
};