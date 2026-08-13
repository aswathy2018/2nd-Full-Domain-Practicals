const fs = require('fs')

fs.writeFile('write.txt', "This is the output of fs.writeFile..", function(error){
    if(error){
        console.log("Unable to load..")
    }
})