const http=require("http");
const routesJs214thvdo2=require("./routesJs214thvdo2")
console.log(routesJs214thvdo2.sometext);
const server=http.createServer(routesJs214thvdo2.handler);
server.listen(3000);