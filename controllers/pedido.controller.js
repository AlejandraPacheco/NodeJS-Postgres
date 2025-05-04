const { Pedido } = require('../models');

// Obtener todos los pedidos
exports.obtenerPedidos = async (req, res) => {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
};

// Crear un nuevo pedido
exports.crearPedido = async (req, res) => {
    const pedido = await Pedido.create(req.body);
    res.status(201).json(pedido);
};

// Obtener pedido por ID
exports.obtenerPedidoPorId = async (req, res) => {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) {
        return res.status(404).json({ error: 'Pedido no encontrado' });
    }
    res.json(pedido);
};

// Actualizar pedido por ID
exports.actualizarPedido = async (req, res) => {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) {
        return res.status(404).json({ error: 'Pedido no encontrado' });
    }
    await pedido.update(req.body);
    res.json(pedido);
};

// Eliminar pedido por ID
exports.eliminarPedido = async (req, res) => {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) {
        return res.status(404).json({ error: 'Pedido no encontrado' });
    }
    await pedido.destroy();
    res.status(202).json({ message: 'Pedido eliminado' });
};