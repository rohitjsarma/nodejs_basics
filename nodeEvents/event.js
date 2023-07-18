var fs = require('fs');
fs.appendFile('test.html','this is for read stream',function(err){
  if(err) throw err
})
var rs= fs.createReadStream('./test.html');
rs.on('open',function(){
    console.log('file is opened')
})
