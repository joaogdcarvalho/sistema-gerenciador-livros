import express from "express";
import EditoraController from "../controller/editorasControllers.js";

// Crie uma instância do roteador do Express
const router = express.Router();

// Rotas para manipulação de editoras
router
  .get("/editoras", EditoraController.listarEditoras) // Lista todas as editoras
  .get("/editoras/:id", EditoraController.listarEditoraPorId) // Obtém uma editora por ID
  .post("/editoras", EditoraController.cadastrarEditora) // Cadastra uma nova editora
  .put("/editoras/:id", EditoraController.atualizarEditora) // Atualiza uma editora por ID
  .delete("/editoras/:id", EditoraController.excluirEditora); // Exclui uma editora por ID

// Exporte o roteador para uso em outros módulos
export default router;