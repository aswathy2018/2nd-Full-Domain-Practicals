const express = require('express')
const app = express()
const path = require('path');

app.get('/', (req, res) => {
    res.send("This is home page..")
})

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(3002, ()=>console.log("Server connected.."))