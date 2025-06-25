/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var left =  0
    var right = s.length-1
    while(left <= right){
        toLeft = s[right]
        toRight = s[left]
        s[left] = toLeft
        s[right] = toRight
        left++
        right--
    }

    console.log("s is" , s)
};