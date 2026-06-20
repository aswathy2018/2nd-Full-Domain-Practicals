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
        let node = new Node()

        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(node, this.root)
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
                this.search(val, root.left)
            }else{
                this.search(val,root.right)
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

    preorder(node = this.rot){
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