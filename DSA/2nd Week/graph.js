class Graph{
    constructor(){
        this.graph = {}
    }

    add(v){
        if(!this.graph[v]){
            this.graph[v] = []
        }
    }

    addE(v, w){
        if(!this.graph[v]){
            this.add(v)
        }

        if(!this.graph[w]){
            this.add(w)
        }

        this.graph[v].push(w)
        this.graph[w].push(v)
    }

    BFS(start){
        let queue = [start]
        let visited = [start]
        let res = []

        while(queue.length){
            let curr = queue.shift()

            res.push(curr)

            this.graph[curr].forEach(n => {
                if(!visited.includes(n)){
                    queue.push(n)
                    visited.push(n)
                }
            });
        }
        return res
    }

    DFS(start){
        let stack = [start]
        let visited = [start]
        let res = []

        while(stack.length){
            let curr = stack.pop()

            res.push(curr)

            this.graph[curr].forEach(n=>{
                if(!visited.includes(n)){
                    stack.push(n)
                    visited.push(n)
                }
            })
        }
        return res
    }
}

let val = new Graph()

val.addE("a", "b")
val.addE("c", "d")
val.addE("f", "g")
val.addE("h", "i")
val.addE("j", "k")

console.log("Graph: ", val.graph);
console.log("BFS: ", val.BFS("a"));
console.log("DFS", val.DFS("h"));