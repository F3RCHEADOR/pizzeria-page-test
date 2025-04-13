import { useStore } from "@nanostores/react";

import { //importamos la funciones de la store/cartStore,js
  isCartOpen,
  cartProducts,
  addCartProduct,
  removeCartProduct,
  getTotalCart,
  clearCart
} from "../stores/cartStore.js";

export function useCart(){

    const isOpen = useStore(isCartOpen) //usamos el store para saber si el carrito esta abierto o cerrado
    const items = useStore(cartProducts) //usamos el store para obtener los items del carrito

    const toggleCart = () => { 
        isCartOpen.set(!isCartOpen.get()) //cambiamos el estado del carrito 
    }
    return { 
        isOpen,
        items,
        toggleCart,
        addItem: addCartProduct,
        removeItem: removeCartProduct,
        totalCart: getTotalCart(),
        clearCart: clearCart,
    }
}

    
