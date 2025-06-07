/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const v = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    romanLength = s.length
    result = 0
    i = 0
    while(i < romanLength){
        if(v[s[i]] < v[s[i+1]]){
            result += (v[s[i+1]] - v[s[i]])
            i += 2
        }else{
            result += v[s[i]]
            i ++
        }
    }

    return result
};