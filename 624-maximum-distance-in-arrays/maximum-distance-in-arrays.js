/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
    var min = arrays[0][0]
    var max = arrays[0][arrays[0].length - 1] 
    var res = 0 
    for(let i = 1; i < arrays.length; i++){
        var x = Math.abs(arrays[i][0] - max) 
        var y = Math.abs(arrays[i][arrays[i].length - 1] - min)
        min = Math.min(min, arrays[i][0]) 
        max = Math.max(max , arrays[i][arrays[i].length - 1])
        res = Math.max(res,x,y)
    }
    return res
};