const fs= require("fs");
//fs.writeFileSync("newFile.txt",'Welcome to node js file system module');

//fs.appendFileSync("newFile.txt"," My name is rohit j");
//fs.renameSync("file.txt","synchFile.txt" )
//var text= fs.readFileSync("synchFile.txt",'utf-8');
//console.log(text.toString())
//console.log(text)

//====================================== Async way ==========================================
//fs.writeFile("file.txt","welcome to async Fs module of node js ",()=>{});

// fs.appendFile("file.txt",". This is a new file for  async fs module",(err)=>{
//     console.log("task is completed ")
// })

//fs.rename("file.txt","Async.txt",(err)=>{})


// fs.readFile("Async.txt",'utf-8',(err,data)=>{
//      console.log(data)
//      if(err){
//         console.log(err)
//      }
// });

//=================== synch vs Async call=================================
// const data= fs.readFileSync("Async.txt",'utf-8')
// console.log(data);
// console.log("After the Data");

// fs.readFile("Async.txt","utf-8",(err,data)=>{
//     console.log(data)
// })
// console.log("After the data" );