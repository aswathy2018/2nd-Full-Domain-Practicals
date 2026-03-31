const express = require("express")
const app = express()

app.get('/', (req, res)=>{
    res.send("Hii guyss..")
})

app.get('/demo', (req, res)=>{
    res.send(`I'm ${req.query.data}. and I'm from Thrissur`)
})

app.listen(3002, ()=>console.log("Server connected.."))