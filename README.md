# JuegaYA! - Experiencia 3 Semana 8

Actividad de **Desarrollo Frontend I (PFY2201)**.

Este proyecto continúa el eCommerce **JuegaYA!** trabajado en la experiencia anterior. En esta etapa el sitio fue adaptado a **React** para manejar el catálogo, el carrito y distintos cambios de interfaz mediante estados.

## Funcionalidades desarrolladas

- Proyecto creado con React y Vite.
- Catálogo cargado dinámicamente desde `productos.json`.
- Uso de `useEffect` para cargar los productos al iniciar la aplicación.
- Uso de `useState` para productos, carrito, búsqueda, categoría y botón de contacto.
- Productos separados en componentes reutilizables.
- Agregar juegos al carrito.
- Quitar juegos desde la tarjeta o desde el resumen del carrito.
- Contador de productos del carrito en la barra de navegación y en el carrito.
- Cálculo automático del total.
- Renderizado condicional cuando el carrito está vacío.
- Renderizado condicional del botón: `Agregar al carrito` / `En el carrito - Quitar`.
- Búsqueda por nombre y filtrado por categorías, conservando funciones de la actividad anterior.
- Mensaje de carga y mensaje de error si falla la lectura del archivo JSON.
- Bootstrap 5 para mantener un diseño responsivo.

## Estructura principal

```text
Exp3_S8_Sumativa_3/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── public/
│   └── assets/
│       ├── data/
│       │   └── productos.json
│       └── img/
│           └── imágenes de juegos
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    └── components/
        ├── Cart.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── Navbar.jsx
        └── ProductCard.jsx
```

## Cómo ejecutar el proyecto

1. Abrir la carpeta del proyecto en Visual Studio Code.
2. Abrir una terminal en esa carpeta.
3. Instalar las dependencias:

```bash
npm install
```

4. Ejecutar el proyecto:

```bash
npm run dev
```

5. Abrir en el navegador la dirección que muestra Vite, normalmente `http://localhost:5173/`.

## GitHub Pages

El proyecto incluye la dependencia `gh-pages` y los scripts necesarios para desplegar la carpeta `dist` en una rama `gh-pages`.

Después de subir el proyecto al repositorio público, ejecutar:

```bash
npm run deploy
```

Luego, en GitHub, revisar **Settings > Pages** y confirmar que la publicación se realiza desde la rama `gh-pages`.

## Evidencias recomendadas para la entrega

- Catálogo cargado dinámicamente en React.
- Carrito vacío mostrando el mensaje correspondiente.
- Producto agregado al carrito y contador actualizado.
- Botón de un producto mostrando `En el carrito - Quitar`.
- Eliminación de un producto desde el carrito.
- Página publicada mediante GitHub Pages.
