const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    throw new Error("An error occured..")
})

app.use((error, req, res, next)=>{
    console.log(error.stack)
    res.status(404).send("Not found")
})

app.listen(3002,()=>console.log("Loading.."))