const http = require('http');
const fs= require("fs");
const { emitKeypressEvents } = require('readline');

var server = http.createServer((req,resp)=>{
    console.log(req.url)
    if(req.url=="/"){
        resp.end("hello ,, some one is listening from Home page ")
    }
    else if(req.url=="/contact"){
        resp.end("welcome to the contact page ")
    }
    else if(req.url=="/about"){
        resp.end("welcome to the about page ")
    }
    else if(req.url=="/userlist"){
        resp.writeHead(200,{"content-type":"application/json"})
         fs.readFile(`${__dirname}/jsonData/emp.json`,"utf-8",(err,data)=>{
              
              resp.end(data)
              const emp= JSON.parse(data)
              //console.log(emp)
              console.log(emp[0].id)
        })
        
    }
    else{
        resp.writeHead(404,{"content-type":"html"})
        resp.end("<h1>page not found ,error 404</h1>")
    }
 
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("server is listening @ 8000")
})