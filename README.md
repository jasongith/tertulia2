# La Tertulia - Carta Digital

Carta digital moderna y elegante para el bar "La Tertulia", desarrollada con React, Vite y TailwindCSS.

## 🚀 Características

- **Mobile-first**: Diseño optimizado para móviles con soporte para tablet y desktop
- **Ligera y rápida**: Construida con Vite para máximo rendimiento
- **Estilo cálido**: Paleta de colores inspirada en cafetería (tonos café, ámbar, crema)
- **Animaciones suaves**: Transiciones y fade-ins elegantes sin sobrecargar
- **Fácil de actualizar**: Todos los productos en `src/data/menu.json`
- **Lista para QR**: Web estática deployable en GitHub Pages

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🏗️ Build para producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

## 👀 Preview del build

```bash
npm run preview
```

## 📁 Estructura del proyecto

```
la-tertulia/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header fijo con nombre del bar
│   │   ├── CategorySection.jsx # Sección de categoría
│   │   └── MenuItem.jsx         # Item individual de bebida
│   ├── data/
│   │   └── menu.json           # Datos de la carta (fácil de editar)
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Estilos globales
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Personalización

### Actualizar la carta

Edita el archivo `src/data/menu.json` para cambiar productos, precios o categorías:

```json
{
  "categories": [
    {
      "id": 1,
      "title": "Nombre de la categoría",
      "items": [
        {
          "name": "Nombre del producto",
          "description": "Descripción",
          "price": "2.50"
        }
      ]
    }
  ]
}
```

### Colores

Los colores están definidos en `tailwind.config.js` bajo el tema `tertulia`:

- `cream`, `beige`, `tan`: tonos claros
- `brown`, `dark-brown`, `coffee`: tonos oscuros
- `amber`: acento dorado
- `warm-gray`: texto secundario

### Tipografía

- **Títulos**: Cormorant Garamond (serif elegante)
- **Texto**: Lato (sans-serif legible)

## 🌐 Deploy en GitHub Pages

1. Actualiza el `base` en `vite.config.js` si tu repo no es la raíz:

   ```js
   base: "/nombre-del-repo/";
   ```

2. Build y deploy:
   ```bash
   npm run build
   # Sube la carpeta dist a tu hosting
   ```

## 📱 Optimizado para

- ✅ Móviles (diseño principal)
- ✅ Tablets
- ✅ Desktop
- ✅ Escaneo de QR
- ✅ Performance

---

**La Tertulia** - Donde cada café cuenta una historia ☕
