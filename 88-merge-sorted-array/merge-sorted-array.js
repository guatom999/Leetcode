/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1.slice(0, m).concat(nums2.slice(0, n)).sort((a, b) => a - b).map((e, index) => {
        nums1[index] = e
    })
    // for(let i = 0; i < fakeNums1.length; i++){ 
    //     nums1[i] = fakeNums1[i]
    // }
    // console.log("fakeNums1", fakeNums1)
}