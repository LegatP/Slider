var express = require('express');
var app = express();
var ejs = require('ejs');
var path = require('path');
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);

io.sockets.on('connection',function(socket){
    socket.on('send',function(data){
        io.sockets.emit('new message', data);
    });
});



var visits = 0;

if(!process.env.PORT)
    process.env.PORT = 8080;
    
  
var visits = 0;  
   
   
app.use(express.static(path.join(__dirname, 'views')));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    visits++;
    console.log(visits);
    res.render('index.ejs');
});

app.get('/chat',function(req,res){
    res.render('chat');
});

app.get('/index',function(req,res){
    res.render('index.ejs');
});
 
http.listen(process.env.PORT,function(){
    console.log("Server listening on PORT " + process.env.PORT);
});

