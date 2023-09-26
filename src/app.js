import express from "express";

const app = express();

app.use(express.json());

// Rotas
app.get("/", (req, res) => {
  res.status(200).send("Home");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const livro = buscaLivro(req.params.id);
  if (livro) {
    res.json(livros);
  } else {
    res.status(404).send("Livro não encontrado");
  }
});

app.post("/livros", (req, res) => {
  const novoLivro = req.body;
  livros.push(novoLivro);
  res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivroIndex(req.params.id);

  if(index !== -1){
    livros[index].titulo = req.body.titulo;
    res.json(livros);
  } else {
    res.status(404).send("Livro não encontrado");
  }  
});

app.get("/autores", (req, res) => {
  res.status(200).send("Autores");
});

app.get("/editora", (req, res) => {
  res.status(200).send("Editora");
});

app.get("/sobre", (req, res) => {
  res.status(200).send("Sobre");
});

// Funções de Apoio
const livros = [
  {id: 1, "titulo": "Garota Exemplar"},
  {id: 2, "titulo": "Barba ensopada de sangue"}
];

function buscaLivro(id) {
  return livros.find(livro => livro.id == id);
}

function buscaLivroIndex(id) {
  return livros.findIndex(livro => livro.id == id);
}

export default app;