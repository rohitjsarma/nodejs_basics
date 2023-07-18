const events = require("events");
const eventemitter = new events.EventEmitter();


eventemitter.on('sayMyName',()=>{
    console.log("rohit")
})

eventemitter.on('sayMyName',(sc,msg)=>{
    console.log(`The status code is ${sc} and the message is ${msg}` )
})

eventemitter.emit('sayMYName',200,"ok")
