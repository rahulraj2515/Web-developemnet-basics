var express = require('express');
var http =require('http');
var fs = require('fs');

var app = express();
var server = http.createServer(app);

app.get('/',(req,res)=>{
    res.send('<h1>Express  works</h1>');
})

app.get('/tasks',(req,res)=>{ 
    fs.readFile('./db.json',(err,data) =>{
        res.end(data.toString());
    });
});

server.listen(3000, () => {
    console.log('server listening on port 3000');
});