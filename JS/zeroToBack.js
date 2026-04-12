let arr = [1,2,0,3,6,0,5,9,9,0,0,6];

let j = 0
for(let i=0 ; i<arr.length ; i++){
    if(arr[i]!==0){
    arr[j] = arr[i]
    j++
    }
}

for(let i=j ; i<arr.length ; i++){
    arr[i] = 0
}

console.log(arr);