var lengthOfLongestSubstring = function(s) {
    const mapper = {}
    let res = 0
    let slidingWindow = []

    for(let c of s) {
        if(mapper[c]) {
            const delIndex = slidingWindow.findIndex(_c => _c === c)
            for(let i = 0; i< delIndex;i++) {
                mapper[slidingWindow[i]] = false
            }

            slidingWindow = slidingWindow.slice(delIndex + 1).concat(c)
        } else {
            slidingWindow.push(c)
            if(slidingWindow.length > res) {
                res = slidingWindow.length
            }
        }
        mapper[c] = true
    }
    return res
}

// findIndex()  该方法返回一个测试条件(函数)符合条件的数组第一元素位置