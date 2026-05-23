class Stack{
    constructor(){
        this.item = []
    }
    
    isEmpty(){
        return this.item.length===0
    }
    
    push(val){
        this.item.push(val)
    }
    
    pop(){
        if(this.isEmpty()){
            return "under flow"
        }
        
        return this.item.pop()
    }
    
    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.item[this.item.length-1]
    }
    
    print(){
        console.log(this.item)
    }
    
    sort(){
        for(let i=0 ; i<this.item.length ; i++){
            for(let j=0 ; j<this.item.length-1-i ; j++){
                if(this.item[j]>this.item[j+1]){
                    let temp = this.item[j]
                    this.item[j] = this.item[j+1]
                    this.item[j+1] = temp
                }
            }
        }
    }
}

let res = new Stack()

res.push(3)
res.push(1)
res.push(8)
res.push(2)
res.push(6)

console.log("Befor sorting")
res.print()


res.sort()
console.log("After sorting")
res.print()