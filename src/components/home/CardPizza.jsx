import React from "react";
import pizzaImages from "../../utils/images";

const CardPizza = ({pizza, setCurrentPizza}) => {
    return(
    <div className="flex flex-col items-center max-w-sm shadow-lg rounded-md  p-4 mx-4 md:mx-1 bg-theme-bg-secondary text-theme-text-primary shadow-theme-button">
        <img src={pizzaImages[pizza.id]} alt={pizza.nombre} className="size-28 hover:scale-110 hover:rotate-12 transition" />
        <h2 className="text-lg font-bold">{pizza.nombre}</h2>
        <p className=" line-clamp-3 md:line-clamp-2 mb-2">{pizza.descripcion}</p>
        <button className="px-2 py-0.5 border-b border-dotted hover:scale-110 transition bg-theme-button " onClick={() => setCurrentPizza(pizza)}>Ver Pizza</button>
    </div>
)
}

export default CardPizza;
  