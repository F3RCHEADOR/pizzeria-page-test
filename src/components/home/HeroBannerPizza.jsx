import { useState, useEffect } from "react";
import { fetchPizzas } from "../../api/pizzeriaApi";
import CardPizza from "./CardPizza";
import ButtonAddCart from "../shoppingCart/ButtonAddCart";
import pizzaImages from "../../utils/images.js";

export default function HeroBannerPizza() {
  // Estado para la pizza actual 
  const [currentPizza, setCurrentPizza] = useState([]);
  // Estado para todas las pizzas
  const [pizzas, setPizzas] = useState([]);
  // Estado para el cargue de las pizzas 
  const [loading, setLoading] = useState(true);

  // useEffect para cargar las pizzas
  useEffect(() => {
    const loadPizzas = async () => {
      try {
        const pizzas = await fetchPizzas();
        setPizzas(pizzas);
        setCurrentPizza(pizzas[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar las pizzas:', error);
      }
    }
    loadPizzas();
  }, [])

  return loading ? (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      <h2 className="text-center font-semibold italic">Cargando Pizzas :3</h2>
    </div>
  ) : (
    <>
      <h1 className="text-3xl font-semibold mb-4 text-center">
        ¿Que Pediras Hoy?
      </h1>
      {/* Contenedor principal del banner */}
      <div className="w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 place-items-center gap-x-4 p-4 mb-6 ">
        {/* Sección izquierda - Detalles de la pizza */}
        <section className="flex flex-col items-start sm:w-80 w-full order-1">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {currentPizza.nombre}
          </h2>
          <p className="text-gray-600 mb-4 sm:text-base text-sm">
            {currentPizza.descripcion}
          </p>
        </section>

        {/* Sección central - Imagen y controles */}
        <section className="mx-auto sm:w-96 w-full order-3 md:order-2">
          <img
            src={pizzaImages[currentPizza.id]}
            alt={currentPizza.nombre}
            className="w-56 mx-auto sm:w-70 md:w-80 object-contain hover:rotate-12 transition"
          />
          <ButtonAddCart product={currentPizza} />
        </section>

        {/* Sección derecha - Ingredientes y detalles */}
        <section className="w-full md:col-span-2 lg:col-span-1 grid grid-cols-2 place-items-center order-2 md:order-3">
          <div className="sm:w-48 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ingredientes
            </h2>
            <ul className="list-disc list-inside sm:text-base text-sm">
              {currentPizza.ingredientes?.map((ingrediente) => (
                <li key={ingrediente}>{ingrediente}</li>
              ))}
            </ul>
          </div>

          <div className="sm:mt-8">
            <h3 className="text-2xl sm:text-3xl font-bold">Duración</h3>
            <p className="text-gray-600 mb-2 pl-4 sm:text-base text-sm">
              {currentPizza.duracion} minutos
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold">Precio</h3>
            <p className="text-gray-600 mb-2 pl-4 sm:text-base text-sm">
              {currentPizza.precio} dólares
            </p>
          </div>
        </section>
      </div>

      {/* Sección de pizzas relacionadas */}
      <article className="flex items-center justify-evenly flex-wrap space-y-8 md:space-y-0">
        {pizzas
          .filter((pizza) => pizza.id !== currentPizza.id)
          .map((pizza) => (
            <CardPizza
              key={pizza.id}
              pizza={pizza}
              setCurrentPizza={setCurrentPizza}
            />
          ))}
      </article>
    </>
  );
}
