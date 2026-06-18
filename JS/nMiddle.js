function mid(arr, n){
    let midd = Math.floor((arr.length-n)/2)
    let narr = []

    for(let i=midd ; i<midd+n ; i++){
        narr.push(arr[i])
    }
    return narr
}
console.log(mid([1,2,3,4,5,6,7,8,9], 5));