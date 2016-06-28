var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    
   res.get("/",function(req,res){});
}).listen(process.env.PORT, process.env.IP);