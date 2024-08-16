/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // let maxDupIndex = 0
    // let maxDupValue = 0
    // let sortArr = nums.sort((a, b) => a - b)
    // for (let i = 0; i < sortArr.length; i++) {
    //     let dupValue = Math.abs((sortArr.indexOf(sortArr[i]) - sortArr.lastIndexOf(sortArr[i])))
    //     if(dupValue > maxDupValue){
    //         maxDupValue = dupValue
    //         maxDupIndex = i
    //     }
    // }

    // return sortArr[maxDupIndex]
    let notDupNums = []
    let notDupStack = []
    for (let i = 0; i < nums.length; i++) {
        if(notDupNums.indexOf(nums[i]) == -1){
            notDupNums.push(nums[i])
            notDupStack.push(0)
        }else{
            notDupStack[notDupNums.indexOf(nums[i])] += 1
        }
    }

    var maxDup = Math.max(...notDupStack)
    return notDupNums[notDupStack.indexOf(maxDup)]

    console.log("notDupNums" , notDupNums , "notDupStack" , notDupStack)


    // return sortArr[maxDupIndex]
    // let sortArr = nums.sort((a, b) => a - b)
    // let mooseAl = sortArr[0]
    // let count = 0
    // for (let i = 0; i < nums.length; i++){
    //     if(nums[i] == mooseAl){
    //         count++
    //     }else{
    //         count--
    //     }
    // }

    // console.log("count is" , sortArr[sortArr])

    // return sortArr[count]

};