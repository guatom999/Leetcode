/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    newWord = s.trim().split(" ")
    result = []
    for (let i = newWord.length - 1; i >= 0; i--) {
        if (newWord[i] == "" || newWord[i] == " ") {
            continue
        } else {
            result.push(newWord[i])
        }
    }

    return result.join(" ").trim()
};