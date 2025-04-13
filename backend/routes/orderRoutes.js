import express from 'express';
import { getOrders, getOrderById, createOrder } from '../controllers/ordersController.js';

const router = express.Router();

// Ruta para obtener todas las órdenes
router.get('/', getOrders);

// Ruta para obtener una orden por ID
router.get('/:id', getOrderById);

// Ruta para crear una nueva orden
router.post('/', createOrder);

export default router;