import express from "express";
import LivroController from "../controller/livrosControllers.js";

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros);

export default router;