// 暴力破解法

let max = 0
for(let i =0; i < height.length; i++) {
    for(let j = i; j < height.length; j++) {
        const currentArea = Math.abs( i -j) * Math.min(height[i], height[j])
        if(currentArea > max) {
            max = currentArea
        }
    }
    return max
}

// 双指针优化时间复杂度

var maxArea = function(height) {
    if(!height || height.length <= 1) return 0

    // 双指针进行优化
    let leftPos = 0
    let rightPos = height.length - 1
    let max = 0
    while(leftPos < rightPos) {
        const currentArea = Math.abs(leftPos - rightPos) * Math.min(height[leftPos], height[rightPos])
        if(currentArea > max) {
            max = currentArea
        }
        if(height[leftPos] < height[rightPos]) {
            leftPos++
        } else {
            rightPos--
        }
    }
    return max
}
