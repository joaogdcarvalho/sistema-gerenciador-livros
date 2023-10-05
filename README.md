# Sistema Gerenciador de Livros

## Tabela de Conteúdos
- [Descrição](#descrição)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução](#execução)
- [Endpoints da API](#endpoints-da-api)
  - [Livros](#livros)
  - [Autores](#autores)
  - [Editoras](#editoras)
- [Exemplos de Uso](#exemplos-de-uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição
O projeto "Sistema Gerenciador de Livros" foi desenvolvido utilizando Node.js para criar uma API REST que permite o gerenciamento de livros, autores e editoras. Além disso, o banco de dados MongoDB é utilizado para armazenar os dados do sistema.

## Pré-requisitos
Antes de iniciar, certifique-se de ter as seguintes ferramentas e dependências instaladas em seu sistema:

- [Node.js](https://nodejs.org/): Ambiente de execução JavaScript.
- [MongoDB](https://www.mongodb.com/try/download/community): Banco de dados NoSQL.
- [Git](https://git-scm.com/): Controle de versão distribuído.

## Instalação
Para configurar o projeto, é necessário instalar as seguintes dependências:

- [dotenv@16.3.1](https://www.npmjs.com/package/dotenv): Gerencia variáveis de ambiente.
- [express@4.17.3](https://www.npmjs.com/package/express): Framework para construção de aplicativos web.
- [mongoose@6.2.6](https://www.npmjs.com/package/mongoose): Biblioteca para modelagem de objetos MongoDB.
- [nodemon@2.0.15](https://www.npmjs.com/package/nodemon): Utilitário que monitora alterações no código e reinicia automaticamente o servidor.

## Configuração
Antes de iniciar o projeto, crie um arquivo `.env` na raiz do projeto e configure as seguintes variáveis de ambiente com os dados obtidos do MongoDB Atlas:

```
DB_USERNAME=seu_username
DB_PASSWORD=sua_senha
```

Certifique-se de ter um servidor MongoDB em execução e substitua `seu_username` e `sua_senha` pelos seus dados de conexão.

## Execução
Para iniciar o servidor, execute o seguinte comando a partir do diretório raiz do projeto:

```
npm start
```

O servidor estará acessível em `http://localhost:3000` (ou na porta que você configurou) e estará pronto para receber requisições.

## Endpoints da API
A API oferece os seguintes endpoints para gerenciamento de livros, autores e editoras:

### Livros
- `GET /livros`: Retorna a lista de todos os livros cadastrados.
- `GET /livros/:id`: Retorna informações sobre um livro específico com base no ID.
- `POST /livros`: Cadastra um novo livro.
- `PUT /livros/:id`: Atualiza informações de um livro com base no ID.
- `DELETE /livros/:id`: Exclui um livro com base no ID.

### Autores
- `GET /autores`: Retorna a lista de todos os autores cadastrados.
- `GET /autores/:id`: Retorna informações sobre um autor específico com base no ID.
- `POST /autores`: Cadastra um novo autor.
- `PUT /autores/:id`: Atualiza informações de um autor com base no ID.
- `DELETE /autores/:id`: Exclui um autor com base no ID.

### Editoras
- `GET /editoras`: Retorna a lista de todas as editoras cadastradas.
- `GET /editoras/:id`: Retorna informações sobre uma editora específica com base no ID.
- `POST /editoras`: Cadastra uma nova editora.
- `PUT /editoras/:id`: Atualiza informações de uma editora com base no ID.
- `DELETE /editoras/:id`: Exclui uma editora com base no ID.

## Exemplos de Uso
Você pode usar ferramentas como [Postman](https://www.postman.com/) ou [curl](https://curl.se/) para testar os endpoints da API. Aqui estão alguns exemplos de como usar os endpoints:

- Listar todos os livros:
  ```
  GET http://localhost:3000/livros
  ```

- Cadastrar um novo livro:
  ```
  POST http://localhost:3000/livros

  Corpo da requisição:
  {
    "titulo": "Livro Teste",
    "autor": "Autor Teste",
    "editora": "Editora Teste"
  }
  ```

- Atualizar um livro existente:
  ```
  PUT http://localhost:3000/livros/1

  Corpo da requisição:
  {
    "titulo": "Livro Atualizado",
    "autor": "Autor Atualizado",
    "editora": "Editora Atualizada"
  }
  ```

- Excluir um livro:
  ```
  DELETE http://localhost:3000/livros/1
  ```

## Contribuição
Sinta-se à vontade para contribuir com melhorias ou correções neste projeto. Basta criar um fork do repositório, fazer suas modificações e enviar um pull request.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

---

Este readme fornece uma visão geral do projeto "Sistema Gerenciador de Livros" e instruções detalhadas de instalação e uso da aplicação. Certifique-se de verificar o código-fonte e a documentação interna para obter informações mais detalhadas sobre a implementação e o funcionamento do projeto.
