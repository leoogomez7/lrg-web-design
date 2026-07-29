import { motion } from "framer-motion";
import { useState } from "react";
import { MousePointerClick, ExternalLink, FolderOpen } from "lucide-react";
import digitalCommerceHub from "@/assets/Proyecto-Digital-Commerce-Hub.jpg";
import bodegonDelicia from "@/assets/Proyecto-Bodegon-Delicia.jpg";
import miTurnoYa from "@/assets/Proyecto-Mi-Turno-Ya.jpg";
import mandaRemito from "@/assets/Proyecto-Manda-Remito.jpg";
import revendedorDigital from "@/assets/Proyecto-Revendedor-Digital.jpg";
import laBandaGaming from "@/assets/Proyecto-La-Banda-Gaming.jpg";

type Project = {
  name: string;
  type: string;
  url: string;
  image: string;
  description: string;
  tech: string[];
  accent: string;
  available: boolean;
  stack: string;
};

const projects: Project[] = [
  {
    name: "Digital Commerce Hub",
    type: "Dashboard",
    url: "https://digital-commerce-hub-main.vercel.app",
    image: digitalCommerceHub,
    description:
      "Sistema completo para la gestión de ventas de productos y servicios digitales. Control total de clientes, gastos y ganancias automáticas.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-violet/40 to-cyan/20",
    available: true,
    stack: "dashboard",
  },
  {
    name: "Bodegón Delicia",
    type: "Web Gastronómica",
    url: "https://bodegon-delicia-web.vercel.app",
    image: bodegonDelicia,
    description:
      "Página web gastronómica moderna diseñada para potenciar la presencia digital del restaurante.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-gold/40 to-orange-500/20",
    available: true,
    stack: "",
  },
  {
    name: "Mi Turno Ya",
    type: "Reservación de turnos",
    url: "https://mi-turno-ya-reservado.vercel.app",
    image: miTurnoYa,
    description:
      "Plataforma de gestión de turnos online. Permite reservar, modificar y cancelar citas con profesionales en pocos clics.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-cyan/40 to-violet/20",
    available: true,
    stack: "",
  },
  {
    name: "Manda Remito",
    type: "Generador de Remitos",
    url: "https://manda-remito.vercel.app",
    image: mandaRemito,
    description:
      "Generador simple de remitos con logos e información de la empresa. Exportable y listo para enviar al cliente.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-gold/40 to-amber-500/20",
    available: true,
    stack: "",
  },
  {
    name: "Revendedor Digital",
    type: "Tienda Ecommerce",
    url: "https://web-products-amber.vercel.app",
    image: revendedorDigital,
    description:
      "Plataforma e-commerce multi-proveedor donde los usuarios pueden registrarse, publicar y vender sus propios productos y servicios.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-emerald-500/30 to-cyan/20",
    available: true,
    stack: "",
  },
  {
    name: "La Banda Gaming",
    type: "Simulador de Torneos Gaming",
    url: "https://la-banda-gaming.vercel.app",
    image: laBandaGaming,
    description:
      "Simulador de torneos gaming entre amigos para PlayStation y competencias. Ligas, grupos, llaves y resultados en tiempo real.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-violet/40 to-pink-500/20",
    available: true,
    stack: "",
  },
];

