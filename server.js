const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end("Revisão Node\n");
});

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});