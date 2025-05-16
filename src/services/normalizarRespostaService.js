function normalizarPedidos(dados) {
  const resultado = [];

  const usuariosMap = new Map();

  for (const item of dados) {
    const userId = parseInt(item.userId, 10);
    const orderId = parseInt(item.orderId, 10);
    const productId = parseInt(item.prodId, 10);
    const value = item.value;
    const date = item.date.toISOString().split('T')[0]; // yyyy-mm-dd

    if (!usuariosMap.has(userId)) {
      usuariosMap.set(userId, {
        user_id: userId,
        name: item.userName,
        orders: [],
      });
    }

    const usuario = usuariosMap.get(userId);

    let pedido = usuario.orders.find(p => p.order_id === orderId);

    if (!pedido) {
      pedido = {
        order_id: orderId,
        total: 0,
        date,
        products: [],
      };
      usuario.orders.push(pedido);
    }

    pedido.products.push({
      product_id: productId,
      value: value.toFixed(2),
    });

    pedido.total += value;
  }

  // Corrigir total formatado como string
  for (const usuario of usuariosMap.values()) {
    usuario.orders.forEach(p => {
      p.total = p.total.toFixed(2);
    });
    resultado.push(usuario);
  }

  return resultado;
}

module.exports = normalizarPedidos;
