console.log("Child process started..");

process.on('message', (msg)=>{
    console.log("Message from parent: ", msg);

    process.send("Hii Parent..")
})