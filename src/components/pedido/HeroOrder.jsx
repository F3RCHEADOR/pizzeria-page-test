import { useState, useEffect } from "react";
import { fetchOrders } from "../../api/pizzeriaApi";
import CardOrder from "./CardOrder";
import FormOrder from "./FormOrder";

const HeroOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await fetchOrders();
        const sortedResponse = response.sort((a, b) => b.id - a.id).slice(0, 5);
        setOrders(sortedResponse);
      } catch (error) {
        console.error("Error al traer las órdenes:", error);
      }
    };

    getOrders();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <CardOrder orders={orders} />
      <FormOrder />
    </div>
  );
};

export default HeroOrder;
