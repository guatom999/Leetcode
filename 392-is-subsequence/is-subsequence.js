/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    sIndex = 0
    tIndex = 0
    while(sIndex < s.length && tIndex < t.length){
        if(s[sIndex] === t[tIndex]){
            sIndex++
            tIndex++
        }else{
            tIndex++
        }
    }

    return sIndex === s.length
};