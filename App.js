const express = require('express');
const app = express();
const path = require('path');

const hostName = '127.0.0.3';
const port = 3000;

// get static files load
app.use('/public', express.static('public'));

// get html file
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'views','index.html'));
});
app.get('/404',(req,res) =>{
    res.sendFile(path.join(__dirname,'views','notfound.html'));
});

app.listen(port,hostName,() =>{
    console.log(`server is started at http://${hostName}:${port}`);
});