class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size===0
    }

    prepend(val){
        let node = new Node(val)

        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(val){
        let node = new Node(val)

        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head

            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    createCycle(pos){
        if(pos<0 || pos>=this.size){
            console.log("Cycling not possible");
        }

        let node = this.head
        let index = 0

        while(index<pos){
            node = node.next
            index++
        }

        let last = this.head

        while(last.next){
            last = last.next
        }
        last.next = node
    }

    hasCycle(){
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next

            if(slow==fast){
                return true
            }
        }
        return false
    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty..");
            return
        }

        let curr = this.head
        let str = ''

        while(curr){
            str+=`${curr.val} `
            curr = curr.next
        }
        return str
    }
}

let res = new Linkedlist()

let i=1
while(i<=5){
    res.append(i)
    i++
}

console.log(res.print());

console.log("List before cycling: ", res.hasCycle())
res.createCycle(1)
console.log("List after cycling: ", res.hasCycle());