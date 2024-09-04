/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = ""
    for(let i = 0 ; i < strs[0].length ; i++){
        let count = 0 
        for(let x = 0 ; x < strs.length; x++){
            if(strs[x][i] === strs[0][i]){
                count++
            }
        }
        if (count == strs.length){
            result += strs[0][i]
        }else{
            break
        }
    }

    return result
};