const p1 = new Promise((resolve, reject)=>setTimeout(reject, 700, "This is rejected"))
const p2 = new Promise((resolve, reject)=>setTimeout(resolve, 200, "This one is resolved"))
const p3 = new Promise((resolve, reject)=>setTimeout(reject, 100, "This one is first rejected.."))

Promise.race([p1, p2, p3])

.then((resolve)=>console.log(resolve))
.catch((reject)=>console.log(reject))