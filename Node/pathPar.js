// uses slash(/)


const express=require("express")
const app=express()

app.get('/:name',(req,res)=>{
    const name = req.params.name
    res.send(`my name ${name}`)
})

app.listen(3004, ()=>console.log("Server.."))