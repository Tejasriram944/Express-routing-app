
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

let mapRouting = (app) => {

    // configure body parser
    const urlencodedParser = bodyParser.urlencoded({ extended: false });

    // get html file
    app.get('/',(req,res) => {
        res.sendFile(path.join(__dirname,'..','views','index.html'));
    });
    // get profile file
    app.get('/profile',(req,res) => {
        let queries = req.query;
        console.log(queries);
        res.sendFile(path.join(__dirname,'..','views','profile.html'));
    });
    // get profile file with id
    app.get('/profile/:id',(req,res) => {
        let selectedId = Number.parseInt(req.params.id);
        fs.readFile(path.join(__dirname,'..','database','profile.json'),'utf-8',(err,data) =>{
            if(err) throw err;
            let profiles = JSON.parse(data);
            let selectedProfile = profiles.find(function (profile) {
                return profile.id === selectedId;
            });
            console.log(selectedProfile);
            // document.getElementById('demo').innerText=selectedProfile;
        });
        res.sendFile(path.join(__dirname,'..','views','profile.html'));
    });

    //post contact form
    app.post('/contact-form',urlencodedParser,(req,res) =>{
        let contactFormData = req.body;
        console.log(contactFormData);
        res.sendFile(path.join(__dirname,'..','views','index.html'));
    });

    // page not found
    app.get('/**',(req,res) =>{
        res.sendFile(path.join(__dirname,'..','views','notfound.html'));
    });
};

module.exports = {
    mapRouting
};
