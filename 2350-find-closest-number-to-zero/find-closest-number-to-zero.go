func Abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func findClosestNumber(nums []int) int {
	closest := 0

	for i := 1; i < len(nums); i++ {
		if Abs(nums[i]) <= Abs(nums[closest]) {
            if Abs(nums[i]) == Abs(nums[closest]){
                if(nums[i] > nums[closest]){
                    closest = i
                }else{
                    continue
                }
            }
            closest = i
		}
	}

	return nums[closest]
}