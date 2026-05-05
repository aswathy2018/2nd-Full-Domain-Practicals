const http = require('http')

const server = http.createServer((req, res)=>{
    res.end("Hii..")
})

server.listen(3001, ()=>console.log("Server connected.."))