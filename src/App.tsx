import './index.css';
import './App.css';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import Clients from './components/Clients';
import { Comprar } from './components/Comprar';
import { Pricing } from './components/Pricing';
import { Proposals } from './components/Proposals';
import { About } from './components/About';
import { Social } from './components/Social';
import { Contact, Footer } from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* 1. Navegación */}
      <Nav />
      
      <main>
        {/* 2. Sección Principal */}
        <Hero />
        
        {/* 3. Portafolio de Proyectos */}
        <Projects />

        {/* 4. Apartado de Clientes */}
        <Clients />

        {/* 5. Tabla de Precios */}
        <Pricing />

        {/* 6. Nuevo apartado Comprar */}
        <Comprar />
        
        {/* 7. Propuestas/Servicios */}
        <Proposals />
        
        {/* 7. Sobre mí */}
        <About />
        
        {/* 8. Redes Sociales */}
        <Social />
        
        {/* 9. Formulario de Contacto */}
        <Contact />
      </main>

      {/* 10. Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
