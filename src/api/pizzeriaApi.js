// src/api/pizzeriaApi.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Obtener todas las pizzas
export const fetchPizzas = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pizzas`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las pizzas:', error);
    throw error;
  }
};

// Crear una nueva orden
export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
    return response.data;
  } catch (error) {
    console.error('Error al crear la orden:', error);
    throw error;
  }
};

// Obtener todas las órdenes
export const fetchOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las órdenes:', error);
    throw error;
  }
};

// Obtener una orden por ID
export const fetchOrderById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener la orden con ID ${id}:`, error);
    throw error;
  }
};
