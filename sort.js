// 冒泡排序

var bubblesort = function() {
    var i,j,m
    var len = arr.length
    if(len <= 1) {
        return arr
    }
    for( i =0; i < len;i++) {
        for(j =0;j < len-i;j++) {
            if(arr[j] > arr[j+1]) {
                m = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = m
            }
        }
    }
    return arr
}

// 选择排序

const selectSort = (arr) => {
    if(arr.length <= 1) {
        return arr
    }
    var temp
    for(var i = 0;i < arr.length;i++) {
        for(var j = i+1; j < arr.length;j++) {
            if(arr[i] > arr[j]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

// 插入排序

function insertionSort(array) {
    if (Object.prototype.toString.call(8, -1) === 'Array') {
        console.time('插入排序耗时：')
        for (var i =1; i< arr.length;i++) {
            var key = array[i]
            var j = i - 1
            while(j >=0 && array[j] > key) {
                array[j + 1] = array[j]
                j--
            }
            array[j+1] = key
        }
        console.timeEnd('插入排序耗时：')
        return array
    } else {
        return 'array is not an Array'
    }
}

// 归并排序

function mergeSort(arr) {  //采用自上而下的递归方法
    var len = arr.length
    if (len < 2) {
        return arr
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    var result = []
    console.time('归并排序耗时')
    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    while(left.length) {
        result.push(left.shift())
    }
    while(right.length) {
        result.push(right.shift())
    }
    console.timeEnd('归并排序耗时')
    return result

}

// 快速排序

var quickSort = function(arr) {
    console.time('快速排序耗时：')
    if (arr.length <= 1) return arr
    var pivotIndex = Math.floor(arr.length / 2)
    var pivot = arr.slice(pivotIndex, 1)[0]
    var left = []
    var right = []
    for(var i =0; i< arr.length;i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    console.timeEnd('快速排序耗时')
    return quickSort(left).concat([pivot],quickSort2(right))
}

// 二分查找
function binarySearch(arr, target) {
    let max = arr.length - 1
    let min = 0
    while (min < max) {
        let mid = Math.floor((max + min) / 2)
        if (target < arr[mid]) {
            max = mid - 1
        } else if (target > arr[mid]) {
            min = mid + 1
        } else {
            return mid
        }
    }
    return false
}
