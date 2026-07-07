const {Worker} = require("worker_threads")

console.log("Started..")

const worker = new Worker("./worker.js")

worker.on("message", (result)=>{
    console.log("Sum is ", result)
})

console.log("continues..");