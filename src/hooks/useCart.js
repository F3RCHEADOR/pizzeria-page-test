import { useStore } from "@nanostores/react";
import {
  isCartOpen,
  cartProducts,
  addCartProduct,
  removeCartProduct,
  getTotalCart
} from "../stores/cartStore.js";

export function useCart(){

    const isOpen = useStore(isCartOpen)
    const items = useStore(cartProducts)

    const toggleCart = () => {
        isCartOpen.set(!isCartOpen.get())
    }
    return {
        isOpen,
        items,
        toggleCart,
        addItem: addCartProduct,
        removeItem: removeCartProduct,
        totalCart: getTotalCart(),
    }
}

    
