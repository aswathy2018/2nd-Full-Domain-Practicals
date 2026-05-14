class Node {
    constructor(value){
        this.value = value;
        this.child = [];
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    addChild(parentV, childV){
        const node = new Node(childV);

        if(this.isEmpty()){
            this.root = node;
            return;
        }

        const parent = this.find(this.root, parentV);

        if(parent){
            parent.child.push(node);
        } else {
            console.log("Parent not found");
        }
    }

    find(node, val){
        if(node.value === val){
            return node;
        }

        for(let c of node.child){
            const found = this.find(c, val);
            if(found){
                return found;
            }
        }

        return null;
    }

    isFull(node = this.root){
        if(!node) return true;

        if(node.child.length === 0){
            return true;
        }

        if(node.child.length !== 2){
            return false;
        }

        for(let c of node.child){
            if(!this.isFull(c)){
                return false;
            }
        }

        return true;
    }
}

const tree = new Tree();

tree.addChild(null, 1);
tree.addChild();
tree.addChild(1, 3);
tree.addChild(2, 4);
tree.addChild(2, 5);
tree.addChild(3, 6);
tree.addChild(3, 7);

console.log(tree.isFull());