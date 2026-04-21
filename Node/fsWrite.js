const fs = require('fs')

fs.writeFile("WriteFile.txt", "Hii.. My name is Aswathy..", function (error){
    if(error){
        console.log("Error occured")
    }
})