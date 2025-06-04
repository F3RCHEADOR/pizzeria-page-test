import express from 'express';
import cors from 'cors';
import pizzasRoutes from './routes/pizzaRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();
const port = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/pizzas', pizzasRoutes);
app.use('/api/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Server corriendo en http://localhost:${port}`);
});
