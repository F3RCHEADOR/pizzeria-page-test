# Sistema Web para Pizzería

**Descripción**  
Este es un sistema web para una pizzería que permite la creación de pedidos (orders) y búsquedas de pedidos. El diseño es completamente **responsive** . Este proyecto fue realizado como una prueba técnica para demostrar mis habilidades en el desarrollo web.

---

## Tabla de Contenidos

1. [Instalación](#instalación)
2. [Uso](#uso)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)


---

## Instalación

Para poder ejecutar este proyecto localmente, sigue los siguientes pasos:

### **Requisitos Previos**

- **Node.js**: Asegúrate de tener instalada la última versión de Node.js.
- **npm** o **yarn**: Gestores de paquetes de Node.js.

### **Pasos para instalar**

1. Clona el repositorio:

   ```bash
   git clone https://github.com/F3RCHEADOR/pizzeria-page-test
   npm install
  2. Configurar env
  -  Crear archivo env
  - Agregar **VITE_API_BASE_URL**=http://localhost:5000/api o otra dirección que tengas dispuesto para la api.
   


## Uso

Este proyecto permite a los usuarios:

1.  Ver los productos de la pizzería disponibles.
    
2.  Agregar productos al carrito.
    
3.  Realizar pedidos y enviarlos al pizzero.
    
4.  Interactuar con un carrito de compras.
    
5.  Buscar productos en el menú.

## Tecnologías Utilizadas

Este proyecto fue desarrollado utilizando las siguientes tecnologías:

-   **Frontend**:
    
    -   **React**: Para crear la interfaz de usuario interactiva.
        
    -   **Tailwind CSS**: Para el diseño responsivo y estilización rápida.
        
    -   **React Router DOM**: Para la navegación entre las distintas páginas.
        
    -   **Nanostore**: Para el manejo del estado global.
        
    -   **Axios**: Para realizar peticiones HTTP al backend.
        
    -   **@pheralb/toast**: Para mostrar notificaciones (toasts) al usuario.
        
-   **Backend**:
    
    -   **Node.js**: Para el servidor.
        
    -   **Express**: Para gestionar las rutas del servidor y las peticiones HTTP.
