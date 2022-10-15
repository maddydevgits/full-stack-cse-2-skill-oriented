const express=require('express');

var app=express();

app.get('/',function(req,res){
    res.end('Madhu');
})

app.listen(2000);