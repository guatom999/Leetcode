/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    // return magazine.indexOf(ransomNote) == -1 ? false : true
    for (let i = 0; i < ransomNote.length; i++) {
        if (magazine.indexOf(ransomNote[i]) == -1) {
            return false
        }
        magazine = magazine.slice(0, magazine.indexOf(ransomNote[i])) + magazine.slice(magazine.indexOf(ransomNote[i]) + 1);
    }
    return true
};