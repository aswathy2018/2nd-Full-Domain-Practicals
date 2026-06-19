class Heap{
    constructor(){
        this.heap = []
    }

    insert(val){
        this.heap.push(val)
        this.bubbleup(this.heap.length-1)
    }

    bubbleup(index){
        while(index>0){
            let parent = Math.floor((index-1)/2)

            if(this.heap[parent]>=this.heap[index]){
                break
            }

            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            index = parent
        }
    }

    deleteroot(){
        if(this.heap.length==0){
            return null
        }

        if(this.heap.length==1){
            return this.heap.pop()
        }

        let root = this.heap[0]

        this.heap[0] = this.heap.pop()

        this.heapify(0)
        return root
    }

    heapify(index){
        while(true){
            let largest = index
            let left = 2*index+1
            let right = 2*index+2

            if(left<this.heap.length && this.heap[left]>this.heap[largest]){
                largest=left
            }

            if(right<this.heap.length && this.heap[right]>this.heap[largest]){
                largest = right
            }

            if(largest==index){
                break
            }

            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]]

            index = largest
        }
    }

    print(){
        console.log(this.heap)
    }
}

let no = new Heap()


no.insert(11)
no.insert(32)
no.insert(4)
no.insert(7)
no.insert(57)
no.insert(12)

console.log("Before deleting: ");
no.print()


console.log("Root: ", no.deleteroot())
console.log("After deleting: ");
no.print()