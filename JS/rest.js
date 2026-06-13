function sum(...nums){
    let total = 0

    for(let val of nums){
        total+=val
    }
    return total
}

console.log(sum(1,2,3,4,5))