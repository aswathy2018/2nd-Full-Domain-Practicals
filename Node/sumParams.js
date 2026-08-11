//////////////// http://localhost:3002/10?b=2

let expres = require('express')
let app = expres()

app.get('/:a', (req, res)=>{
    let a = Number(req.params.a)
    let b = Number(req.query.b)
    let sum = a+b

    res.send(`Sum is: ${sum}`)
})

app.listen(3002, ()=>console.log("Server connected.."))