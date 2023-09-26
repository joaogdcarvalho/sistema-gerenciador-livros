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
  const result = buscaLivro(req.params.id);
  if (result.livro) {
    res.json(result.livro);
  } else {
    livroNaoEncontrado(res);
  }
});

app.post("/livros", (req, res) => {
  const novoLivro = req.body;
  if (validaLivro(novoLivro)) {
    livros.push(novoLivro);
    res.status(201).send("Livro cadastrado com sucesso");
  } else {
    res.status(400).send("Dados de livro inválidos");
  }
});

app.put("/livros/:id", (req, res) => {
  const result = buscaLivro(req.params.id);

  if (result.livro) {
    result.livro.titulo = req.body.titulo;
    res.json(livros);
  } else {
    livroNaoEncontrado(res);
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
  { id: 1, titulo: "Garota Exemplar" },
  { id: 2, titulo: "Barba ensopada de sangue" },
];

function buscaLivro(id) {
  const index = livros.findIndex((livro) => livro.id == id);
  if (index !== -1) {
    return { livro: livros[index], index: index };
  } else {
    return { livro: null, index: -1 };
  }
}

function validaLivro(livro) {
  return livro && livro.titulo;
}

function livroNaoEncontrado(res) {
  res.status(404).send("Livro não encontrado");
}

export default app;