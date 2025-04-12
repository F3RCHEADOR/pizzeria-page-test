import { atom, map } from "nanostores";

export const isCartOpen = atom(false);

export const cartProducts = map({});

export function addCartProduct({ id, nombre, precio, imagen, duracion }) {
  const existingEntry = cartProducts.get()[id];
  if (existingEntry) {
    cartProducts.setKey(id, {
      ...existingEntry,
      cantidad: existingEntry.cantidad + 1,
    });
  } else {
    cartProducts.setKey(id, {
      id,
      nombre,
      precio,
      imagen,
      duracion,
      cantidad: 1,
    });
    console.log(cartProducts.get());
  }
}

export function removeCartProduct({ id, nombre, precio, imagen, duracion }) {
  const existingEntry = cartProducts.get()[id];
  if (existingEntry) {
    const newQuantity = existingEntry.cantidad - 1;
    if (newQuantity === 0) {
      // Usamos delete del objeto map para eliminar la entrada
      const updatedCart = { ...cartProducts.get() };
      delete updatedCart[id]; // Eliminamos la clave del objeto
      cartProducts.set(updatedCart); // Actualizamos el mapa con el carrito modificado
    } else {
      cartProducts.setKey(id, {
        ...existingEntry,
        cantidad: newQuantity,
      });
    }
  }
}

export function getTotalCart() {
  const items = cartProducts.get();
  return Object.values(items).reduce(
    (total, item) => total + item.precio * item.cantidad,
    0
  );
}

