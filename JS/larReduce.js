let arr = [4,7,1,3,9,3,2,5]

let res = arr.reduce((acc, val)=> {
    return val>acc?val:acc
})

console.log(res);