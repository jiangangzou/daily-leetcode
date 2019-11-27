var containsNearbyDuplicate = function(nums,k) {
    const visited = {}
    for(let  i= 0; i < nums.length; i++) {
        const num = nums[i]
        if(visited[num] !== undefined && i -visited[num] <= k) {
            return true
        }
        visited[num] = i
    }
    return false
}