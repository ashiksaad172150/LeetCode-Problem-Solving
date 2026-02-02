var runningSum=function(arr) {
    let i;
    for(i=1;i<arr.length;i++) {
        arr[i]=arr[i-1]+arr[i];
    }
    return arr;
}
