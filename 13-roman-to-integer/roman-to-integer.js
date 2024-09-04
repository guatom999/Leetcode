/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanToIntMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let sum = 0
    let prevValue = 0

    for (let i = 0; i < s.length; i++) {
        if(i !== 0){
            prevValue = romanToIntMap.get(s[i - 1])
            currentValue = romanToIntMap.get(s[i])
            sum += currentValue
            if(currentValue > prevValue){
                sum -= prevValue* 2
            }
        }else{
            sum += romanToIntMap.get(s[i])
        }

    }
    return sum
};