func containsNearbyDuplicate(nums []int, k int) bool {

	checkDistance := map[int]int{}
	for i := 0; i < len(nums); i++ {
		if _, ok := checkDistance[nums[i]]; !ok {
			checkDistance[nums[i]] = i
		} else {
			if i-checkDistance[nums[i]] <= k {
				return true
			}
			checkDistance[nums[i]] = i
		}
	}

	return false
}