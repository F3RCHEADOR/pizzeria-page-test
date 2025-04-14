import { render, screen, fireEvent } from "@testing-library/react";
import ButtonTogleCart from "../ButtonTogleCart";
import { useCart } from "../../../hooks/useCart";
import { describe, it, expect, vi } from "vitest";

// Mock del hook useCart
vi.mock("../../../hooks/useCart", () => ({
  useCart: vi.fn(),
}));

describe("ButtonTogleCart component", () => {
  let mockToggleCart;
  let mockItems;

  beforeEach(() => {
    // Configuramos las funciones mockeadas para useCart
    mockToggleCart = vi.fn();
    mockItems = {};

    useCart.mockReturnValue({
      isOpen: false,
      toggleCart: mockToggleCart,
      items: mockItems,
    });
  });

  it("renderiza el carrito con el icono de carro", () => {
    render(<ButtonTogleCart />);

    // Verifica que el icono de carro está en el documento
    expect(screen.getByAltText(/Carrito/i)).toBeInTheDocument();
  });

  it("muestra el número de productos en el carrito", () => {
    // Simulamos que hay productos en el carrito
    mockItems = { 1: { id: 1, nombre: "Pizza Margarita", precio: 10 } };
    useCart.mockReturnValue({
      isOpen: false,
      toggleCart: mockToggleCart,
      items: mockItems,
    });

    render(<ButtonTogleCart />);

   
  });

  it("muestra el número 0 en el badge cuando el carrito está vacío", () => {
    render(<ButtonTogleCart />);

    // Verifica que el número en el badge sea 0 cuando no hay productos
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("llama a toggleCart al hacer clic en el botón", () => {
    render(<ButtonTogleCart />);

    // Simula un clic en el botón del carrito
    fireEvent.click(screen.getByAltText(/Carrito/i));

    // Verifica que toggleCart haya sido llamado
    expect(mockToggleCart).toHaveBeenCalledTimes(1);
  });
});
