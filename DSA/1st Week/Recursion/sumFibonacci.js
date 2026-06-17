function fib(n){
    if(n<=1){
        return n
    }

    return fib(n-1)+fib(n-2)
}

function sum(n){
    if(n==0){
        return 0
    }

    return fib(n-1)+sum(n-1)
}

console.log(sum(8))