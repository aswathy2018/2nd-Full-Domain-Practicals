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
            return "Empty"
        }
        return this.item[this.item.length-1]
    }

    print(){
        console.log(this.item)
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

let st = new Stack();

st.push(3);
st.push(1);
st.push(8);
st.push(2);
st.push(6);

console.log("Before Sorting");
st.print();

st.sort()
console.log("After sorting");
st.print()
