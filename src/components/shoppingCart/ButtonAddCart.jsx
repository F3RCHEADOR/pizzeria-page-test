import { useState } from "react";
import { useCart } from "../../hooks/useCart";

const ButtonAddCart = ({ product }) => {
  const { isOpen, toggleCart, addItem } = useCart();
  const [cantidad, setCantidad] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < cantidad; i++) {
      addItem(product);
    }
    setCantidad(1);
    if (!isOpen) {
      toggleCart();
    }
  };

  return (
    <>
      {/* Controles de cantidad */}
      <div className="flex items-center justify-between w-40 mx-auto mt-4 sm:mt-6">
        <button onClick={() => cantidad > 0 && setCantidad(cantidad - 1)}>
          -
        </button>
        <span>{cantidad}</span>
        <button onClick={() => setCantidad(cantidad + 1)}>+</button>
      </div>
      {/* Botón de agregar al carrito */}
      <button
        onClick={handleAddToCart}
        className="flex items-center justify-center border-2 rounded-md px-3 py-1.5 my-2.5 font-medium cursor-pointer mx-auto hover:scale-110 transition border-green-500 bg-green-300 w-40 sm:w-48"
      >
        Agregar al carrito
      </button>
    </>
  );
};

export default ButtonAddCart;
