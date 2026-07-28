class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
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

    rev(){
        let prev = null
        let curr = this.head

        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty..")
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

let res = new LinkedList()

let i=1

while(i<10){
    res.append(i)
    i++
}

console.log(res.print())
res.rev()
console.log("After reverse: ", res.print())