const express = require('express');
const MongoClient=require('mongodb').MongoClient;
const url=require('url')

var mongo="mongodb://localhost:27017/"
var app=express()

app.get('/insertbook',function(request,response){
    urldata=url.parse(request.url,true);
    var bname=urldata.query.bookname;
    var bcat=urldata.query.bookcategory;
    console.log(bname,bcat);
    MongoClient.connect(mongo,function(err,db){
        if(err){
            throw err;
        }
        var dbo=db.db('kits');
        var doc={'bname':bname,'bcat':bcat};
        dbo.collection('fullstack').insertOne(doc,function(err,result){
            if(err){
                throw err;
            }
            response.end('data inserted');
        })
    })

})

app.listen(2000,function(){

    console.log('server started');
})