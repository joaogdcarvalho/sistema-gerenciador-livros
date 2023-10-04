import editoras from "../models/Editora.js";

class EditoraController {
  // Lista todas as editoras
  static listarEditoras = (req, res) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(editoras);
    }
  };

  // Obtém uma editora por ID
  static listarEditoraPorId = (req, res) => {
    const id = req.params.id;

    editoras.findById(id, (err, editoras) => {
      if (err) {
        res.status(400).send({
          message: `${err.message} - ID da editora '${id} não localizado.`,
        });
      } else {
        res.status(200).send(editoras);
      }
    });
  };

  // Cadastra uma nova editora
  static cadastrarEditora = (req, res) => {
    let novaEditora = new editoras(req.body);

    novaEditora.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao cadastrar editora.` });
      } else {
        res.status(200).send(novaEditora.toJSON());
      }
    });
  };

  // Atualiza uma editora por ID
  static atualizarEditora = (req, res) => {
    const id = req.params.id;

    editoras.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: `Editora atualizada com sucesso` });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  // Exclui uma editora por ID
  static excluirEditora = (req, res) => {
    const id = req.params.id;

    editoras.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: `Editora removida com sucesso` });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default EditoraController;