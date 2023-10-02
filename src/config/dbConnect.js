import mongoose from "mongoose";
import dotenv from "dotenv";

// Carregue as variáveis de ambiente do arquivo .env
dotenv.config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.43cpu8d.mongodb.net/rv-node`
);
