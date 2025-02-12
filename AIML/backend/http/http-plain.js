const http = require('http');

const server = http.createServer((req,res)=>
{
  console.log(req.url)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write("<h1>Hello, World</h1>")
  res.end();
});
port = 3000;

server.listen(port,()=>{
    comsole.log('Server is running on port $ {port}');
});