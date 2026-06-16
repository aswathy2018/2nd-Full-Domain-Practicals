function nonRep(arr, index = 0){
    if(index==arr.length){
        return []
    }

    let count = 0

    function counting(i=0){
        if(i==arr.length){
            return
        }

        if(arr[i]==arr[index]){
            count++
        }

        counting(i+1)
    }
    counting()

    let res = nonRep(arr, index+1)

    if(count==1){
        res.unshift(arr[index])
    }
    return res
}

console.log(nonRep([1,2,3,4,5,6,6,5,4]))