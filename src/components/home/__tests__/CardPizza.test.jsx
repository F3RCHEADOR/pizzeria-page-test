import { render, screen, fireEvent } from "@testing-library/react";
import CardPizza from "../CardPizza";
import pizzaImages from "../../../utils/images";
import { describe, it, expect, vi } from "vitest";

describe("CardPizza component", () => {
  const fakePizza = {
    id: "1",
    nombre: "Pizza Napolitana",
    descripcion: "Una pizza clásica con tomate y mozzarella",
  };

  const mockSetCurrentPizza = vi.fn();

  it("renderiza correctamente la información de la pizza", () => {
    render(<CardPizza pizza={fakePizza} setCurrentPizza={mockSetCurrentPizza} />);

    // Verificamos que el nombre y la descripción estén en el documento
    expect(screen.getByText(fakePizza.nombre)).toBeInTheDocument();
    expect(screen.getByText(fakePizza.descripcion)).toBeInTheDocument();

    // Verificamos que la imagen esté presente
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", pizzaImages[fakePizza.id]);
    expect(image).toHaveAttribute("alt", fakePizza.nombre);
  });

  it("llama a setCurrentPizza cuando se hace click en el botón", () => {
    render(<CardPizza pizza={fakePizza} setCurrentPizza={mockSetCurrentPizza} />);

    const button = screen.getByRole("button", { name: /ver pizza/i });
    fireEvent.click(button);

    expect(mockSetCurrentPizza).toHaveBeenCalledTimes(1);
    expect(mockSetCurrentPizza).toHaveBeenCalledWith(fakePizza);
  });
});
