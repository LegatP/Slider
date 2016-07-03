var express = require('express');
var app = express();
var ejs = require('ejs');
var path = require('path');

var visits = 0;

if(!process.env.PORT)
    process.env.PORT = 8080;
    
  
var visits = 0;  
   
   
app.use(express.static(path.join(__dirname, 'views')));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',function(req,res,next){
    visits++;
    console.log(visits);
    res.render('index.ejs');
})

app.get('/chat',function(req,res){
    res.render('chat');
})

app.get('/index',function(req,res){
    res.render('index.ejs');
})
 
app.listen(process.env.PORT,function(){
    console.log("Server listening on PORT " + process.env.PORT);
});