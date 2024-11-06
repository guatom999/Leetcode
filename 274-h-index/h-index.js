/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    var sortCitations = citations.sort((a, b) => b - a)
    res = 0
    for (let i = 0; i < sortCitations.length; i++) {
        if(sortCitations[i] >= i +1 ){
            res++
        }else {
            break
        }
    }

    return res

};