import { useStore } from "@nanostores/react";
import { isCartOpen } from "../../stores/cartStore";

export default function ShopSideBar() {
  const $isCartOpen = useStore(isCartOpen);

  return (
    <aside
      className={`fixed ${
        $isCartOpen ? "right-0" : "-right-56"
      } top-20 h-dvh border-l-2 w-56 transition-all bg-gray-100`}
    ></aside>
  );
}
