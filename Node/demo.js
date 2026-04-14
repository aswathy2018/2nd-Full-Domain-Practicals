const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send("Home page")
    
    let val = req.query.id

    if(!res){
        res.status(404).send("Not found")

        let 
    }
})

app.listen(3002, ()=>console.log("Server connected.."))