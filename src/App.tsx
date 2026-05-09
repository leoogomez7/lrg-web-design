import './App.css';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
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
        
        {/* 4. Tabla de Precios */}
        <Pricing />
        
        {/* 5. Propuestas/Servicios */}
        <Proposals />
        
        {/* 6. Sobre mí */}
        <About />
        
        {/* 7. Redes Sociales */}
        <Social />
        
        {/* 8. Formulario de Contacto */}
        <Contact />
      </main>

      {/* 9. Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
