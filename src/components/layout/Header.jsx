import React from "react";
import { Link } from "react-router-dom";
import ButtonTogleCart from "../shoppingCart/ButtonTogleCart";
import pizzeria from "../../assets/pizzeria.png";


const Header = () => {
  return (
    <header className="fixed top-0 z-50 bg-white shadow-md py-4 px-6 w-full mx-2 ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo izquierdo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-lg group md:text-2xl font-bold text-theme-text-primary ">
            <img src={pizzeria} alt="Pizzeria" className="w-16 h-12 group-hover:scale-120 transition" />
            <span className="w-12 md:text-nowrap group-hover:text-red-500">Pizza Fantasy</span>
          </Link>
        </div>

        {/* Navegación central */}
        <nav className="flex space-x-4 md:space-x-8">
          <Link
            to="/about"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            About
          </Link>
          <Link
            to="/"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Carrito derecha */}
        <ButtonTogleCart />
      </div>
    </header>
  );
};

export default Header;
