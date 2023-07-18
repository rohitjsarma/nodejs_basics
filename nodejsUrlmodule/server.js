var http = require ('http');
var fs= require('fs');
var url =require('url');

http.createServer(function(req,res){
    var q = url.parse(req.url,true);
    var fileName="."+q.pathname;
    fs.readFile(fileName,function(err,data){
      if(err){
        res.writeHead(404,{'Content-type':'text/html'});
         return res.end("error- 404 PAGE NOT FOUND")
      }
    
    res.writeHead(200,{'content-type':'text/html'});
    res.write(data)
    return res.end()
    });

}).listen(8080);

