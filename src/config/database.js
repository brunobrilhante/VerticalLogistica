const mongoose = require('mongoose');

async function connectDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/PedidoItem")
    const db = mongoose.connection
    console.log('MongoDB conectado.')
  }
  catch {
    console.error('Erro ao conectar no MongoDB:', err.message);
  }
}

module.exports = connectDatabase;