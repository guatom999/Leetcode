func twoSum(nums []int, target int) []int {
    numsMap := make(map[int]int)
    for i , v := range nums {  
        different := target - v
        if _ , ok := numsMap[different]; ok {
            return []int{numsMap[different] , i}
        }

        numsMap[v]  = i
    }

    return nil
}