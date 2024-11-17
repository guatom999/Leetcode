/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    // intervals.sort((a,b) => a[0] - b[0])
    intervals.sort((a, b) => a[0] - b[0])
    var mergedIntervals = intervals[0]
    var result = []
    result.push(mergedIntervals)
    for (let i = 1; i < intervals.length; i++) {
        let newInterval = []
        if (mergedIntervals[1] >= intervals[i][0]) {
            result.splice(result.length - 1, 1)
            newInterval = [mergedIntervals[0], Math.max(intervals[i][1],mergedIntervals[1] )]
            result.push(newInterval)
        } else {
            newInterval = intervals[i]
            result.push(newInterval)
        }
        mergedIntervals = newInterval
        // console.log("mergedIntervals" ,mergedIntervals)
    }

    return result
    // console.log("result", result)
};