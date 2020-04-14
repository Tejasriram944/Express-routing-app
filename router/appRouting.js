const path = require('path');

let mapRouting = (app) => {
    // get html file
    app.get('/',(req,res) => {
        res.sendFile(path.join(__dirname,'..','views','index.html'));
    });
// // services
// app.get('/services',(req,res) => {
//     res.sendFile(path.join(__dirname,'views','index.html'));
// });
// // portfolio
// app.get('/#services',(req,res) => {
//     res.sendFile(path.join(__dirname,'views','index.html'));
// });
// // about
// app.get('/about',(req,res) => {
//     res.sendFile(path.join(__dirname,'views','index.html'));
// });
// // team
// app.get('/team',(req,res) => {
//     res.sendFile(path.join(__dirname,'views','index.html'));
// });
// // contact
// app.get('/contact',(req,res) => {
//     res.sendFile(path.join(__dirname,'views','index.html'));
// });
    app.get('/**',(req,res) =>{
        res.sendFile(path.join(__dirname,'..','views','notfound.html'));
    });
};

module.exports = {
    mapRouting
};
