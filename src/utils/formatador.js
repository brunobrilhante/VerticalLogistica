function formatarValor(valorStr) {
  return parseFloat(parseInt(valorStr, 10) / 100);
}

function formatarData(dataStr) {
  return `${dataStr.slice(0, 4)}-${dataStr.slice(4, 6)}-${dataStr.slice(6, 8)}`;
}

module.exports = { formatarValor, formatarData };
