/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanString = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    var newString = ""
    for(let i = cleanString.length  -1; i >= 0;i--){
        newString += cleanString[i]
    }

    if(newString === cleanString){
        return true
    }

    return false

    
};