const express = require('express')
const app = express()

const path = require('path')

app.use((req, res, next)=>{
    if(req.method==="POST"){
        return res.status(403).send("Post requests are blocked")
    }
    next()
})

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'postBlock.html'))
})

app.post("/login", (req, res)=>{
    console.log("Post request entered");
    res.send("Post requests are blocked..")
})

app.listen(3002, ()=>console.log("Server connected.."))