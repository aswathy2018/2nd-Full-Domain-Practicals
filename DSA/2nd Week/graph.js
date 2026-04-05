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
        }
    }
}