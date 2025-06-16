/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    var ransomeMap = new Map()
    var magazineMap = new Map()
    for (let i = 0; i < ransomNote.length; i++) {
        if (ransomeMap[ransomNote[i]] !== undefined) {
            ransomeMap[ransomNote[i]] += 1
        } else {
            ransomeMap[ransomNote[i]] = 1
        }
    }

    for (let i = 0; i < magazine.length; i++) {
        if (ransomeMap[magazine[i]]) {
            ransomeMap[magazine[i]] -= 1
        }
    }

    for (let x in ransomeMap) {

        if (ransomeMap[x] > 0) {
            return false
        }
    }

    return true



    console.log("ransomeMap", ransomeMap)

};