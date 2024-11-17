/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    intervals.push(newInterval)
    intervals.sort((a, b) => a[0] - b[0])
    prevInterval = intervals[0]
    resultIntervals = []
    resultIntervals.push(prevInterval)
    for (let i = 1; i < intervals.length; i++) {
        let newInterval = []
        if (prevInterval[1] >= intervals[i][0]) {
            resultIntervals.splice(resultIntervals.length - 1, 1)
            newInterval = [prevInterval[0], Math.max(intervals[i][1], prevInterval[1])]
            resultIntervals.push(newInterval)
        } else {
            newInterval = intervals[i]
            resultIntervals.push(newInterval)
        }
        prevInterval = newInterval
    }

    return resultIntervals
};