// 10 → 20 → 30 → 40 ------------- to ------------- 40 → 10 → 20 → 30

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class LL{
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

    swapped(){
        if(this.isEmpty()){
            return "Empty list"
        }

        let last = this.head
        let prev = null;

        while(last.next!==null){
            prev = last
            last = last.next
        }

        prev.next = null

        prev = this.head
        last.next = this.head
        this.head = last

    }

    print(){
        if(this.isEmpty()){
            return "List is empty"
        }else{
            let curr = this.head
            let str = ''

            while(curr){
                str+=`${curr.val} `
                curr = curr.next
            }
            return str
        }
    }
}

let val = new LL()

val.prepend(40)
val.prepend(30)
val.prepend(20)
val.prepend(10)

console.log(val.print());
val.swapped()
console.log(val.print());