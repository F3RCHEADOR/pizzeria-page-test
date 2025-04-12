const ItemsCart = ({ items, removeItem, addItem }) => {
  console.log(items);
  return (
    <article className="w-full p-4 ">
      <div className="flex flex-col gap-y-4">
        {Object.values(items).length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          Object.values(items).map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-x-2.5 border-b-2 border-dashed"
            >
              <img src={item.imagen} className="w-16 h-16 object-cover" />
              <div className="flex flex-col items-start">
                <h2 className="mb-2">Pizza {item.nombre}</h2>
                <div className="flex items-center gap-x-4">
                  <button
                    onClick={() => removeItem(item)} // Decrecer la cantidad
                    className="bg-red-400/90 rounded px-2 py-1 cursor-pointer hover:scale-105 transition"
                  >
                    -
                  </button>
                  <span className="bg-white w-6 text-center py-1 rounded-md">{item.cantidad}</span>
                  <button
                    onClick={() => addItem(item)} // Incrementar la cantidad
                    className="bg-theme-bg-tertiary rounded px-2 py-1 cursor-pointer hover:scale-105 transition"
                  >
                    +
                  </button>
                </div>
                <span className="text-center text-sm my-2">Costo total: ${item.precio * item.cantidad}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </article>
  );
};

export default ItemsCart;
