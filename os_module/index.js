const fs= require('fs');
const os=require("os");

var bit = os.arch()
console.log("Your computer is "+bit)
console.log("free memory avl is "+os.freemem())
console.log("free total memory avl is "+os.totalmem()/1024/1024/1024)
console.log(os.hostname());
console.log(os.tmpdir());
console.log(os.platform());
console.log(os.type());
