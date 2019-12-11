// 思路：先将所有的非零整数移动到数组前面，然后再把移动整数位置的数字置为零

var moveZeroes = function(nums) {
    let index = 0
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if(num !== 0) {
            nums[index++] = num
            nums[i] = 0
        }
    }
}