const fs = require("fs")

fs.readFile("WriteFile.txt", "utf8", function(error, data){
    console.log(data)
})