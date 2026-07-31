class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class ll{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size==0
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

    isCycle(){
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
            return "List is empty"
        }

        let curr = this.head
        let str = ""

        while(curr){
            str+=`${curr.val} `
            curr = curr.next
        }
        return str
    }
}

let res = new ll()

let i=1

while(i<=10){
    res.prepend(i)
    i++
}

console.log(res.print());
// console.log(res.isCycle());


// Setting it as a cycle
let last = res.head

while(last.next){
    last = last.next
}

last.next = res.head

console.log(res.isCycle())