const express = require('express')
const app = express()

const router = express.Router()

router.use((req, res, next)=>{
    console.log("Hiii")
    next()
})

router.get("/", (req, res)=>{
    res.send("Router get loaded..")
})

router.get('/home',(req, res)=>{
    res.send("Home router gotted..")
})

app.use('/all', router)

app.listen(3002, ()=>console.log("server created.."))