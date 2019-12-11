var intersection = function(num1, num2) {
    const visited = {}
    const ret = []
    for(let i = 0;i < num1.length;i++) {
        const num = num1[i]

        visited[num] = num
    }
    for(let i =0;i < nums2.length;i++) {
        const num = num2[i]

        if(visited[num] !== undefined) {
            ret.push[num]
            visited[num] = undefined
        }
    }

    return ret
}