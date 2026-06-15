let p1 = new Promise((resolve, reject)=>setTimeout(reject, 200, "It's rejected"))
let p2 = new Promise((resolve, reject)=>setTimeout(resolve, 500, "It's first one.."))
let p3 = new Promise((resolve, reject)=>setTimeout(resolve, 300, "Second one.."))

Promise.any([p1, p2, p3])
.then((resolve)=>console.log(resolve))
.catch((reject)=>console.log(reject))