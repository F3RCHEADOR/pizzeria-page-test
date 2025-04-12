import { useCart } from "../../hooks/useCart";
import Pizzero from "../../assets/panadero.png";

const ButtonOrder = () => {
  const { items } = useCart();
  return Object.values(items).length > 0 ? (
    <div>
      <button
        className="flex flex-col items-center justify-center mx-auto px-3 py-1.5 cursor-pointer hover:scale-110 transition bg-theme-button border-2 border-theme-text-primary rounded-md"
        onClick={() => alert("Orden Enviada")}
      >
        <img src={Pizzero} alt="pizzero" className="w-10 h-10" />
        <span className="italic font-thin">Enviar Orden</span>
      </button>
    </div>
  ) : null;
};

export default ButtonOrder;
