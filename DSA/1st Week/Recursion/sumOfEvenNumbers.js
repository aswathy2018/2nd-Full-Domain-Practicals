function even(arr, index = 0){
    if(arr.length==index){
        return 0
    }

    return (arr[index]%2==0?arr[index]:0)+even(arr, index+1)
}

console.log(even([1,2,3,4,5,6]))