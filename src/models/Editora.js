import mongoose from "mongoose";

// Defina um esquema para a entidade "Editora"
const editoraSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  dataFundacao: { type: Date },
});

// Crie um modelo com o nome "Editoras" com base no esquema
const editoras = mongoose.model("editoras", editoraSchema);

// Exporte o modelo para uso em outros módulos
export default editoras;
