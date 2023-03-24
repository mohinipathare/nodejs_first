const http=require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>hi</title></head>');
    res.write('<h1>Welcome to my Node Js project</h1>');
    console.log(res);
   res.end();
})
server.listen(3000);