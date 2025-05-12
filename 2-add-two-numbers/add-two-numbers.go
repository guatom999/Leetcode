/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(list1 *ListNode, list2 *ListNode) *ListNode {
	head := &ListNode{}
	current := head
	carry := 0

	for {
		if list1 == nil && list2 == nil {
			break
		}
		var val1, val2 int

		if list1 != nil {
			val1 = list1.Val
			list1 = list1.Next
		} else {
			val1 = 0
		}
		if list2 != nil {
			val2 = list2.Val
			list2 = list2.Next
		} else {
			val2 = 0
		}

		sum := val1 + val2 + carry
		carry = sum / 10

		current.Next = &ListNode{Val: sum % 10}
		current = current.Next

	}

    if carry != 0 {
        current.Next = &ListNode{Val: carry}
        current = current.Next
    }

	return head.Next

}