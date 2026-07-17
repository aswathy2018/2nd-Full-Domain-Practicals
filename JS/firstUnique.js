let str="google"
let freq = {}

for(let val of str){
    freq[val] = (freq[val] || 0)+1
}

let res = []
for(let val in freq){
    if(freq[val]==1){
        console.log(val)
        break
    }
}