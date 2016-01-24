function split(arr) {
    var len = arr.length;
    var half = len / 2 + len % 2;
    return [arr.slice(0,half), arr.slice(half)]
}

function merge(arr1, arr2) {
    var resultArr = [];
    
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            resultArr.push(arr1.shift());
        }
        else {
            resultArr.push(arr2.shift());
        }
    } 
    
    if (arr1.length) resultArr = resultArr.concat(arr1);
    if (arr2.length) resultArr = resultArr.concat(arr2);
     
    return resultArr;
    
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    var splitArr = split(arr);
    return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
    
}