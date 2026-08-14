let arr = [1, [2, [3, [9], 4]], 5]

function flatten(arr, index = 0, res = []){
    if(index>=arr.length){
        return res
    }

    if(!Array.isArray(arr[index])){
        res.push(arr[index])
    }else{
        flatten(arr[index], 0, res)
    }

    return flatten(arr, index+1, res)
}

console.log(flatten(arr))