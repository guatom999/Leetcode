/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    stack = []

    for (let i = 0; i < tokens.length; i++) {
        value1 = 0
        value2 = 0
        if (tokens[i] === "+") {
            value1 = stack.pop()
            value2 = stack.pop()
            stack.push(parseInt(value2) + parseInt(value1))
        } else if (tokens[i] === "-") {
            value1 = stack.pop()
            value2 = stack.pop()
            stack.push(parseInt(value2) - parseInt(value1))

        } else if (tokens[i] === "*") {
            value1 = stack.pop()
            value2 = stack.pop()
            stack.push(parseInt(value2) * parseInt(value1))
        } else if (tokens[i] === "/") {
            value1 = stack.pop()
            value2 = stack.pop()
            stack.push(parseInt(value2) / parseInt(value1))
        } else {
            stack.push(tokens[i])
        }
    }

    return parseInt(stack.pop())

};