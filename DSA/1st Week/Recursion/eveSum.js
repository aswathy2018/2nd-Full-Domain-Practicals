function sum(arr, index=0){
    if(index==arr.length){
        return 0
    }

    return (arr[index]%2==0)?(arr[index]+sum(arr, index+1)):sum(arr, index+1)
}
console.log(sum([1,2,3,4,5,6,7,8,9,10]));