const http = require("http")

const fs = require('fs/promises')

let flag = false;
const server = http.createServer(async (req, res) => {
  if (!false) {
    // fs.writeFile('./t1.txt', "hello t1");
    flag = true;
  }
  const result = await fs.readdir('.');
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: result,
  }));
});

server.listen(80);