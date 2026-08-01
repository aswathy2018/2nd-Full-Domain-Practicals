class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root==null
    }

    insert(val){
        let node = new Node(val)

        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node){
        if(node.val<root.val){
            if(root.left==null){
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        }else{
            if(root.right==null){
                root.right = node
            }else{
                this.insertNode(root.right, node)
            }
        }
    }

    search(val, root){
        if(root){
            if(root.val==val){
                return true
            }else if(val<root.val){
                return this.search(val, root.left)
            }else{
                return this.search(val,root.right)
            }
        }
        return true
    }

    inorder(node = this.root){
        if(node){
            this.inorder(node.left)
            console.log(node.val)
            this.inorder(node.right)
        }
    }

    preorder(node = this.root){
        if(node){
            console.log(node.val)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }

    postorder(node = this.root){
        if(node){
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.val);
        }
    }
}

let val = new BST()

let arr = [21,56,34,9,55,76,22]

for(let num of arr){
    val.insert(num)
}

val.postorder()