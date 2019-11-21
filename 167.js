var twoSum = function(numbers, target) {
    const visited = {}

    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index]
        if(visited[target - element] !== void 0) {
            return [visited[target - element], index+1 ]
        }
        visited[element] = index + 1
    }
    return []
}