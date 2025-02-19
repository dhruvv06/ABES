const http = require('http');
const axios = require('axios');
const port = 3001;
const server = http.createServer(async (req, res) => {
  console.log('Hello from the server!');
  res.writeHead(200, { "Content-Type": "text/html"});

const response = await axios.get("https://api.github.com/users");
  const usersdata = response.data;
  let frontdata = `<html><head></head><body>`
  usersdata.forEach((product) => {
    frontdata+= `<div><img src = "${product.avatar_url}"></div>`
  });
  frontdata += `</body></html>` ;
  res.end(frontdata);
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});