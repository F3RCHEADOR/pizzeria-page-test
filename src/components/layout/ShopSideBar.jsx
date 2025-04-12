import ItemsCart from "../shoppingCart/ItemsCart";
import { useCart } from "../../hooks/useCart.js";

export default function ShopSideBar() {
  const { isOpen, items, addItem, removeItem, totalCart } = useCart();

  return (
    <aside
      className={`fixed ${
        isOpen ? "right-0" : "-right-56"
      } top-20 h-dvh border-l-2 w-56 transition-all bg-gray-100 z-40`}
    >
      <ItemsCart  items={items} addItem={addItem} removeItem={removeItem}  />
      <span className="flex items-center justify-center mx-auto text-center my-4">Total: {totalCart}</span>
    </aside>
  );
}
     
