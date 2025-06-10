/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals = intervals.sort((a,b) => a[0] - b[0])
    result = []
    start = intervals[0][0]
    end = intervals[0][1]
    count = 0
    for (let i = 1; i <= intervals.length; i++) {
        if(i == intervals.length){
            result.push([start, end])
            break
        }
        if (end >= intervals[i][0]) {
            if(intervals[i][1] > end){
                 end = intervals[i][1]
            }
            // end = intervals[i][1]
        } else {
            result.push([start, end])
            start = intervals[i][0]
            end = intervals[i][1]
            count++
        }
    }

    return result
};