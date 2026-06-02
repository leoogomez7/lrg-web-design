# 🎨 LRG Web Design

**LRG Web Design** es una plataforma moderna dedicada al diseño y desarrollo web profesional. El proyecto expone un portafolio de servicios, metodologías de trabajo digitales y soluciones optimizadas para una experiencia de usuario (UX) ágil, interactiva y de alto rendimiento.

🌐 **Sitio Web Oficial:** [lrg-web-design.vercel.app](https://lrg-web-design.vercel.app)

---

# 🚀 ¿Qué es LRG Web Design?

Esta plataforma funciona como la identidad comercial y el portafolio digital del estudio. Está diseñada estratégicamente para maximizar la conversión de clientes, la velocidad de carga y la adaptabilidad móvil a través de las siguientes características fundamentales:

* **Optimización de Conversión**: Estructura orientada a presentar servicios de diseño de manera clara, facilitando la retención de usuarios y el contacto directo.
* **Rendimiento UI Excepcional**: Renderizado inmediato de elementos visuales dinámicos e interactivos sin penalizar la velocidad de carga gracias a componentes optimizados.
* **Enfoque Mobile-First**: Adaptabilidad fluida en cualquier tamaño de pantalla, asegurando una navegación intuitiva tanto en ordenadores como en dispositivos móviles.
* **Infraestructura Edge**: Servido globalmente a través de redes perimetrales distribuidas, lo que garantiza tiempos de respuesta mínimos e inmunidad frente a picos de tráfico.

---

# 🛠️ Stack Tecnológico

El proyecto está construido bajo una infraestructura ágil, modular y de tipado seguro para garantizar que el mantenimiento del diseño interactivo sea rápido y libre de errores semánticos.

### Tecnologías Core (Frontend)
### Frontend & UI
- **React.js & TypeScript**: Lógica de cliente robusta, escalable y libre de errores en tiempo de compilación.
- **Vite.js**: Servidor de desarrollo instantáneo y compilación optimizada para producción.
- **Tailwind CSS**: Estructura de diseño fluida y Mobile-First para garantizar adaptabilidad móvil.
- **shadcn/ui**: Sistema de diseño consistente mediante componentes modulares.

### Entorno de Ejecución & Dependencias
- **Bun**: Gestor de paquetes y motor de ejecución elegido por su alta velocidad de instalación.
- **Node.js & NPM**: Base estándar del ecosistema para la ejecución de scripts.

### Calidad de Código
- **ESLint**: Linter modular configurado con reglas estrictas de desarrollo moderno.
- **Prettier**: Control estético automatizado para layouts, sangrías y estilos limpios.

### Infraestructura & Cloud
- **Cloudflare Workers (`wrangler`)**: Configuración perimetral para lógica Serverless y enrutamiento rápido en el Edge.
- **Vercel Edge Network**: Distribución global del frontend con compresión automática y tiempos de carga mínimos.

---

# ⚙️ Requisitos Previos

Necesitas tener instalado **Bun** en tu entorno local:

```bash
# Comando de instalación (macOS/Linux/WSL)
curl -fsSL https://bun.sh | bash
```

---

# 🚀 Instalación y Uso Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com
   cd lrg-web-design
   ```

2. **Instalar dependencias:**
   ```bash
   bun install
   ```

3. **Ejecutar el servidor local:**
   ```bash
   bun run dev
   ```

4. **Compilar el sitio para producción:**
   ```bash
   bun run build
   ```

---

# 📁 Estructura del Proyecto

```bash
├── public/              # Recursos estáticos (logos, iconos, vectores)
├── src/                 # Código fuente de las vistas y componentes de diseño
├── .gitignore           # Exclusiones de control de versiones
├── .prettierrc          # Reglas del formateador estético
├── components.json      # Configuración de diseño UI unificado
├── eslint.config.js     # Reglas de validación del linter
├── index.html           # Archivo raíz HTML5
├── tsconfig.json        # Configuración del compilador TypeScript
├── vercel.json          # Reglas de distribución y headers en Vercel
├── vite.config.ts       # Configuración del entorno de construcción Vite
└── wrangler.jsonc       # Configuración perimetral de Cloudflare Pages/Workers
```
