const { formatarValor, formatarData } = require('../utils/formatador');

function processarArquivo(conteudo) {
  const linhas = conteudo.split('\n').filter(line => line.trim() !== '');

  return linhas.map(line => ({
    userId: line.slice(0, 10),
    userName: line.slice(10, 55).trim(),
    orderId: line.slice(55, 65),
    prodId: line.slice(65, 75),
    value: formatarValor(line.slice(75, 87)),
    date: new Date(formatarData(line.slice(87, 95))),
  }));
}

module.exports = processarArquivo;
