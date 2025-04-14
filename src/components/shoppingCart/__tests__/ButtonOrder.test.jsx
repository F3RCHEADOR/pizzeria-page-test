import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import ButtonOrder from "../ButtonOrder";
import { describe, it, expect, vi, beforeEach } from "vitest";
import React from "react";
import * as pizzeriaApi from "../../../api/pizzeriaApi"; // Importamos la API para mockear la creación de órdenes
import { useCart } from "../../../hooks/useCart"; // Importamos el hook de cart para mockear su comportamiento

// Mock de las funciones que provienen del hook useCart
vi.mock("../../../hooks/useCart", () => ({
  useCart: vi.fn(),
}));

// Mock de la API
vi.mock("../../../api/pizzeriaApi", () => ({
  createOrder: vi.fn(),
}));

// Mock del toast
vi.mock("@pheralb/toast", () => ({
  toast: {
    success: vi.fn(),
  },
}));

describe("ButtonOrder component", () => {
  let mockItems;
  let mockTotalCart;
  let mockClearCart;

  beforeEach(() => {
    // Configuramos los valores que el hook useCart debe devolver
    mockItems = {
      1: { id: 1, nombre: "Pizza Margarita", precio: 10 },
    };
    mockTotalCart = 10;
    mockClearCart = vi.fn();

    useCart.mockReturnValue({
      items: mockItems,
      totalCart: mockTotalCart,
      clearCart: mockClearCart,
    });
  });

  it("muestra el botón de 'Enviar Orden' cuando hay productos en el carrito", () => {
    render(<ButtonOrder />);

    expect(screen.getByText(/Enviar Orden/i)).toBeInTheDocument();
  });

  it("no muestra el botón de 'Enviar Orden' cuando el carrito está vacío", () => {
    // Simulamos un carrito vacío
    useCart.mockReturnValue({
      items: {},
      totalCart: 0,
      clearCart: mockClearCart,
    });

    render(<ButtonOrder />);

    expect(screen.queryByText(/Enviar Orden/i)).toBeNull();
  });

  it("llama a la función createOrder y clearCart cuando el pedido se genera correctamente", async () => {
    // Mockeamos la respuesta de la API
    pizzeriaApi.createOrder.mockResolvedValue({ id: 5});

    // Renderizamos el componente
    render(<ButtonOrder />);

    // Simulamos un clic en el botón "Enviar Orden"
    window.confirm = vi.fn().mockReturnValue(true); // Simulamos que el usuario confirma
    fireEvent.click(screen.getByText(/Enviar Orden/i));

    // Esperamos a que la función createOrder se haya ejecutado
    await waitFor(() => expect(pizzeriaApi.createOrder).toHaveBeenCalledTimes(1));

    // Verificamos que la orden se haya creado con los datos correctos
    expect(pizzeriaApi.createOrder).toHaveBeenCalledWith({
      items: Object.values(mockItems),
      total: mockTotalCart,
    });

    // Verificamos que el carrito se haya limpiado
    expect(mockClearCart).toHaveBeenCalled();

   
  });

  it("no hace nada si el usuario cancela la confirmación de la orden", async () => {
    // Mockeamos el comportamiento de confirmación
    window.confirm = vi.fn().mockReturnValue(false);

    render(<ButtonOrder />);

    // Simulamos un clic en el botón "Enviar Orden"
    fireEvent.click(screen.getByText(/Enviar Orden/i));

  
  });
});
