const express=require('express');
const fs=require('fs')
const parser=require('body-parser')

var encodedp=parser.urlencoded({'extended':false})

var app=express()

app.get('/',function(request,response){
    fs.readFile('index.html',function(err,data){
        response.end(data);
    })
})

app.post('/addbook',encodedp,function(request,response){
    console.log(request.body.bookname);
    console.log(request.body.bookcategory);
    response.end('data collected')
})

app.listen(2000,function(){
    console.log('server running');
})