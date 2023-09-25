const http = require("http");
const port = 3000;

const rotas = {
  '/': 'Home',
  '/livros': 'Livros',
  '/autores': 'Autores',
  '/editora': 'Editora'
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end(rotas[req.url]);
});

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});