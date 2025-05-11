/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
    head := &ListNode{}
    current := head


    for {
        if list1 == nil || list2 == nil {
            break
        }

        if list1.Val < list2.Val {
            current.Next = list1
            list1 = list1.Next
        }else {
            current.Next = list2
            list2 = list2.Next
        }
        current = current.Next
    }

    if list1 != nil {
        current.Next = list1
    } else if list2 != nil {
        current.Next = list2
    }

    return head.Next
}