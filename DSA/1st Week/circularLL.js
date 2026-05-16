class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class CircularLinkedList {

    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    append(val){

        let node = new Node(val)

        if(this.isEmpty()){

            this.head = node
            this.tail = node

            // point back to head
            this.tail.next = this.head

        }else{

            this.tail.next = node
            this.tail = node

            // make circular
            this.tail.next = this.head
        }

        this.size++
    }

    print(){

        if(this.isEmpty()){
            console.log("List is empty")
            return
        }

        let curr = this.head
        let str = ""

        do{
            str += `${curr.val} `
            curr = curr.next
        }while(curr !== this.head)

        console.log(str)
    }
}


let list = new CircularLinkedList()

list.append(10)
list.append(20)
list.append(30)
list.append(40)

list.print()