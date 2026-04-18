function rev(str){
    let stack = []

    for(let val of str){
        stack.push(val)
    }
    let reve = ''

    while(stack.length>0){
        reve+=stack.pop()
    }

    return reve
}

console.log(rev("Hello"));