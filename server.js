import app from './src/app.js';

const port = process.env.PORT || 3000;

app
  .listen(port, () => {
    console.log(`API já está funcionando e aceitando requisições!`);
    console.log(`Servidor escutando em http://localhost:${port}`);
  })
  .on("error", (err) => {
    console.error(`Erro ao iniciar o servidor: ${err.message}`);
  });