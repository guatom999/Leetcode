/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let justNewMap = new Map()
    for (let word of strs) {
        const count = new Array(26).fill(0)
        for (let x of word) {
            count[x.charCodeAt(0) - 97]++
        }

        const key = count.join("-")

        if(!justNewMap.has(key)){
            justNewMap.set(key,[])
        }
        justNewMap.get(key).push(word)
    }

    return Array.from(justNewMap.values())
};