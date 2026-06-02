class Stack{
    constructor(){
        this.item = []
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
            return "Empty stack"
        }
        return this.item[this.item.length-1]
    }

    display(){
        console.log(this.item);
    }

    sort(){
        let tempStack = new Stack()

        while(!this.isEmpty()){
            let temp = this.pop()

            while(!tempStack.isEmpty() && tempStack.peek()>temp){
                this.push(tempStack.pop())
            }
            tempStack.push(temp)
        }
        this.item = tempStack.item
    }
}

let stack = new Stack();

stack.push(34);
stack.push(3);
stack.push(31);
stack.push(98);
stack.push(92);
stack.push(23);

console.log("Before sorting:");
stack.display();

stack.sort();

console.log("After sorting:");
stack.display();