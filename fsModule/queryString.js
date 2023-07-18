var http= require('http');
var url = require('url');

http.createServer(function(req,resp){
    resp.writeHead(200,{'content-type':'text/html'})
    var q =url.parse(req.url,true).query
    var txt= q.month + " " + q.year;
    resp.end(txt)
}).listen(8080)