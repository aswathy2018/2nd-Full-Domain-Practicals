class stack{
    constructor(){
        this.item = new Array()
    }
    
    isEmpty(){
        return this.item.length==0
    }
    
    push(val){
        this.item.push(val)
    }
    
    pop(){
        if(this.isEmpty()){
            return "Under flow"
        }
        return this.item.pop()
    }
    
    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.item[this.item.length-1]
    }
    
    display(){
        console.log(this.item)
    }
}

class queue{
    constructor(){
        this.s1 = new stack()
        this.s2 = new stack()
    }
    
    enqueue(val){
        
        while(!this.s1.isEmpty()){
            this.s2.push(this.s1.pop())
        }
        this.s1.push(val)
        
        while(!this.s2.isEmpty()){
            this.s1.push(this.s2.pop())
        }
    }
    
    dequeue(){
        if(this.s1.isEmpty()){
            return "Under flow"
        }
        
        return this.s1.pop()
    }
    
    front(){
        if(this.s1.isEmpty()){
            return null
        }
        return this.s1.peek()
    }
    
    print(){
        this.s1.display()
    }
}

let res = new queue()

let i=1
while(i<=10){
    res.enqueue(i)
    i++
}
res.print()
console.log(res.dequeue())
console.log(res.front())
res.print()