const express=require('express');

var app=express()

app.get('/',function(request,response){
    response.send('maddy');
})
app.listen(2000,function(){
    console.log('Server started');
})