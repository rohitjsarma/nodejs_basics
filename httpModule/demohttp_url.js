var http= require('http');
 http.createServer(function(req,resp){
    resp.writeHead(200,{'Content-type':'text/html'});
    resp.write(req.url);
    resp.end()
 }).listen(8080)

