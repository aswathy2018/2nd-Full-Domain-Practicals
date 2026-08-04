function prime(num, i=2){
    if(num<2){
        return false
    }

    if(i*i>num){
        return true
    }

    if(num%i==0){
        return false
    }

    return prime(num, i+1)
}

function summ(n){
    if(n<2){
        return 0
    }

    if(prime(n)){
        return n+summ(n-1)
    }

    return summ(n-1)
}

console.log(summ(10))