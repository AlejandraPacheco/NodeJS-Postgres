const express = require('express');
const router = express.Router();
const { obtenerPedidos, crearPedido, obtenerPedidoPorId, actualizarPedido, eliminarPedido } = require('../controllers/pedido.controller');

// Obtener todos los pedidos
router.get('/pedidos', obtenerPedidos);
// Crear un nuevo pedido
router.post('/pedidos', crearPedido);
// Obtener pedido por ID
router.get('/pedidos/:id', obtenerPedidoPorId);
// Actualizar pedido por ID
router.put('/pedidos/:id', actualizarPedido);
// Eliminar pedido por ID
router.delete('/pedidos/:id', eliminarPedido);

module.exports = router;
