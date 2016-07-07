var express = require('express');
var app = express();
var ejs = require('ejs');
var path = require('path');
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);


/* SOCKET.IO  */

var clientNumber = 0;
var clients = [];

io.on('connection',function(socket){
    socket.nickname = assignNickname();

    io.sockets.emit('update clients', clients);
    
    socket.on('send',function(data){
        io.sockets.emit('new message', socket.nickname + ": " + data);
    });
    
    socket.on('change nickname',function(newNickname){
        if(containsNickname(newNickname)){
            var notice = "<i>Please chose a unique nickname<i/>";
            socket.emit('new message', notice);
        }else{
            clients[clients.indexOf(socket.nickname)] = newNickname;
            socket.nickname = newNickname;
            io.sockets.emit('update clients', clients);
        }
    });
    
    socket.on('disconnect',function(){
        clients.splice(clients.indexOf(socket.nickname),1);
        io.sockets.emit('update clients', clients);
    });
});


function assignNickname(){
    var nickname = "Guest" + clientNumber;
    clients.push(nickname);
    clientNumber++;
    return nickname;
}

function containsNickname(nickname){
    for(var i in clients){
        if(clients[i] == nickname){
            return true;
        }
    }
    return false;
}

/* WEBSITE ROUTING AND VISIT COUNT */

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

