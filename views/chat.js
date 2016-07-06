$(document).ready(function(){
    var socket = io.connect();
    var messagesWindow = $("#messagesWindow");
    var messageInput = $("#messageInput");
    var sendButton = $("#sendButton");
    
    sendButton.click(function(e){
        socket.emit('send', messageInput.val());
        messageInput.val('');
        e.preventDefault();
    });
    
    socket.on('new message',function(data){
        var time = new Date();
        messagesWindow.append(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + "  " +  data + "<br />");
    });
});