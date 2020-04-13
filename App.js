const express = require('express');
const app = express();
const path = require('path');

let hostName = '127.0.0.1';
let port = 3000;

// get static files load
app.use('/static', express.static('public'));

// get html file
app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(port,hostName,() =>{
    console.log(`server is started at http://${hostName}:${port}`);
});