function merge(arr){
    if(arr.length<2){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return sort(merge(left), merge(right))
}

function sort(left, right){
    let res = []

    while(left.length && right.length){
        if(left[0]<right[0]){
            res.push(left.shift())
        }else{
            res.push(right.shift())
        }
    }

    return [...res, ...left, ...right]
}

console.log(merge([6,3,5,1,9]));