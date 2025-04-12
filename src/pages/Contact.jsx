export default function Contact() {
    return (
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Contacto</h1>
        
        <p className="mb-2">📞 Teléfono: 123-456-7890</p>
        <p className="mb-2">📧 Correo: contacto@ejemplo.com</p>
        <p className="mb-4">📍 Dirección: Calle Falsa 123, Ciudad</p>
  
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Tu nombre"
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Tu mensaje"
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-theme-button/80 text-theme-text-primary py-2 px-4 rounded hover:bg-theme-button hover:scale-x-110 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }
  