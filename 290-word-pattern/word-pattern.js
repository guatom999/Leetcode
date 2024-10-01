/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    var newMap = new Map()
    var newPattern = Array.from(new Set(pattern.split("")))
    var splitWord = s.split(" ")
    var newsplitWord = Array.from(new Set(splitWord))

    if(pattern.length != splitWord.length ){
        return false
    }

    for (let i = 0; i < newsplitWord.length; i++) {
        newMap.set(newsplitWord[i], newPattern[i])
    }

    for(let x = 0; x < pattern.length;x++ ){
        if(newMap.get(splitWord[x]) !== pattern[x]){
            return false
        }
    }

    return true





    return true

};