function isPrime(num){
    if(num<=1){
        return false
    }

    for(let i=2 ; i<Math.sqrt(num) ; i++){
        if(num%i==0){
            return false
        }
    }
    return true
}

function sum(arr){
    let res = 0

    for(let i=0 ; i<arr.length ; i++){
        if(isPrime(arr[i])){
            res+=arr[i]
        }
    }
    return res
}

console.log(sum([1,2,3,4,5,6,7,8,9,10]))