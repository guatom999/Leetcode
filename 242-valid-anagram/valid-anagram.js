/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // const notDupS = Array.from(new Set(s)).sort().join("");
    // const notDupT = Array.from(new Set(t)).sort().join("");
    const notDupS = Array.from(s).sort().join("");
    const notDupT = Array.from(t).sort().join("");

    console.log("notDupS", notDupS, "notDupT", notDupT)

    if (notDupS != notDupT) {
        return false
    }

    return true

};