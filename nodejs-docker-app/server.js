const express = require('express');

const PORT = 8080;

//APP 
const app = express();
app.get('/', (req,res) => {
    res.send("Hello World in Node.js!!")
});

app.listen(PORT);
console.log("node.js server is running")