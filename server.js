var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=required('pg').Pool;
var app = express();
var crypto=require('crypto');


var config={
    user:'ethakotasivakumar',
    database:'ethakotasivakumar',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:db-ethakotasivakumar-34361
}

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/test-db',function(req,res){
    //make a select request
    });
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

//Adding pages
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','main.js'));
});

app.get('/artical-one', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','artical-one.html'));
});

app.get('/artical-two', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','artical-two.html'));
});

app.get('/artical-three', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','artical-three.html'));
});

//counter 

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

function hash(input,salt){
    //how do we create hash
    var hashed=crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
    return hashed.toString('hex');
}
app.get('/hash/:input',function(req,res){
    var hashedString=hash(req.parans.input,'this-is-some-random-string');
    res.send(hashedString);
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
