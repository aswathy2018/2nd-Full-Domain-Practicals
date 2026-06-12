let arr = [3,2,5,7,4,5,2,6,7,8]

let obj = {}
for(let val of arr){
    obj[val] = (obj[val] || 0)+1
}

let min = Infinity

for(let val in obj){
    if(obj[val]<min){
        min=obj[val]
    }
}

let res = []

for(let val in obj){
    if(obj[val]===min){
        res.push(Number(val))
    }
}

console.log(res)