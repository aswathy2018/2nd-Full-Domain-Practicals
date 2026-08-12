let stack = []

function asc(val){
    let temp = []

    while(stack.length>0 && stack[stack.length-1]<val){
        temp.push(stack.pop())
    }
    stack.push(val)

    while(temp.length>0){
        stack.push(temp.pop())
    }
}

asc(10)
asc(7)
asc(8)
asc(1)
console.log(stack)



