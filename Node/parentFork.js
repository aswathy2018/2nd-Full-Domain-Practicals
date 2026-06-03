const {fork} = require('child_process')

console.log("Parent started working..");

const child = fork('./childFork.js')

child.send("Helloo Child..")

child.on('message', (msg)=>{
    console.log("Message from child: ", msg);
})