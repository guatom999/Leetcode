/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    matrix = matrix.flat()
    left = 0
    right = matrix.length - 1


    while (left <= right) {
        mid = Math.floor((right + left) / 2)
        if(target == matrix[mid]){
            return true
        }else if(target < matrix[mid]){
            right = mid - 1
        }else {
            left = mid + 1
        }
    }

    return false

};