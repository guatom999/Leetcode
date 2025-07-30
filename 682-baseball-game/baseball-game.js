/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    stack = []
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "+") {
            stack.push(parseInt(stack[stack.length - 1]) + parseInt(stack[stack.length - 2]))
        } else if (operations[i] === "D") {
            stack.push(parseInt(stack[stack.length - 1]) * 2)
        } else if (operations[i] === "C") {
            stack.pop()
        } else {
            stack.push(parseInt(operations[i]))
        }
    }

    result = stack.reduce((a, b) => a + b, 0)

    console.log(result)

    return result


};