const http = require('http');
const fs = require('fs/promises')

const server= http.createServer(async (req,res) =>
{
    //res.statuscode =200;
    //res.setheader('content-type','text/plain');
    res.writeHead(200,{'content-type':'text/plain'});
    // res.end('Hello,world');

    const d = await fs.readFile("./aa.json","utf-8")
    res.end(d)
});
port = 3000;
server.listen(3000 ,()=> {
    console.log(`server is running on ${port}`);
})