/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    maps = { ')': '(', '}': '{', ']': '[' }
    stack = []
    for (let i = 0; i < s.length; i++) {
        if (maps[s[i]] === undefined) {
            stack.push(s[i])
        } else {
            if (stack[stack.length - 1] !== maps[s[i]]) {
                return false
            } else {
                stack.pop()
            }
        }
    }

    return stack.length === 0

};