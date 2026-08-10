let arr = [4,8,5,7,22,9,3]
let first = -Infinity
let second = -Infinity

for(let i=0 ; i<arr.length ; i++){
    if(arr[i]>first){
        first = arr[i]
    }
}

for(let j=0 ; j<arr.length ; j++){
    if(arr[j]<first && arr[j]>second){
        second = arr[j]
    }
}

console.log(second)