let express = require('express')
let fs = require('fs')
let app = express()

let data = ''

for(let i=1 ; i<=1000 ; i++){
    data+=i+"\n"
}

fs.writeFile('FileWrite.txt', data, (err)=>{
    if(err){
        console.log("Error while writing the data")
    }else{
        console.log("Writed successfullyy")
    }
})

app.get('/home', (req, res)=>{
    fs.rename("FileWrite.txt", "Numberr.txt", (err)=>{
        if(err){
            res.send("Error occured while renaming")
        }else{
            res.send("Renamed successfully..")
        }
    })
})

app.listen(3002, ()=>console.log("Server connected.."))