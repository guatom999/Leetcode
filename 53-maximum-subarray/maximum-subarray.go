func maxSubArray(nums []int) int {
	currNum := nums[0]
	maxSum := nums[0]
	for i := 1; i < len(nums); i++ {
		currNum = max(nums[i], currNum+nums[i])
		maxSum = max(maxSum, currNum)
	}

	return maxSum
}