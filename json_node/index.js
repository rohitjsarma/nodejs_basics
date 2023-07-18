const emp_data ={
    name:"rohit sharma",
    age:30,
    company:"Persistent system",
    designation:"Lead software engineer"
}
console.log(emp_data)
const jsondata= JSON.stringify(emp_data);
console.log(jsondata)

const fs = require ("fs");
fs.writeFile("json.json" ,jsondata,(err)=>{
   console.log("data added ")
})

fs.readFile("json.json","utf-8",(err,data)=>{
  console.log(data)
  var obj= JSON.parse(data)
  console.log(obj)
  console.log(data)
  if(err){
    throw err
  }
})
