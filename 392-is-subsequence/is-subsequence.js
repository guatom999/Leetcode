/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var prevSubsequence = 0
    for(let i = 0;i < s.length;i++){
        // t.indexOf(s.)
        if(t.indexOf(s[i]) == -1){
            return false
        }
        t = t.slice(t.indexOf(s[i])+1, t.length);
    }

    return true
};