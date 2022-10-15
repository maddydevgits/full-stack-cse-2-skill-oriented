const express=require('express');
const fs=require('fs')
const parser=require('body-parser')
const mysql=require('mysql2')

var con=mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"2022Root",
    database: "maddy"
})
var encodedp=parser.urlencoded({'extended':false})

var app=express()

app.get('/',function(request,response){
    fs.readFile('index.html',function(err,data){
        response.end(data);
    })
})

app.post('/addbook',encodedp,function(request,response){
    var bookname=request.body.bookname;
    var bookcategory=request.body.bookcategory;
    con.connect(function(err){
        if(err) {
            throw err;
        } // VALUES('abc','cse','def','cat')
        var sql="INSERT INTO library (bname,bcat) VALUES('"+bookname+"','"+bookcategory+"')";
        con.query(sql,function(err,result){
            if(err) {
                throw err;
            }
            response.end('data stored')
        })

    })

    response.end('data collected')
})

app.listen(2000,function(){
    console.log('server running');
})