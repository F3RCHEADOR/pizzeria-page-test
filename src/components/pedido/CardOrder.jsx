import pizzaLetrero from "../../assets/pizza-letrero.png";

const CardOrder = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return <p className="p-4">No hay órdenes disponibles.</p>;
  }

  return (
    <>
      <section>
        <h2 className="text-3xl font-bold mb-2 text-center">
          lista de ultimas órdenes
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 md:p-2 place-content-center place-items-center">
          {orders.map((order) => (
            <div key={order.id}>
              <div className="border rounded-lg shadow-md p-4 bg-white h-48 overflow-y-auto min-w-44">
                <h2 className="text-xl font-bold mb-1">Orden #{order.id}</h2>

                <div className="mt-2">
                  <h3 className="font-semibold mb-1">Items:</h3>
                  <ul className="list-disc list-inside">
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.cantidad}x {item.nombre}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 font-bold text-right">
                  Total: ${order.total.toFixed(2)}
                </div>
              </div>
              <img
                src={pizzaLetrero}
                alt="Pizza letrero"
                className="mx-auto w-24 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CardOrder;