const allSites = [
  { name: "Bodegón Delicia", url: "https://bodegon-delicia-web.vercel.app"},
  { name: "Digital Commerce", url: "https://digital-commerce-hub-main.vercel.app"},
  { name: "Mi Turno Ya", url: "https://mi-turno-ya-reservado.vercel.app"},
  { name: "Manda Remito", url: "https://manda-remito.vercel.app"},
  { name: "Revendedor Digital", url: "https://web-products-amber.vercel.app"},
  { name: "La Banda Gaming", url: "https://la-banda-gaming.vercel.app"},
];

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [imagePreviewOpen, setImagePreviewOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const modalSections = [
    {
      label: "¿De qué se trata la página?",
      content:
        "Texto de prueba: describe brevemente el propósito y el enfoque principal del sitio.",
    },
    {
      label: "¿Para qué sirve?",
      content:
        "Texto de prueba: explica el beneficio práctico que ofrece la página a los usuarios.",
    },
    {
      label: "¿Por qué es rápida e interactiva?",
      content:
        "Texto de prueba: menciona el rendimiento y las interacciones fluidas del sitio.",
    },
    {
      label: "¿Cómo se ve en celulares y tablets?",
      content:
        "Texto de prueba: indica que el diseño es responsive y se adapta a todos los dispositivos.",
    },
    {
      label: "Caracteristicas",
      content:
        "Texto de prueba: lista algunas características clave que hacen único al proyecto.",
    },
    {
      label: "Stack Tecnológico",
      content:
        "Texto de prueba: menciona las tecnologías usadas para construir el proyecto.",
    },
  ];

  const getProjectIntro = (project: Project | null) => {
    if (!project) return "";
    if (project.name === "Digital Commerce Hub") {
      return (
        `**Digital Commerce Hub** es una plataforma web moderna e integral diseñada para centralizar la gestión, exhibición y operaciones de comercio digital. El proyecto combina un diseño limpio y profesional con una experiencia de usuario (UX) ágil, orientada a la conversión de clientes y la optimización de ventas en línea.`
      );
    }
    if (project.name === "Bodegón Delicia") {
      return (
        `**Bodegón Delicia** es una plataforma web moderna desarrollada para presentar la propuesta gastronómica, menú interactivo, historia y canales de reserva del restaurante **Bodegón Delicia**. El sitio combina una estética atractiva y tradicional con un rendimiento web ágil pensado para comensales.`
      );
    }

    if (project.name === "Mi Turno Ya") {
      return (
        `**Mi Turno Ya - Reservado** es una plataforma web moderna e interactiva diseñada para simplificar el proceso de reserva, consulta y gestión de turnos online. La aplicación permite a los usuarios agendar citas de manera ágil, seleccionar fechas y horarios disponibles y confirmar sus turnos sin complicaciones.`
      );
    }

    if (project.name === "Manda Remito") {
      return (
        `**Manda Remito** es una herramienta web moderna diseñada para agilizar la generación, gestión y envío de remitos y facturas comerciales. La plataforma ofrece una interfaz intuitiva para administrar comprobantes digitales, optimizar procesos de cobranza/entrega y mejorar la experiencia operativa de comercios y profesionales.`
      );
    }

    if (project.name === "La Banda Gaming") {
      return (
        `**La Banda Gaming** es una plataforma web moderna e interactiva diseñada para comunidades de videojuegos, streamers y gamers. El sitio funciona como punto de encuentro para organizar partidas, consultar noticias, conocer a los miembros, ver canales en vivo y explorar el contenido del equipo.`
      );
    }

    if (project.name === "Revendedor Digital") {
      return (
        `**Web Products** es una plataforma moderna e interactiva diseñada para la exhibición, filtrado y gestión visual de catálogos de productos digitales o físicos. El proyecto combina una interfaz limpia con una experiencia de usuario (UX) rápida y reactiva para e-commerce o escaparate digital.`
      );
    }

    return "";
  };

  const getProjectModalSections = (project: Project | null) => {
    if (!project) return modalSections;
    if (project.name === "Digital Commerce Hub") {
      return [
        {
          label: "¿De qué se trata la página?",
          content:
            "Es un centro o portal para negocios digitales y comercio electrónico (*e-commerce*). Funciona como un catálogo interactivo donde los usuarios pueden explorar productos o servicios digitales y realizar operaciones comerciales de forma segura.",
        },
        {
          label: "¿Para qué sirve?",
          content:
            "Permite organizar ventas, mostrar catálogos y conectar a los clientes con soluciones comerciales en un solo lugar de manera clara y profesional.",
        },
        {
          label: "¿Por qué es rápida e interactiva?",
          content:
            "Utiliza tecnología web avanzada que permite filtrar productos, explorar categorías y realizar acciones en pantalla al instante, sin tener que esperar a que la página vuelva a recargar.",
        },
        {
          label: "¿Cómo se ve en celulares?",
          content:
            "Está construida con un diseño *responsive*, lo que significa que la tienda y sus herramientas se adaptan perfectamente para usar desde un teléfono móvil, tablet o computadora.",
        },
        {
          label: "Caracteristicas",
          content:
            "- Gestión de Catálogo Digital: Presentación limpia e interactiva de productos y soluciones comerciales con actualización de vistas en tiempo real.\n- Arquitectura Enfocada en Conversión: Flujos de usuario optimizados para reducir la fricción en el proceso de consulta y compra.\n- Rendimiento UI Excepcional: Tiempos de carga mínimos y animaciones fluidas gracias al empaquetado optimizado del código.\n- Diseño Responsive & Mobile-First: Adaptabilidad total a cualquier tamaño de pantalla para asegurar usabilidad perfecta en dispositivos móviles.\n- Despliegue perimetral (Edge): Alojamiento global en redes de alta velocidad que minimizan la latencia de respuesta.",
        },
        {
          label: "Stack Tecnológico",
          content:
            "El proyecto está desarrollado sobre una arquitectura frontend moderna, modular y de tipado seguro para garantizar que el centro de comercio sea escalable y libre de errores.\n\nFrontend & UI:\n- React.js & TypeScript: Lógica de cliente robusta, escalable y con tipado estático seguro.\n- Vite.js: Servidor de desarrollo instantáneo y empaquetado optimizado para producción.\n- Tailwind CSS: Framework CSS enfocado en la velocidad de desarrollo y el diseño adaptativo.\n- shadcn/ui & Lucide Icons: Sistema de componentes e iconografía modular para un diseño profesional y consistente.\n\nEntorno de Ejecución & Dependencias:\n- Bun: Gestor de paquetes eficiente y ejecutor de entornos de JavaScript.\n- Node.js & NPM: Base estándar del ecosistema para la ejecución de scripts.\n\nCalidad de Código:\n- ESLint: Reglas avanzadas de validación y análisis estático del código.\n- Prettier: Formateador automático para mantener un estándar visual ordenado y limpio.\n\nInfraestructura & Cloud:\n- Vercel Edge Network: Alojamiento global para distribución con compresión automática de contenido.",
        },
      ];
    }

    if (project.name === "Bodegón Delicia") {
      return [
        {
          label: "¿De qué se trata la página?",
          content:
            "Es el portal web oficial del restaurante **Bodegón Delicia**. Sirve como su carta y menú digital en línea.",
        },
        {
          label: "¿Para qué sirve?",
          content:
            "Permite a los clientes y comensales explorar los platos tradicionales, bebidas y postres, conocer los precios, ver la ubicación del local y contactarse para reservar una mesa o hacer un pedido.",
        },
        {
          label: "¿Por qué es rápida e interactiva?",
          content:
            "Utiliza tecnología de última generación que carga el menú e imágenes al instante, permitiendo ver los platos sin demoras ni cargas lentas.",
        },
        {
          label: "¿Cómo se ve en celulares?",
          content:
            "Está totalmente adaptada para teléfonos móviles. Puedes escanear o consultar la carta cómodamente desde la mesa o desde tu casa directamente con tu celular.",
        },
        {
          label: "Caracteristicas",
          content:
            "- Menú y Carta Digital: Exhibición clara y atractiva de platos, especialidades de la casa y promociones con imágenes de alta calidad.\n- Gestión de Reservas y Contacto: Accesos directos e intuitivos para consultar disponibilidad, hacer reservas o contactar vía WhatsApp/teléfono.\n- Rendimiento UI Excepcional: Renderizado inmediato de imágenes y listas de platos sin impactar en la velocidad de la navegación.\n- Diseño Responsive & Mobile-First: Experiencia visual optimizada para teléfonos inteligentes, ideal para su uso dentro o fuera del establecimiento.\n- Despliegue Edge: Alojado en redes globales para ofrecer tiempos de respuesta ultrarrápidos.",
        },
        {
          label: "Stack Tecnológico",
          content:
            "El proyecto está desarrollado sobre una arquitectura frontend moderna, modular y de tipado seguro para facilitar cambios rápidos en el menú o precios sin errores de ejecución.\n\nFrontend & UI:\n- React.js & TypeScript: Lógica de cliente robusta, escalable y libre de errores en compilación.\n- Vite.js: Servidor de desarrollo instantáneo y compilación optimizada para producción.\n- Tailwind CSS: Framework de utilidades CSS para un diseño gastronómico acogedor, moderno y adaptable.\n- shadcn/ui & Lucide Icons: Sistema de componentes e iconografía clara orientada a menús e interfaces interactivas.\n\nEntorno de Ejecución & Dependencias:\n- Bun: Gestor de paquetes ultrarrápido utilizado para acelerar la instalación y compilación.\n- Node.js & NPM: Base estándar del ecosistema para la ejecución de scripts.\n\nCalidad de Código:\n- ESLint: Reglas avanzadas de validación y análisis estático del código.\n- Prettier: Formateador automático para mantener un estándar visual ordenado.\n\nInfraestructura & Cloud:\n- Vercel Edge Network: Alojamiento perimetral global para distribución ultrarrápida de imágenes y recursos.",
        },
      ];
    }

    if (project.name === "Mi Turno Ya") {
      return [
        {
          label: "¿De qué se trata la página?",
          content:
            "Es un sistema de gestión de citas y turnos en línea donde los clientes o usuarios pueden elegir un día, una hora disponible y reservar su turno al instante.",
        },
        {
          label: "¿Para qué sirve?",
          content:
            "Evita las esperas por llamada o mensajes de WhatsApp para agendar una cita. Todo el calendario de disponibilidad se actualiza en tiempo real para que elijas el horario que más te convenga.",
        },
        {
          label: "¿Por qué es rápida e interactiva?",
          content:
            "Utiliza tecnología web de última generación que muestra la disponibilidad al momento sin necesidad de recargar la página web con cada clic.",
        },
        {
          label: "¿Cómo se ve en celulares?",
          content:
            "Está diseñada bajo un concepto *responsive*, por lo que solicitar o consultar un turno desde un teléfono móvil es igual de fácil y cómodo que hacerlo desde una computadora.",
        },
        {
          label: "Caracteristicas",
          content:
            "- **Sistema de Reserva Inmediata**: Selección de fechas, horarios e ingresos de datos con validación instantánea.\n- **Gestión de Disponibilidad**: Visualización clara de franjas horarias libres y reservadas en tiempo real.\n- **Interfaz Intuitiva y Sin Frustraciones (UX)**: Diseño enfocado en completar la reserva en la menor cantidad de pasos posible.\n- **Enfoque Mobile-First**: Experiencia completamente optimizada para smartphones y tablets.\n- **Infraestructura Edge**: Despliegue global que garantiza tiempos de carga mínimos y alta disponibilidad del servicio.",
        },
        {
          label: "Stack Tecnológico",
          content:
            "El proyecto está desarrollado con una arquitectura frontend moderna, modular y de tipado seguro para garantizar una reserva de turnos ágil y sin fallos en producción.\n\nFrontend & UI:\n- **React.js & TypeScript**: Lógica de cliente robusta, declarativa y libre de errores en tiempo de compilación.\n- **Vite.js**: Servidor de desarrollo instantáneo y empaquetado optimizado para producción.\n- **Tailwind CSS**: Framework CSS enfocado en la velocidad de desarrollo y el diseño adaptativo.\n- **shadcn/ui & Lucide Icons**: Sistema de componentes y calendarios modulares para un diseño limpio e intuitivo.\n\nEntorno de Ejecución & Dependencias:\n- **Bun**: Gestor de paquetes ultrarrápido utilizado para acelerar la instalación y compilación.\n- **Node.js & NPM**: Base estándar del ecosistema para ejecutar scripts de construcción.\n\nCalidad de Código:\n- **ESLint**: Reglas avanzadas de análisis estático para garantizar buenas prácticas.\n- **Prettier**: Formateador de código automático para mantener coherencia estética.\n\nInfraestructura & Cloud:\n- **Vercel Edge Network**: Alojamiento perimetral global que garantiza máxima velocidad y disponibilidad del servicio.",
        },
      ];
    }

    if (project.name === "Manda Remito") {
      return [
        {
          label: "¿De qué se trata la página?",
          content:
            "Es un sistema en línea que te ayuda a crear, organizar y enviar remitos y facturas comerciales de manera rápida, ordenada y digital desde cualquier navegador.",
        },
        {
          label: "¿Para qué sirve?",
          content:
            "Evita el uso del papel y los cálculos manuales. Permite ingresar los datos de tus clientes y productos para generar comprobantes listos para enviar o imprimir en pocos clics.",
        },
        {
          label: "¿Por qué es rápida e interactiva?",
          content:
            "Funciona con tecnología web avanzada que calcula montos, aplica formatos y actualiza los comprobantes al instante, sin tener que esperar a que la página cargue de nuevo con cada cambio.",
        },
        {
          label: "¿Cómo se ve en celulares?",
          content:
            "Está totalmente adaptada para pantallas táctiles, por lo que puedes crear o consultar tus remitos tanto desde tu teléfono móvil como desde una computadora o tablet.",
        },
        {
          label: "Caracteristicas",
          content:
            "- **Generación Dinámica de Comprobantes**: Creación y edición ágil de remitos y facturas con cálculos automáticos de montos y totales.\n- **Exportación y Envío Rápido**: Formato optimizado para visualización, impresión y gestión digital de archivos.\n- **Interfaz Fluida e Intuitiva**: Diseño limpio que elimina pasos innecesarios para agilizar la carga de datos por parte del usuario.\n- **Diseño Responsive & Mobile-First**: Adaptabilidad total para operar desde dispositivos móviles en el punto de venta o en movimiento.\n- **Infraestructura Edge**: Despliegue global en redes de baja latencia para garantizar disponibilidad constante e inmediata.",
        },
        {
          label: "Stack Tecnológico",
          content:
            "El proyecto está desarrollado sobre un entorno frontend moderno, modular y de tipado seguro para garantizar una gestión de datos precisa y libre de errores.\n\nFrontend & UI:\n- **React.js & TypeScript**: Lógica de cliente robusta y tipado estático seguro para el manejo de estructuras comerciales.\n- **Vite.js**: Entorno de desarrollo ultrarrápido y empaquetado optimizado para producción.\n- **Tailwind CSS**: Framework de utilidades para un diseño moderno, ágil y totalmente adaptativo.\n- **shadcn/ui & Lucide Icons**: Sistema de componentes e iconografía clara para formularios y tablas de datos.\n\nEntorno de Ejecución & Dependencias:\n- **Bun**: Gestor de paquetes eficiente y motor de ejecución optimizado para agilizar el flujo de trabajo.\n- **Node.js & NPM**: Base estándar del ecosistema para la ejecución de scripts.\n\nCalidad de Código:\n- **ESLint**: Linter para análisis estático y cumplimiento de buenas prácticas.\n- **Prettier**: Formateador automático para mantener un código limpio y consistente.\n\nInfraestructura & Cloud:\n- **Vercel Edge Network**: Alojamiento en red perimetral global para máxima velocidad de carga y alta disponibilidad.",
        },
      ];
    }

    if (project.name === "La Banda Gaming") {
      return [
        {
          label: "¿De qué se trata la página?",
          content:
            "Es el portal y punto de encuentro web para una comunidad o clan de videojuegos (*gaming*). Aquí los miembros y visitantes pueden ver información sobre el equipo, eventos, transmisiones en vivo y enlaces a sus redes sociales o servidores de Discord.",
        },
        {
          label: "¿Qué busca esta web?",
          content:
            "Conectar a la comunidad de jugadores en un solo lugar con un diseño gamer llamativo, moderno y muy fácil de usar.",
        },
        {
          label: "¿Por qué es rápida e interactiva?",
          content:
            "Utiliza tecnología web avanzada que permite navegar por las diferentes secciones e interactuar con el contenido de forma instantánea sin tener que esperar a que la pantalla cargue de nuevo a cada rato.",
        },
        {
          label: "¿Cómo se ve en celulares?",
          content:
            "Está optimizada con un enfoque *responsive*, lo que significa que la web se adapta perfectamente para usarse desde computadoras, teléfonos móviles o tablets.",
        },
        {
          label: "Caracteristicas",
          content:
            "- **Hub de Comunidad**: Centralización de enlaces, canales de transmisión, redes y contenido destacado del grupo.\n- **Diseño Gaming Atravesado por UI/UX**: Estética moderna con temas oscuros, elementos interactivos y animaciones fluidas que complementan la cultura gamer.\n- **Rendimiento Ultrarrápido**: Renderizado inmediato de componentes sin demoras ni interrupciones al navegar.\n- **Totalmente Adaptable (Mobile-First)**: Experiencia de usuario uniforme en cualquier resolución y dispositivo.\n- **Despliegue Edge**: Alojamientos en redes globales perimetrales para asegurar mínima latencia y máximo tiempo de actividad.",
        },
        {
          label: "Stack Tecnológico",
          content:
            "El proyecto está desarrollado con una arquitectura frontend moderna, modular y con tipado seguro para garantizar escalabilidad y un mantenimiento libre de errores.\n\nFrontend & UI:\n- **React.js & TypeScript**: Lógica de cliente escalable y desarrollo robusto con tipado estático.\n- **Vite.js**: Servidor de desarrollo ultrarrápido y empaquetado optimizado para producción.\n- **Tailwind CSS**: Framework de utilidades para un diseño responsive, rápido y estilizado.\n- **shadcn/ui & Lucide Icons**: Sistema de componentes e iconografía moderna para la interfaz de la plataforma.\n\nEntorno de Ejecución & Dependencias:\n- **Bun**: Gestor de paquetes eficiente y motor de ejecución optimizado para agilizar el desarrollo.\n- **Node.js & NPM**: Base del ecosistema para la ejecución de scripts.\n\nCalidad de Código:\n- **ESLint**: Linter para aplicar buenas prácticas y análisis estático del código.\n- **Prettier**: Formateador automático para mantener un código limpio y uniforme.\n\nInfraestructura & Cloud:\n- **Vercel Edge Network**: Distribución global del frontend para cargas instantáneas y alta disponibilidad.",
        },
      ];
    }

    if (project.name === "Revendedor Digital") {
      return [
        {
          label: "¿De qué se trata la página?",
          content:
            "Es una tienda o catálogo digital en línea donde las personas pueden navegar a través de diferentes productos, ver sus detalles, precios, imágenes e interactuar con el catálogo de forma fluida.",
        },
        {
          label: "¿Qué busca esta web?",
          content:
            "Brindar a los clientes o compradores una forma cómoda, moderna y atractiva de explorar productos sin demoras, facilitando la búsqueda de lo que necesitan.",
        },
        {
          label: "¿Por qué es rápida e interactiva?",
          content:
            "Utiliza tecnología de código de última generación que permite actualizar los productos en pantalla instantáneamente al aplicar filtros o realizar búsquedas, sin tener que recargar toda la página web.",
        },
        {
          label: "¿Cómo se ve en celulares?",
          content:
            "El diseño es totalmente *responsive* (adaptable), lo que significa que el catálogo se acomoda automáticamente si la visitas desde una computadora, un teléfono móvil o una tablet.",
        },
        {
          label: "Caracteristicas",
          content:
            "- **Catálogo Interactivo**: Búsqueda, ordenamiento y filtrado dinámico de productos en tiempo real sin recargas de página.\n- **Renderizado UI Optimizado**: Carga y renderizado eficiente de imágenes y tarjetas de producto sin penalizar el rendimiento del navegador.\n- **Enfoque Mobile-First**: Adaptabilidad fluida a cualquier resolución y dispositivo para garantizar una usabilidad limpia en pantallas táctiles.\n- **Despliegue perimetral (Edge)**: Distribuido a través de redes globales para una carga veloz desde cualquier lugar.",
        },
        {
          label: "Stack Tecnológico",
          content:
            "El proyecto utiliza una arquitectura modular, escalable y de tipado seguro para garantizar que el catálogo se pueda expandir y mantener sin errores de ejecución.\n\nFrontend & UI:\n- **React.js & TypeScript**: Lógica de interfaz robusta, declarativa y con tipado estático seguro.\n- **Vite.js**: Entorno de desarrollo instantáneo y empaquetador de producción optimizado.\n- **Tailwind CSS**: Framework de utilidades CSS para un diseño fluido, accesible y Mobile-First.\n- **shadcn/ui & Lucide Icons**: Sistema de componentes e iconografía moderna para la interfaz del catálogo.\n\nEntorno de Ejecución & Dependencias:\n- **Bun**: Gestor de paquetes eficiente y motor de ejecución acelerado.\n- **Node.js & NPM**: Ecosistema estándar para la ejecución de scripts del proyecto.\n\nCalidad de Código:\n- **ESLint**: Reglas avanzadas de validación y análisis estático.\n- **Prettier**: Formateador automático para mantener un código ordenado.\n\nInfraestructura & Cloud:\n- **Vercel Edge Network**: Alojamiento global para distribución con baja latencia y optimización de contenido.",
        },
      ];
    }

    return modalSections;
  };

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 .w-[800px] .h-[800px] rounded-full bg-violet/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[10px] uppercase tracking-wider font-mono text-accent">
            <FolderOpen className="w-3 h-3" /> Proyectos
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <div className="max-w-4xl">
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
              Web de <span className="text-gradient">alto rendimiento</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Páginas web construidas con intención: rápidas, escalables y
            diseñadas para convertir un resultado de negocio tangible en cada
            visita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-12">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              role="button"
              tabIndex={0}
              onClick={() => {
                setActiveProject(p);
                setImagePreviewOpen(false);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setActiveProject(p);
                  setImagePreviewOpen(false);
                }
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative glass rounded-3xl overflow-hidden hover:border-accent/30 transition-all flex flex-col h-full min-h-[26rem] cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1280}
                  height={832}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* flecha eliminada según lo solicitado */}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="space-y-3">
                  <span className="text-xs text-accent font-mono uppercase tracking-wider">
                    {p.type}
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed min-h-[5rem]">
                    {p.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-3">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={(e) => e.stopPropagation()}
                    className="flex w-full items-center justify-center rounded-3xl border border-amber-400/40 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-transparent px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-200 transition-all hover:border-amber-300/60 hover:bg-gradient-to-r hover:from-amber-500/25 hover:via-orange-500/15 hover:to-transparent"
                  >
                    Ver página web
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveProject(p);
                      setImagePreviewOpen(false);
                    }}
                    className="flex w-full items-center justify-center rounded-3xl border border-amber-400/40 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-transparent px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-200 transition-all hover:border-amber-300/60 hover:bg-gradient-to-r hover:from-amber-500/25 hover:via-orange-500/15 hover:to-transparent"
                  >
                    Más información
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mb-10">
          <button
            type="button"
            onClick={() => setShowAllProjects((prev) => !prev)}
            className="inline-flex min-w-[12rem] rounded-3xl border border-white/10 bg-white/5 px-8 py-4 items-center justify-center whitespace-nowrap text-center text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
          >
            {showAllProjects ? "Ocultar listado" : "Mostrar listado"}
          </button>
        </div>

        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex justify-center items-start overflow-y-auto bg-black/40 px-4 py-4"
            onClick={() => setActiveProject(null)}
          >
            <div
              className="relative mt-8 w-full max-w-2xl rounded-4xl border border-white/10 bg-slate-950/95 p-6 shadow-[0_35px_90px_-30px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-xs text-muted-foreground hover:bg-white/10"
              >
                Cerrar
              </button>
              <div className="mb-4 text-xs uppercase tracking-[0.22em] text-accent font-mono">
                Información detallada sobre mi proyecto
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                {activeProject.name}
              </h3>
              <div className="mt-2 text-sm text-muted-foreground">
                {activeProject.type}
              </div>
              <button
                type="button"
                onClick={() => setImagePreviewOpen(true)}
                className="group relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition-all hover:border-white/20"
                aria-label="Ver imagen completa"
              >
                <img
                  src={activeProject.image}
                  alt={activeProject.name}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-xs text-white backdrop-blur">
                    Ver imagen
                  </span>
                </div>
              </button>

              {getProjectIntro(activeProject) ? (
                <div className="mt-4 text-sm text-muted-foreground whitespace-pre-line">
                  {getProjectIntro(activeProject)}
                </div>
              ) : null}

              {imagePreviewOpen && (
                <div
                  className="absolute inset-0 z-50 flex flex-col bg-black/95 p-6"
                  onClick={() => setImagePreviewOpen(false)}
                >
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setImagePreviewOpen(false);
                    }}
                    className="self-end rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-muted-foreground transition-all hover:bg-white/10"
                  >
                    Cerrar imagen
                  </button>
                  <div className="mt-4 flex-1 overflow-auto" onClick={(event) => event.stopPropagation()}>
                    <img
                      src={activeProject.image}
                      alt={activeProject.name}
                      className="mx-auto w-full max-h-[75vh] object-contain"
                    />
                  </div>
                </div>
              )}

              <div className="mt-6 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground overflow-hidden">
                {getProjectModalSections(activeProject).map((section) => (
                  <div key={section.label} className="space-y-2">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedSection((current) =>
                          current === section.label ? null : section.label,
                        )
                      }
                      className="flex w-full items-center justify-center rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-all hover:border-white/20 hover:bg-slate-900"
                    >
                      {section.label}
                    </button>
                    {expandedSection === section.label ? (
                      <div className="rounded-3xl border border-white/10 bg-slate-950/95 px-4 py-4 text-center text-sm text-muted-foreground">
                        <div className="whitespace-pre-line">{section.content}</div>
                      </div>
                    ) : null}
                  </div>
                ))}

                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex w-full items-center justify-center rounded-3xl border border-amber-400/40 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-transparent px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-200 transition-all hover:border-amber-300/60 hover:bg-gradient-to-r hover:from-amber-500/25 hover:via-orange-500/15 hover:to-transparent"
                >
                  VER PROYECTO
                </a>
              </div>
            </div>
          </div>
        )}

        {showAllProjects && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mt-16 glass-strong rounded-3xl overflow-hidden"
          >
            <div className="p-6 md:p-8 border-b border-border">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                Listado completo
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mt-2">
                Todos mis proyectos
              </h3>
            </div>
            <div className="divide-y divide-border">
              {allSites.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between gap-4 px-6 md:px-8 py-4 hover:bg-white/0.03 transition-colors"
                >
                  <div className="min-w-0 flex-1">
                    <div className="font-medium truncate">{s.name}</div>
                  </div>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 glass rounded-full px-4 py-2 text-xs font-medium hover:bg-white/0.08 hover:border-accent/40 transition-all shrink-0"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Ver Página Web
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
