import React, { useState } from "react";
import { fetchOrderById } from "../../api/pizzeriaApi";
import { toast } from "@pheralb/toast";

const FormOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [searchOrder, setSearchOrder] = useState(null);

  const getOrderById = async (orderId) => {
    try {
      const response = await fetchOrderById(orderId);

      if (!response) {
        setSearchOrder(null);
        toast.error({
          text: `No se encontró la orden con ID ${orderId}`,
          description: "Intenta con otro número",
        });
        return;
      }

      setSearchOrder(response);
      toast.success({
        text: `Orden #${orderId} encontrada`,
        description: "Mostrando info del pedido",
      });
    } catch (error) {
      console.error("Error al buscar el pedido:", error);
      setSearchOrder(null);
      toast.error({
        text: `Error inesperado`,
        description: "Intenta más tarde o revisa tu conexión",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderId.trim() !== "") {
      getOrderById(orderId);
      setOrderId(""); // Limpia el input si deseas
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-theme-bg-secondary/50 shadow-lg rounded-md shadow-theme-button mt-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-xl font-semibold text-center">Buscar Pedido</h3>
        <div className="flex flex-col items-center justify-center">
          <label
            htmlFor="orderId"
            className="block text-sm font-medium text-gray-700"
          >
            ID del Pedido
          </label>
          <input
            type="number"
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="mt-3 block w-full rounded-md border-2 border-theme-text-primary p-1 shadow-sm text-center"
            placeholder="Digite ID"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-theme-text-primary bg-theme-button/80 hover:bg-theme-button cursor-pointer hover:scale-x-105 transition focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Buscar Pedido
        </button>
      </form>

      {searchOrder && (
        <div className="mt-6 p-4 bg-white rounded-md shadow">
          <h4 className="font-bold mb-2">
            Pedido encontrado con id #{searchOrder.id}
          </h4>

          <div className="mt-2">
            <h3 className="font-semibold mb-1">Items:</h3>
            <ul className="list-disc list-inside">
              {searchOrder.items.map((item, index) => (
                <li key={index}>
                  {item.cantidad}x {item.nombre}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 font-bold text-right">
            Total: ${searchOrder.total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormOrder;
