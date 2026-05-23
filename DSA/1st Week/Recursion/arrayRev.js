function reverse(arr, rev = [], index = arr.length-1){
    if(index<0){
        return rev
    }
    rev.push(arr[index])

    return reverse(arr, rev, index-1)
}

console.log(reverse([1,2,3,4,5]))