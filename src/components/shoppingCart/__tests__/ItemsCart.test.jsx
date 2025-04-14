import { render, screen, fireEvent } from "@testing-library/react";
import ItemsCart from "../ItemsCart";
import { describe, it, expect, vi } from "vitest";



describe("ItemsCart component", () => {
  const mockRemoveItem = vi.fn();
  const mockAddItem = vi.fn();

  it("muestra el mensaje 'No hay productos en el carrito' cuando el carrito está vacío", () => {
    render(<ItemsCart items={{}} removeItem={mockRemoveItem} addItem={mockAddItem} />);
    expect(screen.getByText(/No hay productos en el carrito/i)).toBeInTheDocument();
  });

  it("muestra los productos del carrito correctamente", () => {
    const mockItems = {
      1: { id: 1, nombre: "Campesina", cantidad: 1, precio: 10 },
      2: { id: 2, nombre: "Picante", cantidad: 1, precio: 12 },
    };

    render(
      <ItemsCart items={mockItems} removeItem={mockRemoveItem} addItem={mockAddItem} />
    );

  });

  it("llama a removeItem cuando se hace clic en el botón '-'", () => {
    const mockItems = {
      1: { id: 1, nombre: "Campesina", cantidad: 1, precio: 10 },
    };

    render(
      <ItemsCart items={mockItems} removeItem={mockRemoveItem} addItem={mockAddItem} />
    );

    fireEvent.click(screen.getByText("-"));

    expect(mockRemoveItem).toHaveBeenCalledTimes(1);
  });

  it("llama a addItem cuando se hace clic en el botón '+'", () => {
    const mockItems = {
      1: { id: 1, nombre: "Campesina", cantidad: 1, precio: 10 },
    };

    render(
      <ItemsCart items={mockItems} removeItem={mockRemoveItem} addItem={mockAddItem} />
    );

    fireEvent.click(screen.getByText("+"));

    expect(mockAddItem).toHaveBeenCalledTimes(1);
  });
});
