const { Cliente } = require('../models');

// Obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
};

// Crear un nuevo cliente
exports.crearCliente = async (req, res) => {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
};

// Obtener cliente por ID
exports.obtenerClientePorId = async (req, res) => {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
        return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    res.json(cliente);
};

// Actualizar cliente por ID
exports.actualizarCliente = async (req, res) => {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
        return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    await cliente.update(req.body);
    res.json(cliente);
};

// Eliminar cliente por ID
exports.eliminarCliente = async (req, res) => {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
        return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    await cliente.destroy();
    res.status(202).json({ message: 'Cliente eliminado' });

};