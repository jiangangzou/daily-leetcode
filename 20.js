var isValid = function(s) {
    let valid = true
    const stack = []
    const mapper = {
        '{': "}",
        '[': "]",
        '(': ")"
    }
    for (let i in s) {
        const v = s[i]
        if(['(','{','['].indexOf(v) > -1) {
            stack.push(v)
        } else {
            const peak = stack.pop()
            if(v !== mapper[peak]) {
                return false
            }
        }
    }
    if(stack.length > 0) return false
    return valid
}

// 运用栈的数据特点


var isValid = function(s) {
    let vaild = true
    const stack = []
    const mapper = {
        '{': "}",
        '[': "]",
        '(': ")"
    }
    for (let i in s) {
        const v = s[i]
        if(['(','{','['].indexOf(v) > -1) {
            stack.push(v)
        } else {
            const peak = stack.pop()
            if(v !== mapper(peak)) {
                return false
            }
        }
    }
    if (stack.length > 0) return false
    return vaild
}