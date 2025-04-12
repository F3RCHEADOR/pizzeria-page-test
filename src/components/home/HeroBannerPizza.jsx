import { useState } from "react";
import CardPizza from "./CardPizza";
import ButtonAddCart from "../shoppingCart/ButtonAddCart";


import Pizza1 from "../../assets/pizza-1.png";
import Pizza2 from "../../assets/pizza-2.png";
import Pizza3 from "../../assets/pizza-3.png";
import Pizza4 from "../../assets/pizza-4.png";

const pizzas = [
  {
    id: 1,
    nombre: "Campesina",
    imagen: Pizza1,
    descripcion:
      "Una explosión de sabores del campo en cada bocado. Esta pizza combina la frescura de los vegetales de estación con un toque de sabor ahumado. Perfecta para los amantes de las verduras y los sabores naturales. El equilibrio entre la cebolla caramelizada y los pimientos rostizados crea una sinfonía de sabores que te transportará a un campo de huertos frescos.",
    ingredientes: ["Tomates", "Cebolla", "Pimientos", "Aceitunas"],
    duracion: 20,
    precio: 10,
  },
  {
    id: 2,
    nombre: "Picante",
    imagen: Pizza2,
    descripcion:
      "Una aventura de sabores picantes que pondrán a prueba tu paladar. La combinación de jalapeños frescos y salchicha ahumada crea una experiencia culinaria única. Cada bocado es una explosión de calor y sabor, perfectamente equilibrada con el queso derretido que calma la intensidad del picante. Ideal para los amantes de las pizzas con un toque de fuego.",
    ingredientes: ["Jalapeños", "Salchicha", "Chorizo", "Queso"],
    duracion: 25,
    precio: 12,
  },
  {
    id: 3,
    nombre: "Pepperoni",
    imagen: Pizza3,
    descripcion:
      "La clásica americana que nunca falla. Esta pizza combina el crujiente pepperoni con un queso derretido perfectamente dorado. Cada bocado es una explosión de sabor tradicional que te transportará a las calles de Nueva York. El toque de orégano fresco y los tomates maduros dan el equilibrio perfecto a esta obra maestra de la pizza.",
    ingredientes: ["Pepperoni", "Queso", "Tomates", "Orégano"],
    duracion: 30,
    precio: 15,
  },
  {
    id: 4,
    nombre: "Hawaiana",
    imagen: Pizza4,
    descripcion:
      "Una explosión de sabores tropicales que te transportará a la isla de Hawái. La combinación de piña fresca y jamón ahumado crea un equilibrio perfecto con el queso derretido. Ideal para los amantes de las pizzas con un toque de dulzura y picante. Cada bocado es una sinfonía de sabores que te transportará a un mundo tropical de sabores.",
    ingredientes: ["Piña", "Jamón", "Queso", "Tomates"],
    duracion: 25,
    precio: 13,
  },
];

export default function HeroBannerPizza() {
  // Estado para la pizza actual y la cantidad
  const [currentPizza, setCurrentPizza] = useState(pizzas[0]);
  const [cantidad, setCantidad] = useState(0);

  return (
    <>
      {/* Contenedor principal del banner */}
      <div className="w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 place-items-center gap-x-4 p-4 mb-6 mt-8">
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
            src={currentPizza.imagen}
            alt={currentPizza.nombre}
            className="w-full mx-auto sm:w-80 object-contain hover:rotate-12 transition"
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
      <article className="flex items-center justify-evenly flex-wrap space-y-4 md:space-y-0">
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
