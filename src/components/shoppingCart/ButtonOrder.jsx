import { useCart } from "../../hooks/useCart";
import { createOrder } from "../../api/pizzeriaApi";
import { toast } from "@pheralb/toast";

import Pizzero from "../../assets/panadero.png";

const ButtonOrder = () => {
  const { items, totalCart, clearCart } = useCart();

  const generateOrder = async () => {
    if (confirm("¿Deseas enviar tu pedido al pizzero?")) {
      try {
        // Objeto a enviar a la api
        const order = {
          items: Object.values(items),
          total: totalCart,
        };

        // Enviar el pedido al backend
        const response = await createOrder(order);

        // Limpiamos el carrito si todo sale bien
        clearCart();
        toast.success({
          text: `Orden #${response.id} del dia enviada`,
          description: "✨ El Pizzero recibio tu pedido",
        });
      } catch (error) {
        console.error("Error al generar la orden:", error);
      }
    }
  };

  return (
    <>
      {Object.values(items).length > 0 && (
        <div>
          <button
            className="flex flex-col items-center justify-center mx-auto px-3 py-1.5 cursor-pointer hover:scale-110 transition bg-theme-button border-2 border-theme-text-primary rounded-md"
            onClick={generateOrder}
          >
            <img src={Pizzero} alt="pizzero" className="w-10 h-10" />
            <span className="italic font-thin">Enviar Orden</span>
          </button>
        </div>
      )}
    </>
  );
};
  

export default ButtonOrder;
