var swapPairs = function(head) {
    const dummy = new ListNode(0)
    dummy.next = head
    let current = dummy
    while(current.next != null && current.next.next != null) {
        // 初始化双指针
        const first = current.next
        const second = current.next.next

        // 更新双指针和current指针
        first.next = second.next
        second.next = first
        current.next = second

        current = current.next.next
    }
    return dummy.next
}