var fs = require('fs');
var http= require('http');
var formidable = require('formidable');

http.createServer(function(req,resp){
    if(req.url = './fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            var oldpath = files.filetoupload.filepath;
            var newpath = 'D:\uploadDoc' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function (err) {
              if (err) throw err;
            resp.write('File Upload');
            resp.end();
        });
    });
    } else {
    resp.writeHead(200,{'content-type':'text/html'});
    resp.write('<form action="fileupload", method="post",enctype="multipart/form-data">');
    resp.write('<input type = "file" name="fileUpload"></br>'); 
    resp.write('<input type="submit">')
    resp.write('</form>')
    }
}).listen('8080')