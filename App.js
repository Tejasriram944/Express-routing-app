const express = require('express');
const app = express();
const roots = require('./router/appRouting');

const hostName = '127.0.0.3';
const port = 3000;

// get static files load
app.use('/public', express.static('public'));


// routing
roots.mapRouting(app);

app.listen(port,hostName,() =>{
    console.log(`server is started at http://${hostName}:${port}`);
});