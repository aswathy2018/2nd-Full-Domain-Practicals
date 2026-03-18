function unique(arr){
    let uni = []

    for(let i=0 ; i<arr.length ; i++){
        let isUnique = true
        for(let j=0 ; j<arr.length ; j++){
            if(arr[i]==uni[j]){
                isUnique = false
                break
            }
        }
        if(isUnique){
            uni.push(arr[i])
        }
    }
    return uni
}

console.log(unique([2,5,1,4,6,5,8,2]))