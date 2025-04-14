import { render, screen } from "@testing-library/react";
import CardOrder from "../CardOrder"; 


vi.mock("../../../assets/pizza-letrero.png", () => ({
    default: "http://localhost:3000/assets/pizzaLetreroMock",
  }));
  

describe("CardOrder", () => {
  test("debe mostrar el mensaje cuando no hay órdenes", () => {
    render(<CardOrder orders={[]} />);

    expect(screen.getByText(/No hay órdenes disponibles/i)).toBeInTheDocument();
  });

  test("debe mostrar las órdenes correctamente cuando hay órdenes", () => {
    const orders = [
      {
        id: "1",
        items: [{ nombre: "Pizza", cantidad: 2 }],
        total: 20.0,
      },
      {
        id: "2",
        items: [{ nombre: "Tacos", cantidad: 3 }],
        total: 15.0,
      },
    ];

    render(<CardOrder orders={orders} />);

    expect(screen.getByText(/lista de ultimas órdenes/i)).toBeInTheDocument();
    expect(screen.getByText(/Orden #1/i)).toBeInTheDocument();
    expect(screen.getByText(/Pizza/i)).toBeInTheDocument();
    expect(screen.getByText(/\$20.00/i)).toBeInTheDocument();
    expect(screen.getByText(/Orden #2/i)).toBeInTheDocument();
    expect(screen.getByText(/Tacos/i)).toBeInTheDocument();
    expect(screen.getByText(/\$15.00/i)).toBeInTheDocument();
  });

  test("debe mostrar la imagen de pizza letrero para cada orden", () => {
    const orders = [
      {
        id: "1",
        items: [{ nombre: "Pizza", cantidad: 2 }],
        total: 20.0,
      },
    ];

    render(<CardOrder orders={orders} />);

    const img = screen.getByAltText(/Pizza letrero/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveClass("mx-auto w-24 object-cover rounded-lg");
    expect(img.src).toContain("pizzaLetreroMock");
  });
});
