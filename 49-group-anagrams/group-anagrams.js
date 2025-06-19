/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const justNewMap = new Map()
    for(let word of strs){
        sortedWord = word.split('').sort().join()
        !justNewMap.has(sortedWord) && justNewMap.set(sortedWord,[])
        justNewMap.get(sortedWord).push(word)
    }
    return Array.from(justNewMap.values())
};