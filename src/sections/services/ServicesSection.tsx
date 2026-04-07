import { useState, useEffect, useRef, useCallback, forwardRef } from 'react';
import type React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import './services.css';

interface ServiceData {
  id: string;
  num: string;
  shortName: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  pricingAmount: string;
  pricingLabel: string;
}

const SERVICES: ServiceData[] = [
  {
    id: 'panel-01',
    num: '01',
    shortName: 'Estrategia Comercial',
    title: 'Estrategia Comercial\n& Posicionamiento',
    tagline: 'Tu marca técnica, visible donde toman decisiones',
    description:
      'Construimos el posicionamiento estratégico de tu empresa en LinkedIn y canales industriales. Ghostwriting técnico, investigación de mercado del sector, y producción de contenido que habla el idioma de los ingenieros, gerentes de planta y jefes de compra.',
    deliverables: [
      'Estrategia editorial mensual',
      '8–12 posts LinkedIn ghostwritten por semana',
      'Investigación de mercado y benchmarks del sector',
      'Informe de posicionamiento competitivo trimestral',
    ],
    pricingAmount: 'desde UF 20 / mes',
    pricingLabel: 'Retainer mensual',
  },
  {
    id: 'panel-02',
    num: '02',
    shortName: 'Gestión de Proyectos',
    title: 'Gestión de Proyectos\n& Licitaciones',
    tagline: 'No pierdas una licitación por falta de seguimiento',
    description:
      'Monitoreamos Mercado Público, plataformas privadas salmoneras y el pipeline de proyectos del sur para que llegues primero. Levantamos planos en terreno, elaboramos layouts de planta en 2D/3D y gestionamos activamente los planos técnicos de tu empresa.',
    deliverables: [
      'Seguimiento semanal de licitaciones (Mercado Público + privadas)',
      'Visitas técnicas + levantamiento de planos en terreno',
      'Layouts de planta 2D/3D (AutoCAD / Solidworks / Inventor)',
      'Gestión activa del archivo de planos de la empresa',
      'Evaluación de CAPEX y OPEX por proyecto',
    ],
    pricingAmount: 'desde UF 8 / proyecto',
    pricingLabel: 'Por proyecto',
  },
  {
    id: 'panel-03',
    num: '03',
    shortName: 'Ingeniería & IA',
    title: 'Ingeniería de Proceso\n& IA',
    tagline: 'Decisiones de inversión respaldadas en datos, no en intuición',
    description:
      'Simulamos escenarios de proceso completos usando IA y modelos de ingeniería para que tus decisiones de inversión tengan sustento técnico. Producimos informes ejecutivos, renders de productos industriales y diseñamos nuevas líneas de producto para ampliar tu portafolio.',
    deliverables: [
      'Simulación de escenarios de proceso (capacidad, tiempos, cuellos de botella)',
      'Informe técnico IA para toma de decisiones (formato presentable a directorio)',
      'Renders 3D de productos y equipos industriales',
      'Diseño de nuevas líneas de producto / ampliación de portafolio',
    ],
    pricingAmount: 'desde UF 8 / entregable',
    pricingLabel: 'Por entregable',
  },
  {
    id: 'panel-04',
    num: '04',
    shortName: 'I+D & Financiamiento',
    title: 'I+D &\nFinanciamiento',
    tagline: 'Convierte tu innovación en beneficios tributarios concretos',
    description:
      'Formulamos y gestionamos proyectos de I+D ante CORFO y/u otras instituciones. Convertimos el gasto en innovación de tu empresa en retorno tributario real, y te acompañamos en el proceso de registro de patentes cuando corresponde.',
    deliverables: [
      'Formulación de proyectos CORFO (FON, FNDR, concursos sectoriales)',
      'Gestión Fi Group — beneficio tributario 35% sobre inversión en I+D',
      'Asesoría en patentes y registro de propiedad intelectual',
      'Seguimiento de ejecución y rendiciones',
    ],
    pricingAmount: 'desde UF 30 / proyecto + fee de éxito',
    pricingLabel: 'Por proyecto',
  },
  {
    id: 'panel-05',
    num: '05',
    shortName: 'Equipamiento Industrial',
    title: 'Equipamiento Industrial\n& ROI Maquinaria',
    tagline: 'Compra la máquina correcta, con los números en la mano',
    description:
      'Evaluamos la factibilidad técnica y económica de incorporar equipamiento industrial en tu taller. CNC, Corte Láser, grabado láser, corte por agua, equipos de soldadura, pulido y puente grúa, entre otros. Te acompañamos desde la decisión de compra hasta la puesta en marcha.',
    deliverables: [
      'Análisis de ROI por máquina (payback, TIR, VAN)',
      'Evaluación CAPEX/OPEX del equipamiento',
      'Comparativa técnica de proveedores',
      'Acompañamiento en implementación y puesta en marcha',
      'Planificación del layout, obras civiles, instalaciones eléctricas y mecánicas para integrar el nuevo equipo',
    ],
    pricingAmount: 'desde UF 15 / proyecto',
    pricingLabel: 'Por proyecto',
  },
  {
    id: 'panel-06',
    num: '06',
    shortName: 'PM Proyectos CAPEX',
    title: 'PM Proyectos\nCAPEX',
    tagline: 'Quién conoce la línea de proceso desde adentro, la gestiona mejor',
    description:
      'Gestionamos proyectos de inversión de alto valor en salas de proceso salmonero, talleres de manufactura en acero inoxidable, proveedores de servicios de automatización y control con desarrollo propio o externo, y ampliaciones de planta. Con experiencia directa en portafolio actualizado acorde al rubro y en proyectos del sur de Chile, somos el PM externo que elimina los tiempos muertos y el desperdicio de CAPEX.',
    deliverables: [
      'PM integral de sala de proceso (desde especificación hasta commissioning)',
      'PM de taller de manufactura (layout, instalación, puesta en marcha)',
      'Reestructuración de planta según requerimientos de productividad',
      'Coordinación de proveedores especializados (fabricantes nacionales y fabricantes internacionales)',
      'Informes de avance y control de presupuesto en tiempo real',
    ],
    pricingAmount: 'desde 4% del CAPEX total',
    pricingLabel: '% del CAPEX',
  },
];

