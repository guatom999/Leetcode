/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    result = new Array(temperatures.length).fill(0)
    stack = []

    stack.push([temperatures[0], 0])

    for (let i = 1; i < temperatures.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1][0] < temperatures[i]) {
            result[stack[stack.length - 1][1]] = i - stack[stack.length - 1][1]
            stack.pop()
        }
        stack.push([temperatures[i], i])
    }

    console.log(stack)

    return result

};
