let arr = [1,2,3,4,5,6,7,2,4,4,6]

for(let i=0 ; i<arr.length ; i++){
    if(arr[i]%2==0){
        for(let j=i+1 ; j<arr.length ; j++){
            if(arr[i]==arr[j]){
                for(let k=j ; k<arr.length-1 ; k++){
                    arr[k] = arr[k+1]
                }
                arr.length--
                j--
            }
        }
    }
}

console.log(arr)