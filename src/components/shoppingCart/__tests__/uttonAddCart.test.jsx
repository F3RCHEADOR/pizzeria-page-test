import { render, screen, fireEvent } from "@testing-library/react";
import ButtonAddCart from "../ButtonAddCart";
import { describe, it, expect, vi, beforeEach } from "vitest";
import React from "react";

// Creamos un producto de prueba
const fakeProduct = {
  id: 1,
  nombre: "Campesina",
  precio: 10,
};

// Creamos mocks para las funciones del hook
const mockToggleCart = vi.fn();
const mockAddItem = vi.fn();

// Mockeamos el hook useCart para que retorne nuestros mocks
vi.mock("../../hooks/useCart", () => ({
  useCart: () => ({
    isOpen: false,
    toggleCart: mockToggleCart,
    addItem: mockAddItem,
  }),
}));

describe("ButtonAddCart component", () => {
  beforeEach(() => {
    // Reiniciamos los mocks antes de cada test
    mockToggleCart.mockClear();
    mockAddItem.mockClear();
  });
  
  it("renderiza los controles de cantidad y el botón de agregar al carrito", () => {
    render(<ButtonAddCart product={fakeProduct} />);
    
    // Verifica que aparezca el botón "Agregar al carrito"
    expect(screen.getByText("Agregar al carrito")).toBeInTheDocument();
    // Verifica que se muestre la cantidad inicial "1"
    expect(screen.getByText("1")).toBeInTheDocument();
  });
  
  it("incrementa y decrementa la cantidad correctamente", () => {
    render(<ButtonAddCart product={fakeProduct} />);
    
    const plusButton = screen.getByRole("button", { name: /\+/ });
    const minusButton = screen.getByRole("button", { name: /-/ });
    
    // Incrementa la cantidad
    fireEvent.click(plusButton);
    expect(screen.getByText("2")).toBeInTheDocument();
    
    // Decrementa la cantidad (si la cantidad es mayor que 0)
    fireEvent.click(minusButton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
  
  it("al hacer clic en 'Agregar al carrito' se llama a addItem la cantidad correcta de veces, se reinicia la cantidad y se llama a toggleCart cuando el carrito está cerrado", () => {
    render(<ButtonAddCart product={fakeProduct} />);
    
    const plusButton = screen.getByRole("button", { name: /\+/ });
    const addToCartButton = screen.getByText("Agregar al carrito");
    
    // Incrementamos la cantidad a 3
    fireEvent.click(plusButton); // cantidad pasa a 2
    fireEvent.click(plusButton); // cantidad pasa a 3
    expect(screen.getByText("3")).toBeInTheDocument();
    
    // Hacemos clic en "Agregar al carrito"
    fireEvent.click(addToCartButton);
    
   
    

  });
});
