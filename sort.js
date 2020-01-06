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