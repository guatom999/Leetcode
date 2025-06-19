/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    var result = []
    var sortMap = new Map
    var sortResult = new Array
    const newStr = strs.map((e, i) => {
        let subSort = Array.from(e).sort().join("")
        return subSort
    })

    newStr.forEach((v, i) => {
        if (!sortMap.has(v)) {
            sortMap.set(v, [strs[i]])
        } else {
            sortMap.get(v).push(strs[i])

        }
    })

    for (let [key, value] of sortMap) {
        result.push(value)
    }

    return result

};