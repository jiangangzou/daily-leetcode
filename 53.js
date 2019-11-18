// [-2,1,-3,4,-1,2,1,-5,4]

// 前缀和加暴力
function LSS(list) {
    const len = list.length
    let max = Number.MAX_VALUE
    let sum = 0
    for(let i =0;i <len;i++) {
        sum = 0
        for(let j =i;j < len; j++) {
            sum += list[j]
            if(sum > max) {
                max = sum
            }
        }
    }
    return max
}

// 优化前缀和

function LSS(list) {
    const len = list.length
    let max = list[0]
    let min = 0
    let sum = 0
    for(let i =0;i < len;i++) {
        sum += list[i]
        if(sum -min > max) {
            max = sum - min
        }
        if(sum < min) {
            min = sum
        }
    }
    return max
}