const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send("Hii it's home..")
})

app.use((req, res, next)=>{
    let error = new Error("Page not found")
    error.status = 404
    next(error)
})

app.use((err, req, res, next) =>{
    res.status(err.status || 500).json({
        success: false,
        message: err.message
    })
})

app.listen(3002, ()=>console.log("Server connected.."))