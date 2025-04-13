import express from 'express';
import { getPizzas } from '../controllers/pizzasController.js';

const router = express.Router();

// Ruta para obtener todas las pizzas
router.get('/', getPizzas);

export default router;