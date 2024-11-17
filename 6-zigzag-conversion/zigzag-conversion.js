/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    newNumRows = numRows === 1 ? s.length : numRows
    beforeResult = new Array(newNumRows).fill("");
    plus = true
    toAdd = 0;
    for (let i = 0; i < s.length; i++) {
        beforeResult[toAdd] += s[i]
        if(toAdd === 0){
            plus = true
        }else if(toAdd === numRows -1){
            plus = false
        }
        plus ? toAdd++ : toAdd--
    }

    return beforeResult.join("")
};