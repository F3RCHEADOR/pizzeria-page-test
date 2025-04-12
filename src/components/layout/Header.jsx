import React from "react";
import { Link } from "react-router-dom";
import ButtonTogleCart from "../shoppingCart/ButtonTogleCart";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 bg-white shadow-md py-4 px-6 w-full mx-2 ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo izquierdo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-red-600 hover:scale-120 transition">
            <img src="#" alt="Pizzeria" className="w-16 h-12" />
          </Link>
        </div>

        {/* Navegación central */}
        <nav className="hidden md:flex space-x-8">
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
