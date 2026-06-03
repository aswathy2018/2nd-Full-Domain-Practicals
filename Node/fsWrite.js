const fs = require('fs')

fs.writeFile('write.txt', "This is the output of fs.writeFile.. got it??", function(error){
    if(error){
        console.log("Unable to load..")
    }
})