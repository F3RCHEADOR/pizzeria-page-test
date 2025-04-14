import { render, screen, waitFor } from "@testing-library/react";
import HeroBannerPizza from "../HeroBannerPizza";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import * as pizzeriaApi from "../../../api/pizzeriaApi";
import React from "react";

// Mock de las pizzas de ejemplo
const fakePizzas = [
  {
    id: 1,
    nombre: "Campesina",
    descripcion: "Una deliciosa pizza clásica",
    ingredientes: ["Tomate", "Mozzarella", "Albahaca"],
    duracion: 20,
    precio: 10,
    imagen: "fake-image-1.png",
  },
  {
    id: 2,
    nombre: "Picante",
    descripcion: "Con mucho pepperoni",
    ingredientes: ["Pepperoni", "Mozzarella"],
    duracion: 25,
    precio: 12,
    imagen: "fake-image-2.png",
  },
];

// Mockeamos el fetchPizzas
vi.spyOn(pizzeriaApi, "fetchPizzas").mockResolvedValue(fakePizzas);

beforeEach(() => {
  vi.spyOn(global.Math, "random").mockReturnValue(0); // fuerza a elegir la primera pizza
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("HeroBannerPizza component", () => {
  it("muestra el mensaje de carga inicialmente", () => {
    render(<HeroBannerPizza />);
    expect(screen.getByText(/Cargando Pizzas/i)).toBeInTheDocument();
  });

  it("renderiza correctamente la información de la pizza después de cargar", async () => {
    render(<HeroBannerPizza />);

    await waitFor(() =>
      expect(screen.getByText(/¿Que Pediras Hoy/i)).toBeInTheDocument()
    );

    // Verifica nombre y descripción de la pizza principal
    expect(screen.getByText("Campesina")).toBeInTheDocument();
    expect(screen.getByText("Una explosión de sabores del campo en cada bocado. Esta pizza combina la frescura de los vegetales de estación con un toque de sabor ahumado. Perfecta para los amantes de las verduras y los sabores naturales. El equilibrio entre la cebolla caramelizada y los pimientos rostizados crea una sinfonía de sabores que te transportará a un campo de huertos frescos.")).toBeInTheDocument();

    // Verifica ingredientes
    expect(screen.getByText("Ingredientes")).toBeInTheDocument();
    expect(screen.getByText("Tomates")).toBeInTheDocument();
    expect(screen.getByText("Cebolla")).toBeInTheDocument();
    expect(screen.getByText("Pimientos")).toBeInTheDocument();

    // Verifica duración y precio
    expect(screen.getByText(/Duración/i)).toBeInTheDocument();
   

    // Verifica que haya una pizza relacionada (CardPizza)
    expect(screen.getByText("Picante")).toBeInTheDocument();
  });
});
