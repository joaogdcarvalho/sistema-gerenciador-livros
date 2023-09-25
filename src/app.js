import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Home");
});

const livros = [
  {id: 1, "titulo": "Garota Exemplar"},
  {id: 2, "titulo": "Barba ensopada de sangue"}
]


app.get('/livros', (req, res) => {
  res.status(200).json(livros);
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro cadastrado com sucesso');
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


export default app;