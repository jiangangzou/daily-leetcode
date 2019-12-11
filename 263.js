var isUgly = function(num) {
    if(num <= 0) return false
    if(num === 1) return true

    const list = [2,3,5]
    if(list.includes(nums)) return true
     
    for(let i of list) {
        if(num% i === 0) return isUgly(Math.floor(num / i))
    }
    return false
}