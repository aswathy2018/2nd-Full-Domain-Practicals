const express = require('express')
const app = express()

app.use((req, res, next)=>{
    console.log("Hii")
    next()
})

app.get('/', (req, res)=>{
    res.send("Hloo guyss")
})

app.get('/home', (req, res)=>{
    res.send("This is home page")
})

app.listen(3002, ()=>console.log("Server connected.."))