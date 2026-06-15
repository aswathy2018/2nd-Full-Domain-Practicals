let p1 = new Promise((resolve, reject)=>setTimeout(resolve, 400, "Second resolved one.."))
let p2 = new Promise((resolve, reject)=>setTimeout(resolve, 200, "First resolved.."))
let p3 = new Promise((resolve, reject)=>setTimeout(reject, 100, "Rejected.."))

Promise.allSettled([p1, p2, p3])

.then((resolve)=>console.log(resolve))
.catch((reject)=>console.log(reject))