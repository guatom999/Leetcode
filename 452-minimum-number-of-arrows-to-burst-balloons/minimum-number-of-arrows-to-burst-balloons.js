/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    count = 0
    points.sort((a, b) => a[0] - b[0])
    prevBalloons = points[0]

    for (let i = 1; i < points.length; i++) {
        if (prevBalloons[1] >= points[i][0]) {
            count++
            prevBalloons = [points[i][0], Math.min(prevBalloons[1],points[i][1])]
        } else {
            prevBalloons = [points[i][0], points[i][1]]
        }
    }

    return points.length - count
};