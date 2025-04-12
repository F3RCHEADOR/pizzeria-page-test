export default function ButtonTogleCart() {
  return (
    <div className="flex items-center">
      <button className="relative cursor-pointer hover:scale-120 transition">
        <img src="#" alt="Carrito" className="w-10 h-10" />

        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          0
        </span>
      </button>
    </div>
  );
}
