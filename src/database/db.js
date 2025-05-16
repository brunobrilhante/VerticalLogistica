const mongoose = require('mongoose');

async function connectDatabase() {
  await mongoose.connect("mongodb://localhost:27017/PedidoItem")
  const db = mongoose.connection
}

module.exports = connectDatabase;