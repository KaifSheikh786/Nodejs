const http = require('http');
const port = 2000;
const host = "127.0.0.1"
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    var p = 120000;
    var r = 5.5;
    var t = 2;
    var si = (p*r*t)/100;
    res.setHeader('Content-Type','text/html');
    res.end(`<h1>Result is ${si} </h1>`)

})

server.listen(port, host, ()=>{
    console.log(`Server Running at http://${host}:${port}/`)
})