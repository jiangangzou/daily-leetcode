// 异或性质
两个数字异或的结果是a^b是将a和b的二进制每一位进行运算，得出的数组，运算的逻辑是：如果同一位数字相同
则为0，不同则为1

// 任何数和本身异或则为0
// 任何数和0异或则是本身

var singleNumber = function(nums) {
    let res = 0
    for (let index = 0;index < nums.length;index++) {
        const element = nums[index]
        ret = ret ^ element
    }
    return ret
}
