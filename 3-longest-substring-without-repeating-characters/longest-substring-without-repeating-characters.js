/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    charSet = new Set()
    start = 0
    end = 0
    res = 0
    if (s.length === 1) {
        return 1
    }
    for (let start = 0; start < s.length; start++) {
        while (charSet.has(s[start]) ) {
            charSet.delete(s[end])
            end++
        }
        charSet.add(s[start])
        res = Math.max(res, start - end + 1)
    }

    return res

};