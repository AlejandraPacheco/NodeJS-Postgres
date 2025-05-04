const express = require('express');
const router = express.Router();
const { obtenerClientes, crearCliente, obtenerClientePorId, actualizarCliente, eliminarCliente } = require('../controllers/cliente.controller');

// Obtener todos los clientes
router.get('/clientes', obtenerClientes);
// Crear un nuevo cliente
router.post('/clientes', crearCliente);
// Obtener cliente por ID
router.get('/clientes/:id', obtenerClientePorId);
// Actualizar cliente por ID
router.put('/clientes/:id', actualizarCliente);
// Eliminar cliente por ID
router.delete('/clientes/:id', eliminarCliente);

module.exports = router;
