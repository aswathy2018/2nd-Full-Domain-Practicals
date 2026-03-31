const http = require('http')

const server = http.createServer((req, res)=>{
    res.end("Hiiiiiiiii")
})

server.listen(3001, ()=>console.log("Server connected.."))