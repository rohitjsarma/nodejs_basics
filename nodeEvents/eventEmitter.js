var events = require('events');
var eventEmitter= new events.EventEmitter();

//creating Event handler 
 var myEventHandler= function(){
    console.log("Run my event handler")
 };
 //assign the event 
 eventEmitter.on('scream',myEventHandler);
 //fire the event 
 eventEmitter.emit('scream')
