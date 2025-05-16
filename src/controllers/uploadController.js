const fs = require('fs');
const PedidoItem = require('../models/PedidoItem');
const processarArquivo = require('../services/processarArquivoService');
const normalizarPedidos = require('../services/normalizarRespostaService');

exports.uploadArquivo = async (req, res) => {
  const filePath = req.file.path;

  fs.readFile(filePath, 'utf8', async (err, data) => {
    if (err) return res.status(500).json({ error: 'Erro ao ler o arquivo' });

    try {
      const pedidos = processarArquivo(data);
      //await PedidoItem.insertMany(pedidos);

      // Buscar tudo do banco e montar a resposta
      //const dados = await PedidoItem.find();
      const respostaNormalizada = normalizarPedidos(pedidos);

      console.log(respostaNormalizada)

      res.status(200).json(respostaNormalizada);
    } catch (error) {
      console.error('Erro ao processar:', error);
      res.status(500).json({ error: 'Erro ao salvar ou processar' });
    }
  });
};
