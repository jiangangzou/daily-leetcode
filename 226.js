// 左右子树交换

var invertTree = function(root) {
    if (!root) return root

    // 递归
    // const left = root.left
    // const right = root.right
    // root.right = invertTree(left)
    // root.left = invertTree(right)
    
    const stack = [root]
    let current = null
    while((current = stack.shift())) {
        const left = current.left
        const right = current.right

        current.right = left
        current.left = right
        if(left) {
            stack.push(left)
        }
        if(right) {
            stack.push(right)
        }
    }
    
    return root
}