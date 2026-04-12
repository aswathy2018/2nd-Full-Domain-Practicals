let arr = [1,2,0,3,6,0,5,9,9,0,0,6];

let j = arr.length-1
for(let i=j ; i>=0 ; i--){
    if(arr[i]!==0){
    arr[j] = arr[i]
    j--
    }
}

for(let i=j ; i>=0 ; i--){
    arr[i] = 0
}

console.log(arr);