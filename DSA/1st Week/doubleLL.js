class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class LL{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size==0
    }

    prepend(val){
        let node = new Node(val)

        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append(val){
        let node = new Node(val)

        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }

    printF(){
        if(this.isEmpty()){
            return "List is empty.."
        }else{
            let curr = this.head
            let str = ""

            while(curr){
                str+=`${curr.val} `
                curr = curr.next
            }
            return str
        }
    }

    printB(){
        if(this.isEmpty()){
            return "List is empty.."
        }else{
            let curr = this.tail
            let str = ""

            while(curr){
                str+=`${curr.val} `
                curr = curr.prev
            }
            return str
        }
    }
}

let res = new LL()

let i=1
while(i<=10){
    res.append(i)
    i++
}

console.log(res.printF())