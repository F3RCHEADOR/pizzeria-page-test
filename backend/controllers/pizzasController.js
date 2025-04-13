import pizzasData from '../data/pizzas.json' assert { type: 'json' };



const getPizzas = (req, res) => {
  try {
    // Verificamos que se encuentren pizzas 
    if (pizzasData.length === 0) {
      return res.status(404).json({ message: "Error en la data" });
    }

    // Enviamos las pizzas como respuesta
    return res.status(200).json(pizzasData);
  } catch (error) {
    // Manejamos errores
    console.error("Error en el fetching de pizzas:", error);
    return res
      .status(500)
      .json({ message: "Error del fetching pizzas", error: error.message });
  }
};


export { getPizzas };
