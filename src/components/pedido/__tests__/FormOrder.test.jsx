import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormOrder from '../FormOrder'; 
import { fetchOrderById } from '../../../api/pizzeriaApi'; 
import { toast } from '@pheralb/toast';

// Mock de las dependencias
vi.mock('../../../api/pizzeriaApi');
vi.mock('@pheralb/toast');

describe('FormOrder Component', () => {
  const mockOrder = {
    id: 123,
    items: [
      { nombre: 'Pizza', cantidad: 2 },
      { nombre: 'Bebida', cantidad: 1 },
    ],
    total: 20.50,
  };

  beforeEach(() => {
    vi.clearAllMocks(); // Limpiar cualquier mock previo
  });

  it('should render the form with an input and button', () => {
    render(<FormOrder />);

    // Verifica que el formulario esté presente
    expect(screen.getByLabelText(/ID del Pedido/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Buscar Pedido/i })).toBeInTheDocument();
  });

  it('should update the input value when typing', () => {
    render(<FormOrder />);

    const input = screen.getByLabelText(/ID del Pedido/i);
    fireEvent.change(input, { target: { value: '123' } });

    expect(input.value).toBe('123');
  });

  it('should call fetchOrderById and update searchOrder when a valid order ID is submitted', async () => {
    fetchOrderById.mockResolvedValue(mockOrder); // Simula la respuesta exitosa de la API

    render(<FormOrder />);

    const input = screen.getByLabelText(/ID del Pedido/i);
    const button = screen.getByRole('button', { name: /Buscar Pedido/i });

    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.click(button);

    // Espera que se llame a la API
    await waitFor(() => expect(fetchOrderById).toHaveBeenCalledWith('123'));

    // Verifica que los detalles del pedido se muestren correctamente
    expect(screen.getByText(/Pedido encontrado con id #123/i)).toBeInTheDocument();
    expect(screen.getByText(/Pizza/)).toBeInTheDocument();
    expect(screen.getByText(/Bebida/)).toBeInTheDocument();
    expect(screen.getByText(/Total: \$20.50/i)).toBeInTheDocument();
  });

  it('should show an error toast if no order is found', async () => {
    fetchOrderById.mockResolvedValue(null); // Simula una respuesta sin resultados

    render(<FormOrder />);

    const input = screen.getByLabelText(/ID del Pedido/i);
    const button = screen.getByRole('button', { name: /Buscar Pedido/i });

    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.click(button);

    // Espera que se muestre un mensaje de error
    await waitFor(() =>
      expect(toast.error).toHaveBeenCalledWith(
        expect.objectContaining({
          text: 'No se encontró la orden con ID 123',
        })
      )
    );
  });

  it('should show an error toast if an unexpected error occurs', async () => {
    fetchOrderById.mockRejectedValue(new Error('Error inesperado')); // Simula un error en la API

    render(<FormOrder />);

    const input = screen.getByLabelText(/ID del Pedido/i);
    const button = screen.getByRole('button', { name: /Buscar Pedido/i });

    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.click(button);

    // Espera que se muestre un mensaje de error
    await waitFor(() =>
      expect(toast.error).toHaveBeenCalledWith(
        expect.objectContaining({
          text: 'Error inesperado',
        })
      )
    );
  });

  it('should clear the input field after submitting', async () => {
    fetchOrderById.mockResolvedValue(mockOrder); // Simula la respuesta exitosa de la API

    render(<FormOrder />);

    const input = screen.getByLabelText(/ID del Pedido/i);
    const button = screen.getByRole('button', { name: /Buscar Pedido/i });

    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.click(button);

    // Espera que el input se limpie
    await waitFor(() => expect(input.value).toBe(''));
  });
});
