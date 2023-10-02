import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log(`Conexão com o banco feita com sucesso`);
})


const app = express();

app.use(express.json());

routes(app);

// Rotas
app.get("/autores", (req, res) => {
  res.status(200).send("Autores");
});

app.get("/editora", (req, res) => {
  res.status(200).send("Editora");
});

app.get("/sobre", (req, res) => {
  res.status(200).send("Sobre");
});

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