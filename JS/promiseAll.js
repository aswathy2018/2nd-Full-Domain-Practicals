const p1 = Promise.resolve("Hiii")
const p2 = Promise.resolve("Hloii")
const p3 = Promise.reject("Deyyy")

Promise.all([p1, p2, p3])

.then((success)=>console.log(success))
.catch((error)=>console.log(error))