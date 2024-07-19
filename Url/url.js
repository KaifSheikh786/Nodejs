const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    fs.stat(filename, function (err, stats) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }

        if (filename.endsWith(".mp4")) {
            res.writeHead(200, { 'Content-Type': 'video/mp4' });
        } else if (filename.endsWith(".png")){
          res.writeHead(200, { 'Content-Type': 'image/png' });
        }
        else if (filename.endsWith(".css")){
          res.writeHead(200, { 'Content-Type': 'text/css' });
        }
        
        else  {
            res.writeHead(200, { 'Content-Type': 'text/html' });
        }


        const stream = fs.createReadStream(filename);
        stream.pipe(res);
    });
}).listen(3001);
