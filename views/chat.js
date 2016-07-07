$(document).ready(function(){
    var socket = io.connect();
    var messagesWindow = $("#messagesWindow");
    var messageInput = $("#messageInput");
    var sendButton = $("#sendButton");
    var clientList = $("#clientList");
    
    sendButton.click(function(e){
        e.preventDefault();
        if(!messageInput.val().trim()){
            /* Empty message */
        }else if(messageInput.val().split(' ')[0] == ('/nickname')){
            socket.emit('change nickname', capitalize(messageInput.val().split(' ')[1]));
        }
        else{
            socket.emit('send', messageInput.val());
        }
        messageInput.val('');
    });
    
    socket.on('update clients',function(nicknames){
        clientList.empty();
        for(var id in nicknames){
            clientList.append(nicknames[id] + "<br />");
        }
        console.log("nic:" + nicknames);
    });
    
    socket.on('new message',function(data){
        messagesWindow.append(data + "<br />");
    });
    
    function capitalize(data){
        return data.charAt(0).toUpperCase() + data.slice(1);
    }
    
});