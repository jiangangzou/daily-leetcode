var removeDuplicates = function(nums) {
    const size = nums.length
    let slowP = 0
    for(let fastP = 0; fastP < size;fastP++) {
        if(nums[fastP] !== nums[slowP]) {
            slowP++
            nums[slowP] = nums[fastP]
        }
    }
    return slowP + 1
}

// 排序去重的话
// 1、双指针
// 2. 有序数组
