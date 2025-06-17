/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    var newSMap = new Map()

    if(s.length !== t.length){
        return false
    }

    for (let i = 0; i < s.length; i++) {
        if (newSMap[s[i]] !== undefined) {
            newSMap[s[i]] += 1
        } else {
            newSMap[s[i]] = 1
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (newSMap[t[i]]) {
            newSMap[t[i]] -= 1
        }
    }

    for (let x in newSMap) {
        if (newSMap[x] !== 0) {
            return false
        }
    }

    return true

};