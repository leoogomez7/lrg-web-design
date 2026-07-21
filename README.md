# 🎨 LRG Web Design [](https://github.com/leoogomez7/lrg-web-design#-lrg-web-design)

**LRG Web Design** es una plataforma moderna dedicada al diseño y desarrollo web profesional. El proyecto expone un portafolio de servicios, metodologías de trabajo digitales y soluciones optimizadas para una experiencia de usuario (UX) ágil, interactiva y de alto rendimiento.

🌐 **Sitio Web Oficial:** [lrg-web-design.vercel.app](https://lrg-web-design.vercel.app/)

---

# 💡 ¿No eres programador? Te lo explicamos en simple

Si no tienes experiencia en informática o diseño web, aquí te explicamos fácilmente de qué trata esta página:

- **¿De qué se trata la página?**: Es la carta de presentación y el sitio oficial de **LRG Web Design**, un estudio especializado en crear páginas y aplicaciones web a medida para marcas, negocios y profesionales.
- **¿Para qué sirve?**: Permite a futuros clientes explorar los servicios de desarrollo que ofrece el estudio, ver cómo trabajan, conocer la calidad de sus diseños e iniciar contacto para solicitar un sitio web.
- **¿Por qué es rápida e interactiva?**: Utiliza tecnologías de última generación para que las animaciones, páginas y menús carguen al instante sin hacerte esperar ni recargar la pantalla.
- **¿Cómo se ve en celulares?**: Se diseñó con un enfoque *Mobile-First*, lo que garantiza que la navegación, los botones y la tipografía se adapten de forma fluida a pantallas de teléfonos móviles, tablets o computadoras.

---

# 🚀 ¿Qué es LRG Web Design? [](https://github.com/leoogomez7/lrg-web-design#-qu%C3%A9-es-lrg-web-design)

Esta plataforma funciona como la identidad comercial y el portafolio digital del estudio. Está diseñada estratégicamente para maximizar la conversión de clientes, la velocidad de carga y la adaptabilidad móvil a través de las siguientes características fundamentales:

- **Optimización de Conversión**: Estructura orientada a presentar servicios de diseño de manera clara, facilitando la retención de usuarios y el contacto directo.
- **Rendimiento UI Excepcional**: Renderizado inmediato de elementos visuales dinámicos e interactivos sin penalizar la velocidad de carga gracias a componentes optimizados.
- **Enfoque Mobile-First**: Adaptabilidad fluida en cualquier tamaño de pantalla, asegurando una navegación intuitiva tanto en ordenadores como en dispositivos móviles.
- **Infraestructura Edge**: Servido globalmente a través de redes perimetrales distribuidas, lo que garantiza tiempos de respuesta mínimos e inmunidad frente a picos de tráfico.

---

# 🛠️ Stack Tecnológico [](https://github.com/leoogomez7/lrg-web-design#%EF%B8%8F-stack-tecnol%C3%B3gico)

El proyecto está construido bajo una infraestructura ágil, modular y de tipado seguro para garantizar que el mantenimiento del diseño interactivo sea rápido y libre de errores semánticos.

### Frontend & UI [](https://github.com/leoogomez7/lrg-web-design#frontend--ui)
- **React.js & TypeScript**: Lógica de cliente robusta, escalable y libre de errores en tiempo de compilación.
- **Vite.js**: Servidor de desarrollo instantáneo y compilación optimizada para producción.
- **Tailwind CSS**: Estructura de diseño fluida y *Mobile-First* para garantizar adaptabilidad móvil.
- **shadcn/ui & Lucide Icons**: Sistema de diseño consistente mediante componentes modulares e iconografía clara.

### Entorno de Ejecución & Dependencias [](https://github.com/leoogomez7/lrg-web-design#entorno-de-ejecuci%C3%B3n--dependencias)
- **Bun**: Gestor de paquetes y motor de ejecución elegido por su alta velocidad de instalación.
- **Node.js & NPM**: Base estándar del ecosistema para la ejecución de scripts.

### Calidad de Código [](https://github.com/leoogomez7/lrg-web-design#calidad-de-c%C3%B3digo)
- **ESLint**: Linter modular configurado con reglas estrictas de desarrollo moderno.
- **Prettier**: Control estético automatizado para layouts, sangrías y estilos limpios.

### Infraestructura & Cloud [](https://github.com/leoogomez7/lrg-web-design#infraestructura--cloud)
- **Cloudflare Workers (wrangler)**: Configuración perimetral para lógica Serverless y enrutamiento rápido en el Edge.
- **Vercel Edge Network**: Distribución global del frontend con compresión automática y tiempos de carga mínimos.

---

# ⚙️ Requisitos Previos [](https://github.com/leoogomez7/lrg-web-design#%EF%B8%8F-requisitos-previos)

Necesitas tener instalado **Bun** en tu entorno local:

```bash
# Comando de instalación (macOS/Linux/WSL)
curl -fsSL [https://bun.sh](https://bun.sh) | bash

🚀 Instalación y Uso Local 
Clonar el repositorio:

Bash
git clone [https://github.com/leoogomez7/lrg-web-design.git](https://github.com/leoogomez7/lrg-web-design.git)
cd lrg-web-design
Instalar dependencias:

Bash
bun install
Ejecutar el servidor local:

Bash
bun run dev
Compilar el sitio para producción:

Bash
bun run build
📁 Estructura del Proyecto 
Plaintext
├── public/              # Recursos estáticos (logos, iconos, vectores)
├── src/                 # Código fuente de las vistas y componentes de diseño
│   ├── assets/          # Imágenes y recursos multimedia del estudio
│   ├── components/      # Componentes UI (secciones, llamadas a la acción, layouts)
│   └── App.tsx          # Punto de entrada principal de la interfaz
├── .gitignore           # Exclusiones de control de versiones
├── .prettierrc          # Reglas del formateador estético
├── components.json      # Configuración de diseño UI unificado
├── eslint.config.js     # Reglas de validación del linter
├── index.html           # Archivo raíz HTML5
├── package.json         # Scripts de ejecución y dependencias del proyecto
├── tsconfig.json        # Configuración del compilador TypeScript
├── vercel.json          # Reglas de distribución y headers en Vercel
├── vite.config.ts       # Configuración del entorno de construcción Vite
└── wrangler.jsonc       # Configuración perimetral de Cloudflare Pages/Workers
