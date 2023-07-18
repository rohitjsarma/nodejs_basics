const express = require('express');
const app=express();
let port= 5000;

const sendMail = require("./controller/sendMail")

app.get('/',(req,res)=>{
 res.send("server is listening ")
})

app.get('/mail',sendMail)

const start=async()=>{
  try{
    app.listen(port,()=>{
      console.log(`server is litenning at ${port}`)
    })
  } catch(error){

  }
}
start();

