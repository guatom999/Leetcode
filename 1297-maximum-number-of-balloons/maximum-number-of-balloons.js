/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    var balloonMap = { "b": 1, "a": 1, "l": 2, "o": 2, "n": 1 }
    var testMap = new Map()
    var max = 0
    var count = 0
    for (let i = 0; i < text.length; i++) {
        if (testMap[`${text[i]}`]) {
            testMap[`${text[i]}`] += 1
        } else {
            testMap[`${text[i]}`] = 1
        }
    }

    for (let x in balloonMap) {
        if (testMap[`${x}`] == null) {
            return 0
        } else {
            if (count == 0) {
                max = Math.floor(testMap[`${x}`] / balloonMap[x])
                count++
            } else {
                max = Math.min(max, Math.floor(testMap[`${x}`] / balloonMap[x]))
            }
        }
    }


    return max

};