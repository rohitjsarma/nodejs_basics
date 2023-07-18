var dt = require('./firstModule')
var http = require('http');
http.createServer(function(req,resp){
   resp.writeHead(200,{'content-type':'text/html'});
   resp.write("Current date is " +dt.myDateTime())
   resp.end("hello world of node js")
}).listen(8080)
