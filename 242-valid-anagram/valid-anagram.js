/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const notDupS = Array.from(s).sort().join("");
    const notDupT = Array.from(t).sort().join("");

    if (notDupS != notDupT) {
        return false
    }

    return true

};