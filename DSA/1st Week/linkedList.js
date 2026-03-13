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
            this.node = this.head
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
        }
        this.size++
    }


}