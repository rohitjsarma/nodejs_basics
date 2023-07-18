const fs = require("fs");
const http=require("http");

const requests = require('requests');

fs.readFile("index.html","utf-8",(err,data)=>{
  //console.log(data)
})

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        requests('https://jsonplaceholder.typicode.com/users')
        .on('data', function (chunk) {
            const objdata= JSON.parse(chunk)
            console.log(objdata[0].id)
        })
        .on('end', function (err) {
        if (err) return console.log('connection closed due to errors', err);
        console.log('end');
        res.end()
        });
    }

})

server.listen(8000,'127.0.0.1')
