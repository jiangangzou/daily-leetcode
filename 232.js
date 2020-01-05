//使用栈模拟队列

// 栈只能操作一端
// 队列是队首出栈，队尾入栈

var MyQueue = function() {
    this.stack = []
    this.helperStack = []
}
MyQueue.prototype.push = function(x) {
    let cur = null
    while ((cur = this.stack.pop())) {
        this.helperStack.push(cur)
    }
    this.helperStack.push(s)

    while((cur = this.helperStack.pop())) {
        this.stack.push(cur)
    }
}

MyQueue.prototype.pop = function() {
    return this.stack.pop()
}

MyQueue.prototype.empty = function() {
    return this.stack.length === 0
}

MyQueue.prototype.peek = function() {
    return  this.stack[this.stack.length - 1]
}

var MyQueue = function() {
    this.stack = []
    this.helperStack = []
}
MyQueue.prototype.push = function(x) {
    let cur = null
    while ((cur = this.stack.pop())) {
        this.helperStack.push(cur)
    }
    this.helperStack.push(x)

    while((cur = this.helperStack.pop())) {
        this.stack.push(cur)
    }
}

MyQueue.prototype.pop = function() {
    return this.stack.pop()
}

MyQueue.prototype.empty = function() {
    return this.stack.length === 0
}



