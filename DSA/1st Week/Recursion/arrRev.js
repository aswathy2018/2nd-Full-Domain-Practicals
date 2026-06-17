function rev(arr, index = arr.length-1, res=[]){
    if(index<0){
        return res
    }

    res.push(arr[index])
    return rev(arr, index-1, res)
}
console.log(rev([1,2,3,4,5,6]));