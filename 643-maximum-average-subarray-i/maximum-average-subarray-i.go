func findMaxAverage(nums []int, k int) float64 {
    var sum float64

    for i := 0; i < k; i++ {
        sum += float64(nums[i])
    }

    maxSum := sum

    for i := k; i < len(nums); i++ {
        sum += float64(nums[i]) - float64(nums[i-k])
        
        if sum > maxSum {
            maxSum = sum
        }
    }

    return maxSum / float64(k)
}