function ServicePanel({ service }: { service: ServiceData }) {
  const titleLines = service.title.split('\n');
  return (
    <div className="panel-content">
      <span className="panel-num" aria-hidden="true">
        {service.num}
      </span>
      <h3 className="panel-title">
        {titleLines.map((line, i) => (
          <span key={i}>
            {line}
            {i < titleLines.length - 1 && <br />}
          </span>
        ))}
      </h3>
      <p className="panel-tagline">{service.tagline}</p>
      <p className="panel-description">{service.description}</p>
      <ul className="panel-deliverables" aria-label="Entregables">
        {service.deliverables.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="panel-footer">
        <div className="pricing-badge">
          <span className="pricing-amount">{service.pricingAmount}</span>
          <span className="pricing-label">{service.pricingLabel}</span>
        </div>
        <a href="#contacto" className="btn-service">
          Conversar sobre este servicio
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

const ServicesSection = forwardRef<HTMLDivElement>(function ServicesSection(_, ref) {
  const [activeService, setActiveService] = useState('panel-01');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const layoutRef = useRef<HTMLDivElement>(null);
  const accordionsRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Scroll reveal with IntersectionObserver
  useEffect(() => {
    const targets = [
      headerRef.current,
      layoutRef.current,
      accordionsRef.current,
    ].filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activateService = useCallback((id: string) => {
    setActiveService(id);
  }, []);

  const handleTabKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      const total = SERVICES.length;
      let nextIndex: number | null = null;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        nextIndex = (index + 1) % total;
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        nextIndex = (index - 1 + total) % total;
      } else if (e.key === 'Home') {
        e.preventDefault();
        nextIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        nextIndex = total - 1;
      }

      if (nextIndex !== null) {
        tabRefs.current[nextIndex]?.focus();
        activateService(SERVICES[nextIndex].id);
      }
    },
    [activateService]
  );

  const toggleAccordion = useCallback((id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section
      ref={ref}
      id="servicios"
      className="services-section"
      aria-label="Nuestros Servicios"
    >
      <div className="services-container">
        {/* Header */}
        <div ref={headerRef} className="services-header">
          <span className="services-label">Servicios</span>
          <h2 className="services-title">
            Seis líneas.
            <br />
            Un solo partner.
          </h2>
          <p className="services-subtitle">
            Desde la estrategia de marca hasta la gestión del proyecto completo.
            Activás lo que necesitás, cuando lo necesitás.
          </p>
        </div>

        {/* Desktop: tablist + panels */}
        <div
          ref={layoutRef}
          className="services-layout"
          role="tablist"
          aria-orientation="vertical"
        >
          {/* Left: sticky nav */}
          <nav className="services-nav" aria-label="Índice de servicios">
            {SERVICES.map((s, i) => (
              <button
                key={s.id}
                ref={(el) => { tabRefs.current[i] = el; }}
                className={`service-tab${activeService === s.id ? ' active' : ''}`}
                role="tab"
                id={`tab-${s.num}`}
                aria-selected={activeService === s.id}
                aria-controls={s.id}
                tabIndex={activeService === s.id ? 0 : -1}
                onClick={() => activateService(s.id)}
                onKeyDown={(e) => handleTabKeyDown(e, i)}
              >
                <span className="service-num">{s.num}</span>
                <span className="service-name">{s.shortName}</span>
              </button>
            ))}
          </nav>

          {/* Right: panels */}
          <div className="services-panels">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className={`service-panel${activeService === s.id ? ' active' : ''}`}
                role="tabpanel"
                aria-labelledby={`tab-${s.num}`}
                tabIndex={0}
              >
                <ServicePanel service={s} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: accordions */}
        <div ref={accordionsRef} className="service-accordion-wrapper">
          {SERVICES.map((s) => {
            const isOpen = openAccordion === s.id;
            return (
              <div key={s.id} className="service-accordion">
                <button
                  className="accordion-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`acc-${s.id}`}
                  onClick={() => toggleAccordion(s.id)}
                >
                  <div className="accordion-trigger-left">
                    <span className="accordion-num">{s.num}</span>
                    <span className="accordion-name">{s.shortName}</span>
                  </div>
                  <ChevronDown size={24} className="accordion-chevron" aria-hidden="true" />
                </button>
                <div
                  id={`acc-${s.id}`}
                  className={`accordion-content${isOpen ? ' open' : ''}`}
                  role="region"
                  aria-labelledby={`acc-trigger-${s.num}`}
                >
                  <div className="accordion-content-inner">
                    <ServicePanel service={s} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default ServicesSection;
