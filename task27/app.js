const express=require('express')
const mysql=require('mysql2')

var app=express()
var con=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2022Root",
    database: "maddy"
})

app.get('/getdata',function(request,response){

    con.connect(function(err){
        if(err) {
            throw err;
        }
        var sql="select * from library";
        con.query(sql,function(err,result){
            if(err){
                throw err;
            }
            var data=[]
            for(let item of result){
                data.push(JSON.stringify(item))
            }
            response.end(data.toString());
        })
    })

})

app.listen(2000,function(){
    console.log('server started');
})