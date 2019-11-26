// 链表
// 数组的缺点  数组大小是固定的，因此移除或是添加一项数据成本很高
// 链表 每个元素由元素本身数据和指向下一个元素的指针构成，所以添加或是移除某一个元素不需要对链表整体进行操作
//    只需要改变相关元素的指针指向就可以了

var removeElements = function(head, val) {
    const dummy = {
        next: head
    }
    let current = dummy

    while(current && current.next) {
        let next = current.next
        if (next.val === val) {
            current.next = next.next
            next = next.next
        }

        if(!next || next.val !== val) {
            current = next
        }
    }

    return dummy.next
}