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
    
    append(val){
        let node = new Node(val)
        
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            
            while(prev.next){
                prev=  prev.next
            }
            prev.next = node
        }
        this.size++
    }

    mid(){
        if(this.isEmpty()){
            return "List is empty"
        }

        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow.val
    }

    rem(){
        if(this.isEmpty()){
            return "List is empty"
        }

        if(this.head.next==null){
            this.head = null
            return
        }

        let prev = null
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = slow.next
    }
    
    display(){
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

let i=1
while(i<10){
    val.append(i)
    i++
}
val.rem()
console.log(val.display())