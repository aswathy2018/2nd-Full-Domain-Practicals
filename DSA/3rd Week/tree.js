class Node{
    constructor(val){
        this.val = val
        this.child = []
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root==null
    }

    addChild(parentV, childV){
        const node = new Node(childV)

        if(this.isEmpty()){
            this.root = node
            return   
        }

        const parent = this.find(this.root, parentV)

        if(parent){
            parent.child.push(node)
        }else{
            console.log("Parent not found");
        }
    }

    find(node, val){
        if(node.val==val){
            return node
        }

        for(let c of node.child){
            const found = this.found(c, val)

            if(found){
                return found
            }
        }
        return null
    }

    bfs() {
        if (this.isEmpty()) {
            return
        }

        let queue = [this.root]

        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.val)
            for (let c of curr.child) {
                queue.push(c)
            }
        }
    }

    dfs(node = this.root){
        if(node===null){
            return
        }

        console.log(node.val);

        for(let c of node.child){
            this.dfs(c)
        }
    }
}

const tree = new Tree()

tree.addChild(null, "A")   // Root

tree.addChild("A", "B")
tree.addChild("A", "C")
tree.addChild("A", "D")

tree.addChild("B", "E")
tree.addChild("B", "F")

tree.addChild("C", "G")

tree.addChild("D", "H")
tree.addChild("H", "I")