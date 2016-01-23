var bubbleSort = function(arr){
    var iAmSorted, greater;
    if (arr.length<2){
        return arr;
    }
    for (var j=1; j<arr.length;j++){
        iAmSorted = true;
        for (i=0;i<arr.length-j;i++){
            if (arr[i+1]<arr[i]){
                greater = arr[i];
                arr[i]= arr[i+1];
                arr[i+1]=greater;
                iAmSorted = false;
            }
        }
        if (iAmSorted){
            return arr
        }
    }
    return arr;
}