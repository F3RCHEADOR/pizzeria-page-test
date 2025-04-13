import fs from 'fs';
import ordersData from '../data/orders.json' assert { type: 'json' };

//  Obtener todas las órdenes
const getOrders = (req, res) => {
  try {
    return res.status(200).json(ordersData);
  } catch (error) {
    console.error('Error al obtener órdenes:', error);
    return res.status(500).json({ message: 'Error interno', error: error.message });
  }
};

//  Obtener orden por ID
const getOrderById = (req, res) => {
  const { id } = req.params;
  const order = ordersData.find((o) => o.id === parseInt(id));

  if (!order) {
    return res.status(404).json({ message: 'Orden no encontrada' });
  }

  return res.status(200).json(order);
};

//  Crear nueva orden
const createOrder = (req, res) => {
  const nuevaOrden = req.body;

  if (!nuevaOrden || !nuevaOrden.items || nuevaOrden.items.length === 0) {
    return res.status(400).json({ message: 'Datos de orden inválidos' });
  }

  const nuevaId = ordersData.length > 0 ? ordersData[ordersData.length - 1].id + 1 : 1;
  const nueva = { id: nuevaId, ...nuevaOrden };

  ordersData.push(nueva);

  // Sobrescribir archivo JSON
  fs.writeFile('./data/orders.json', JSON.stringify(ordersData, null, 2), (err) => {
    if (err) {
      console.error('Error al guardar la orden:', err);
      return res.status(500).json({ message: 'No se pudo guardar la orden' });
    }

    return res.status(201).json(nueva);
  });
};

export { getOrders, getOrderById, createOrder };
