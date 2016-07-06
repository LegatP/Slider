$(document).ready(function(){
    var socket = io.connect();
    var msgBox = $("#msgBox");
    var msg = $("#msg");
    var send = $("#send");
    console.log("oj"); 
    send.click(function(e){
        socket.emit('send', msg.val());
        msg.val('');   
    });
    
    socket.on('new message',function(data){
        msgBox.append(data + "<br />");
    });
});