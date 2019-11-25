// 动态规划问题

// 判断标准就是总价值哪个更大
// 当前房子抢  当前房子可以抢的价值 + dp[i - 2]

// 如果不能抢 价值为 dp[i - 1]

// 状态转移方程 dp[i] = Math.max(dp[i -2] + nums[i -2], dp[i-1])

var rob = function(nums) {
    const dp = []
    dp[0] = 0
    dp[1] = 0

    for(let i = 2; i < nums.length + 2; i++) {
        dp[i] = Math.max(dp[i -2] + nums[i -2], dp[i -1])
    }
    return  dp[nums.length + 1]
}