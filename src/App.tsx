import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Menu, 
  X, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Layers, 
  EyeOff, 
  TrendingDown,
  MapPin,
  Clock
} from 'lucide-react';
import { useState } from 'react';
import ServicesSection from './sections/services/ServicesSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const problemaRef = useRef<HTMLDivElement>(null);
  const solucionRef = useRef<HTMLDivElement>(null);
  const procesoRef = useRef<HTMLDivElement>(null);
  const resultadoRef = useRef<HTMLDivElement>(null);
  const serviciosRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-panel-left', 
        { x: -60, opacity: 0, scale: 0.98 },
        { x: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo('.hero-panel-right',
        { x: 60, opacity: 0, scale: 1.03 },
        { x: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out', delay: 0.3 }
      );
      gsap.fromTo('.hero-headline span',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.08, delay: 0.5 }
      );
      gsap.fromTo('.hero-subtext',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1, delay: 0.8 }
      );

      // Section reveal animations
      const sections = [
        { ref: problemaRef, class: '.problema-animate' },
        { ref: solucionRef, class: '.solucion-animate' },
        { ref: procesoRef, class: '.proceso-animate' },
        { ref: resultadoRef, class: '.resultado-animate' },
      ];

      sections.forEach(({ ref, class: className }) => {
        gsap.fromTo(className,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 75%',
              end: 'top 45%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });

      // Servicios section — scroll reveal handled internally by ServicesSection

      // CTA section animation
      gsap.fromTo('.cta-animate',
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 75%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Parallax effects for background images
      gsap.utils.toArray<HTMLElement>('.parallax-bg').forEach((bg) => {
        gsap.to(bg, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: bg,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative bg-navy text-white overflow-x-hidden">
      {/* Grain overlay */}
      <div className="fixed inset-0 grain-overlay z-50 pointer-events-none" />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        navScrolled ? 'bg-navy/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <svg height="44" viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg" aria-label="Taller Mayor Consultoría">
              <g transform="translate(8,4) scale(0.52)">
                <path d="M 4,18 L 42,18 L 42,26 L 27,26 L 27,68 L 23,72 L 21,72 L 17,68 L 17,26 L 4,26 Z" fill="#E8E6E1"/>
                <path d="M 54,76 L 54,22 L 58,18 L 63,18 L 75,44 L 87,18 L 92,18 L 96,22 L 96,76 Z" fill="#E8E6E1"/>
                <line x1="4" y1="44" x2="96" y2="44" stroke="#C8922A" strokeWidth="2.5"/>
              </g>
              <line x1="62" y1="10" x2="62" y2="50" stroke="#C8922A" strokeWidth="0.75" opacity={0.3}/>
              <text x="72" y="30" fontFamily="Cabinet Grotesk,Helvetica Neue,sans-serif" fontSize="17" fontWeight="800" letterSpacing="2.2" fill="#E8E6E1">TALLER MAYOR</text>
              <text x="72" y="43" fontFamily="Cabinet Grotesk,Helvetica Neue,sans-serif" fontSize="8" fontWeight="500" letterSpacing="4.5" fill="#8A8F9E">CONSULTORÍA</text>
            </svg>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection(serviciosRef)} className="text-sm text-gray-cool hover:text-white transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection(procesoRef)} className="text-sm text-gray-cool hover:text-white transition-colors">
              Proceso
            </button>
            <button onClick={() => scrollToSection(ctaRef)} className="text-sm text-gray-cool hover:text-white transition-colors">
              Contacto
            </button>
            <button 
              onClick={() => scrollToSection(ctaRef)}
              className="bg-amber text-navy px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-light transition-colors"
            >
              Conversemos
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-navy/95 backdrop-blur-md border-t border-white/10 py-6 px-6">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection(serviciosRef)} className="text-left text-gray-cool hover:text-white py-2">
                Servicios
              </button>
              <button onClick={() => scrollToSection(procesoRef)} className="text-left text-gray-cool hover:text-white py-2">
                Proceso
              </button>
              <button onClick={() => scrollToSection(ctaRef)} className="text-left text-gray-cool hover:text-white py-2">
                Contacto
              </button>
              <button 
                onClick={() => scrollToSection(ctaRef)}
                className="bg-amber text-navy px-5 py-3 rounded-full text-sm font-semibold mt-2"
              >
                Conversemos
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Section 1: Hero */}
      <section ref={heroRef} className="min-h-screen relative flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-radial from-navy-light/30 via-navy to-navy" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[70vh]">
            {/* Left panel */}
            <div className="hero-panel-left bg-navy-light/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
              <span className="font-mono text-xs tracking-[0.2em] text-amber uppercase mb-6 block">
                Consultoría Industrial
              </span>
              
              <h1 className="hero-headline font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
                <span className="block">Ingeniería que</span>
                <span className="block text-amber">ordena.</span>
              </h1>
              
              <p className="hero-subtext font-display text-xl sm:text-2xl text-amber mb-6">
                Consultoría que escala.
              </p>
              
              <p className="hero-subtext text-gray-cool leading-relaxed mb-8 max-w-md">
                Ayudamos a maestranzas y fábricas de equipos para salas de proceso a crecer con estructura, propuesta de valor clara y herramientas reales.
              </p>
              
              <div className="hero-subtext flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection(ctaRef)}
                  className="bg-amber text-navy px-6 py-3 rounded-full font-semibold hover:bg-amber-light transition-all hover:scale-105 flex items-center gap-2"
                >
                  Conversemos
                  <ArrowRight size={18} />
                </button>
                <button 
                  onClick={() => scrollToSection(serviciosRef)}
                  className="text-gray-cool hover:text-white px-6 py-3 font-medium transition-colors"
                >
                  Ver servicios →
                </button>
              </div>
            </div>
            
            {/* Right panel - Image */}
            <div className="hero-panel-right relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
              <img 
                src="/hero_factory.jpg" 
                alt="Industrial factory interior" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              <p className="absolute bottom-6 right-6 text-sm text-gray-cool">
                Para la industria salmonera chilena
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: El Problema */}
      <section ref={problemaRef} className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/factory_hall.jpg" 
            alt="Factory background" 
            className="parallax-bg absolute inset-0 w-full h-[120%] object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="problema-animate font-mono text-xs tracking-[0.2em] text-amber uppercase mb-4 block">
              El Problema
            </span>
            <h2 className="problema-animate font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
              Lo que frena a los talleres con potencial
            </h2>
            <p className="problema-animate text-gray-cool text-lg max-w-2xl mx-auto">
              Crecimiento sin estructura. Procesos que se alargan. Una imagen que no comunica el nivel técnico real.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="problema-animate bg-navy-light/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-amber/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber/10 rounded-xl flex items-center justify-center mb-6">
                <Layers className="text-amber" size={24} />
              </div>
              <h3 className="font-display font-semibold text-xl mb-4">Operación sin estructura</h3>
              <p className="text-gray-cool leading-relaxed">
                Los flujos de trabajo crecieron solos. Nadie los diseñó. El resultado es pérdida de tiempo, errores repetidos y proyectos que se alargan sin control.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="problema-animate bg-navy-light/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-amber/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber/10 rounded-xl flex items-center justify-center mb-6">
                <EyeOff className="text-amber" size={24} />
              </div>
              <h3 className="font-display font-semibold text-xl mb-4">Imagen que no proyecta el nivel real</h3>
              <p className="text-gray-cool leading-relaxed">
                El taller tiene capacidad técnica, pero el branding no lo comunica. Los clientes grandes no llaman porque no se ve grande.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="problema-animate bg-navy-light/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-amber/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingDown className="text-amber" size={24} />
              </div>
              <h3 className="font-display font-semibold text-xl mb-4">Proyectos que no escalan</h3>
              <p className="text-gray-cool leading-relaxed">
                Hay cartera de productos, pero sin posicionamiento claro ni proceso de venta. El crecimiento depende del boca a boca y del azar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Solución */}
      <section ref={solucionRef} className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hero_factory.jpg" 
            alt="Factory background" 
            className="parallax-bg absolute inset-0 w-full h-[120%] object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="solucion-animate font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-8">
            Convertimos el <span className="text-amber">caos</span> en operación.
          </h2>
          <p className="solucion-animate text-xl text-gray-cool max-w-2xl mx-auto">
            Diseñamos flujos, estándares y una imagen que proyecta el nivel real de tu taller.
          </p>
        </div>
      </section>

      {/* Section 4: Proceso */}
      <section ref={procesoRef} className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Text */}
            <div className="proceso-animate bg-navy-light/60 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 order-2 lg:order-1">
              <span className="font-mono text-xs tracking-[0.2em] text-amber uppercase mb-6 block">
                Metodología
              </span>
              
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
                Diagnóstico + diseño de procesos
              </h2>
              
              <p className="text-gray-cool leading-relaxed mb-8">
                Mapeamos tu operación actual, identificamos cuellos de botella y rediseñamos el flujo para ganar predictibilidad.
              </p>
              
              <button 
                onClick={() => scrollToSection(serviciosRef)}
                className="text-amber hover:text-amber-light font-medium flex items-center gap-2 group"
              >
                Conoce el proceso
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Right - Image */}
            <div className="proceso-animate relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden order-1 lg:order-2">
              <img 
                src="/precision_equipment.jpg" 
                alt="Precision equipment" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Resultado */}
      <section ref={resultadoRef} className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Image */}
            <div className="resultado-animate relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
              <img 
                src="/industrial_hall.jpg" 
                alt="Industrial hall" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </div>
            
            {/* Right - Text */}
            <div className="resultado-animate bg-navy-light/60 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
              <span className="font-mono text-xs tracking-[0.2em] text-amber uppercase mb-6 block">
                Resultado
              </span>
              
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
                Menos fricción. Más entregas.
              </h2>
              
              <p className="text-gray-cool leading-relaxed mb-8">
                Tiempos de respuesta más cortos, estándares claros y una operación que se ve profesional por dentro y por fuera.
              </p>
              
              <button 
                onClick={() => scrollToSection(ctaRef)}
                className="bg-amber text-navy px-6 py-3 rounded-full font-semibold hover:bg-amber-light transition-all hover:scale-105 flex items-center gap-2 w-fit"
              >
                Solicita una propuesta
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Servicios */}
      <ServicesSection ref={serviciosRef} />

      {/* Section 7: Quién está detrás */}
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Text */}
            <div className="bg-navy-light/60 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
              <span className="font-mono text-xs tracking-[0.2em] text-amber uppercase mb-6 block">
                Quién está detrás
              </span>
              
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
                Experiencia directa en el rubro
              </h2>
              
              <div className="space-y-4 text-gray-cool leading-relaxed">
                <p>
                  Taller Mayor Consultoría nace desde adentro de la industria. Su fundador es ingeniero civil electrónico con maestría en diseño, gestión y dirección de proyectos — con experiencia directa en la operación industrial de referencia del sector salmonero chileno.
                </p>
                <p>
                  No es consultoría genérica. Es el conocimiento de cómo se ve una maestranza cuando funciona bien de verdad, aplicado a las que tienen el potencial para llegar ahí.
                </p>
              </div>
              
              <a 
                href="https://linkedin.com/in/oswaldososa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber hover:text-amber-light font-medium mt-8 group"
              >
                <Linkedin size={20} />
                Conecta en LinkedIn →
              </a>
            </div>
            
            {/* Right - Founder photo */}
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-navy-light border border-white/10">
              <img
                src="/foto_creador.png"
                alt="Fundador de Taller Mayor Consultoría"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: CTA Final */}
      <section ref={ctaRef} id="contacto" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-amber">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left - Text */}
            <div>
              <h2 className="cta-animate font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy mb-6">
                ¿Tu operación creció más rápido que tu estructura?
              </h2>
              <p className="cta-animate text-navy/80 text-lg mb-8">
                Partamos con una conversación de 30 minutos. Sin costo. Sin compromiso.
              </p>
              <div className="cta-animate flex flex-wrap gap-4">
                <a 
                  href="mailto:contacto@tallermayor.cl"
                  className="bg-navy text-white px-6 py-3 rounded-full font-semibold hover:bg-navy-light transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Mail size={18} />
                  Agendar conversación
                </a>
              </div>
              <p className="cta-animate text-navy/70 text-sm mt-4">
                O escríbenos directamente a{' '}
                <a href="mailto:contacto@tallermayor.cl" className="underline hover:text-navy">
                  contacto@tallermayor.cl
                </a>
              </p>
            </div>
            
            {/* Right - Contact card */}
            <div className="cta-animate bg-navy rounded-3xl p-8 lg:p-10">
              <h3 className="font-display font-semibold text-xl mb-6">Información de contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-cool">
                  <Mail size={18} className="text-amber" />
                  <span>contacto@tallermayor.cl</span>
                </div>
                <div className="flex items-center gap-3 text-gray-cool">
                  <Linkedin size={18} className="text-amber" />
                  <span>linkedin.com/company/tallermayor</span>
                </div>
                <div className="flex items-center gap-3 text-gray-cool">
                  <MapPin size={18} className="text-amber" />
                  <span>Chile · Industria salmonera</span>
                </div>
                <div className="flex items-center gap-3 text-gray-cool">
                  <Clock size={18} className="text-amber" />
                  <span>Respuesta en 24–48h</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-cool/80">
                  Preferimos partir con una videollamada breve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="font-display font-bold text-lg mb-2">Taller Mayor Consultoría</div>
              <p className="text-gray-cool text-sm">
                Ingeniería que ordena. Consultoría que escala.
              </p>
            </div>
            
            <a 
              href="https://linkedin.com/company/tallermayor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-navy-light rounded-full flex items-center justify-center hover:bg-amber/20 transition-colors"
            >
              <Linkedin size={20} className="text-amber" />
            </a>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-cool/60 text-sm">
              Chile · Industria Salmonera · 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;