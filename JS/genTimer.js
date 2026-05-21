function *timer(){
    console.log("Timer starts")
    yield "Paused"

    console.log("Resume")

    yield "Pause again"
    console.log("Finished")
}

let res = timer()

console.log(res.next().value)

setTimeout(()=>{
    console.log(res.next().value)

    setTimeout(()=>{
        res.next()
    }, 2000)
}, 2000)