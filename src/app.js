import express from "express";

const app = express();

const livros = [
  {id: 1, "titulo": "Garota Exemplar"},
  {id: 2, "titulo": "Barba ensopada de sangue"}
]

app.get('/', (req, res) => {
  res.status(200).send('Home');
});

app.get('/livros', (req, res) => {
  res.status(200).json(livros);
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