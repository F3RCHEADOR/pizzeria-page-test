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
        <button  className="border-2  border-theme-text-primary bg-red-400/90 rounded-md w-10 py-1 text-center cursor-pointer hover:scale-110 transition" onClick={() => cantidad > 0 && setCantidad(cantidad - 1)}>
          -
        </button>
        <span className="border-2 border-theme-text-primary bg-white rounded-md w-14 py-1 text-center" >{cantidad}</span>
        <button  className="border-2  border-theme-text-primary bg-theme-bg-tertiary rounded-md w-10 py-1 text-center cursor-pointer hover:scale-110 transition" onClick={() => setCantidad(cantidad + 1)}>+</button>
      </div>
      {/* Botón de agregar al carrito */}
      <button
        onClick={handleAddToCart}
        className="flex items-center justify-center border-2 rounded-md px-3 py-1.5 my-2.5 font-medium cursor-pointer mx-auto hover:scale-x-110 transition bg-theme-button w-40 sm:w-48"
      >
        Agregar al carrito
      </button>
    </>
  );
};

export default ButtonAddCart;
