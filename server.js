const express = require('express');
const app = express()

app.get('/', function (req,res){
    res.send('hello');
});

app.listen(3000,function(){
    console.log('Example app is listenning on port 3000!');
});

