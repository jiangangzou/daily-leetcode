// 方法一
var middleNode = function(head) {
    let A = [head]
    while(A[A.length - 1].next != null) 
        A.push(A[A.length - 1].next)
    return A[Math.trunc(A.length / 2)]
}

// 方法二
// 当用慢指针slow遍历列表时，让另一个指针fast指针的速度是它的两倍
// 当fast到达列表末尾的时候，slow必然位于中间
var middleNode = function(head) {
    slow = fast = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}