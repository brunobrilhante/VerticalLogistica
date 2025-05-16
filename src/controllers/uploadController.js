const fs = require('fs');
const processarArquivo = require('../services/processarArquivoService');

exports.uploadArquivo = (req, res) => {
  const filePath = req.file.path;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Erro ao ler o arquivo' });

    try {
      const resultado = processarArquivo(data);
      res.json(resultado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};
