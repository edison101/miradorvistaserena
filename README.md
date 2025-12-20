# 🌄 Mirador Vista Serena - Website Oficial

Sitio web oficial del **Mirador Vista Serena** ubicado en Cubará, Boyacá, Colombia.

## 🌟 Características

- 📱 **Mobile-First Design** - Optimizado para dispositivos móviles
- 🌍 **Multiidioma** - Soporte para 7 idiomas (ES, EN, FR, PT, DE, ZH, JA)
- 🎨 **Animaciones 3D** - Efectos flotantes minimalistas
- 🍽️ **Menú Digital** - ~35 productos con precios
- 🛒 **Sistema de Pedidos** - Carrito integrado con WhatsApp
- 📸 **Galería** - 13 fotos de momentos especiales
- 🎉 **Eventos y Camping** - Información de servicios especiales
- ⚡ **Performance** - Optimizado con Next.js 16

## 🚀 Comenzar

### Instalación

```bash
# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio.

### Producción

```bash
# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js 16.0.10](https://nextjs.org)
- **UI:** React 19.2.3
- **Lenguaje:** TypeScript 5
- **Estilos:** Tailwind CSS 4
- **i18n:** next-intl 4.6.1
- **State:** Zustand 5.0.9
- **Backend:** Supabase (opcional)

## 📁 Estructura del Proyecto

```
src/
├── app/                      # App Router de Next.js
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página home
│   └── globals.css          # Estilos globales
├── components/              # Componentes React
│   ├── Navigation.tsx       # Barra de navegación
│   ├── HeroSection.tsx      # Sección hero
│   ├── Footer.tsx           # Pie de página
│   ├── WhatsAppButton.tsx   # Botón flotante
│   ├── OrderCart.tsx        # Carrito de pedidos
│   └── sections/            # Secciones del sitio
├── store/                   # State management
│   └── orderStore.ts        # Store de pedidos
├── i18n/                    # Configuración i18n
│   └── request.ts
└── middleware.ts            # Middleware de Next.js

messages/                    # Traducciones
├── es.json                  # Español
├── en.json                  # English
├── fr.json                  # Français
├── pt.json                  # Português
├── de.json                  # Deutsch
├── zh.json                  # 中文
└── ja.json                  # 日本語
```

## 📞 Información de Contacto

- **Ubicación:** Cubará, Boyacá, Colombia
- **Plus Code:** 2V3P+V3
- **Teléfono/WhatsApp:** +57 322 953 7651
- **Facebook:** [@MvistaSerena](https://www.facebook.com/MvistaSerena/)
- **Google Maps:** [Ver ubicación](https://maps.app.goo.gl/DL7c2nhmw43btds88)

## 💳 Métodos de Pago

- Nequi: 322 953 7651
- Efectivo (confirmar con mesero)

## 📚 Documentación

- [PLAN_EJECUCION.md](./PLAN_EJECUCION.md) - Plan completo del proyecto
- [HISTORIAL.md](./HISTORIAL.md) - Historial detallado de desarrollo
- [Metodologia para proyectos.md](./Metodologia%20para%20proyectos.md) - Metodología de desarrollo
- [guia claude ia.md](./guia%20claude%20ia.md) - Guía para trabajar con Claude AI

## 🤝 Créditos

**Desarrollado por:** [BYTSE Solutions](https://www.bytsesolutions.com/es/)

---

© 2025 Mirador Vista Serena® - Todos los derechos reservados

Hecho con ❤️ por BYTSE
