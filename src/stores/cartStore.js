import { atom, map } from "nanostores";

export const isCartOpen = atom(false);

export const cartProducts = map({});


// funcion para agregar un item al carrito
export function addCartProduct({ id, nombre, precio, duracion }) { //parametros de la pizza
  const existingEntry = cartProducts.get()[id]; 
  if (existingEntry) { // si el item ya existe en el carrito le sumamos uno al id del item del carrito
    cartProducts.setKey(id, {
      ...existingEntry,
      cantidad: existingEntry.cantidad + 1,
    });
  } else { // si el item no existe en el carrito lo agregamos
    cartProducts.setKey(id, {
      id,
      nombre,
      precio,
      duracion,
      cantidad: 1,
    });
  }
}
      

// funcion para eliminar una cantidad de item del carrito
export function removeCartProduct({ id }) {
  const existingEntry = cartProducts.get()[id];
  if (existingEntry) { // si el item existe en el carrito restamos uno de cantidad del item
    const newQuantity = existingEntry.cantidad - 1; 
    if (newQuantity === 0) {
      // si la cantidad es igual a 0, usamos delete del objeto map para eliminar el item del carrito
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


// funcion para obtener el valor total del carrito
export function getTotalCart() {
  const items = cartProducts.get();
  return Object.values(items).reduce(
    (total, item) => total + item.precio * item.cantidad,
    0
  );
}

// funcion para limpiar o vacear el carrito
export function clearCart() {
  cartProducts.set({}); // seteamos a void el carrito
}

