function fib(n){
    if(n<=1){
        return n
    }

    return fib(n-1)+fib(n-2)
}

function printing(n, index=0){
    if(index===n){
        return
    }

    console.log(fib(index))
    printing(n, index+1)
}

printing(9)