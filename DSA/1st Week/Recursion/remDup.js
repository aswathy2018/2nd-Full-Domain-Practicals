function rem(arr, index=0, res = [], ind = 0){
    if(index==arr.length){
        return res
    }

    if(ind==res.length){
        res.push(arr[index])
        return rem(arr, index+1, res, 0)
    }

    if(res[ind]==arr[index]){
        return rem(arr, index+1, res, 0)
    }
    return rem(arr, index, res, ind+1)
}
console.log(rem([1,2,3,4,5,6,7,7,6,5,4]));