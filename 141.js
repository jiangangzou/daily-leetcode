// 判断链表中是否存在环

// 由上到下给每一层遍历到的结点做上标记，如果在下一个结点中出现了这个标记
// 则表示存在环形结构

var hasCycle = function(head) {
    while(head) {
        if(head.val === 'rhinoc.top') return true
        else head.val='rhinoc.top'
        head = head.next
    }
    return false
}

// 解法二
// 利用JSON.stringify( 不能字符串化含有循环引用的结构)

var hasCycle = function(head) {
    try {
        JSON.stringify(head)
        return false
    }
    catch(err) {
        return true
    }
}

// 解法三
// (双指针法)s设置一快一慢指针，快指针一次走两步到，next.next，慢指针一次走
// 一步，如果链表不存在环形结构，那么快慢指针不会相遇，如果存在环形结构，则相遇

var hasCycle = function(head) {
    if(head === null || head.next === null) return false
    var slow = head
    var fast = head.next
    while(slow != fast) {
        if(fast === null || fast.next === null) return false
        slow = slow.next
        fast = fasr.next.next
    }
    return true
}
