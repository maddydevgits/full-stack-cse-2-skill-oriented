const express=require('express')
const MongoClient=require('mongodb').MongoClient;

var app=express()
var mongo="mongodb://localhost:27017/"

app.get('/getbooks',function(request,response){

    MongoClient.connect(mongo,function(err,db){
        if(err){
            throw err;
        }
        var dbo=db.db('kits');
        dbo.collection('fullstack').find(function(err,result){
            if(err){
                throw err;
            }
            var data=[]
            for(let item of result){
                data.push(item);
            }
            response.end(data.toString());
        })
    })
})

app.listen(2000,function(){
    console.log('server started');
})