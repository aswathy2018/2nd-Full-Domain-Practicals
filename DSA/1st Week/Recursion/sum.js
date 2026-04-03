function sum(arr, index = 0){
    if(arr.length==index){
        return 0
    }

    return sum(arr, index+1)+arr[index]
}

console.log(sum([1,2,3,4,5]))