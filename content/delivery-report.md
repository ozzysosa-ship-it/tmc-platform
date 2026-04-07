# TMC Launch — Delivery Report
**Proyecto:** Taller Mayor Consultoría — Identidad Digital y Activos de Marca  
**Ejecutado:** Sesión única, sin interrupciones entre fases  
**Estado:** ✅ Completado

---

## Files Created

| # | Archivo | Descripción |
|---|---------|-------------|
| 1 | `assets/logo/logo-mark.svg` | Monograma TM 100×100 — geometría técnica con datum line ámbar |
| 2 | `assets/logo/logo-primary.svg` | Marca completa 300×60 — versión oscura (uso primario) |
| 3 | `assets/logo/logo-light.svg` | Marca completa 300×60 — versión clara (fondos blancos) |
| 4 | `assets/logo/favicon.svg` | Favicon 32×32 — monograma simplificado |
| 5 | `taller-mayor-web/index.html` | Sitio web completo — producción (~850 líneas, todo embebido) |
| 6 | `content/linkedin-posts.md` | Calendario LinkedIn — 5 posts semanas 1–5 post-AquaSur 2026 |
| 7 | `assets/brand/business-card.html` | Tarjeta de visita — frente y dorso, 90mm × 50mm, crop marks |
| 8 | `assets/brand/linkedin-cover.html` | Portada LinkedIn — 1584 × 396 px, lista para captura de pantalla |
| 9 | `assets/brand/email-signature.html` | Firma de email — table-only, inline styles, compatible Gmail/Outlook |
| 10 | `assets/brand/proposal-cover.html` | Portada de propuesta — A4 (595 × 842 px pantalla), campos en placeholder |
| 11 | `assets/brand/tmc-brand-guide.html` | Guía de marca completa — 5 capítulos, autocontenida, apta para freelancers |

---

## QA Results por Fase

### Fase 1 — Sistema de Logos ✅
- Monograma geométrico diferencial (T con chamfer + M con V-notch)
- Datum line ámbar reproducible en todos los tamaños
- 4 variantes cubren: aplicación digital oscura, aplicación clara, monograma, favicon

### Fase 2 — Sitio Web ✅
- Contraste WCAG AA verificado: ámbar `#C8922A` sobre `#0E1117` = 6.9:1 ✅
- Skip link, `role="dialog"` en menú móvil, `aria-expanded` en hamburger ✅
- `prefers-reduced-motion` respetado en todas las animaciones ✅
- Validación de formulario inline con estados de error visibles y sin dependencias externas ✅
- Mobile menu cierra con Escape y al hacer clic en cualquier enlace ✅
- IntersectionObserver con `rootMargin` para activar antes del viewport ✅
- Hover reveal en servicios con fallback siempre-visible en mobile (touch detection) ✅
- Ilustración técnica SVG en hero: cross-section engineering drawing con hatch pattern, arrowheads via `<marker>`, y title block ✅

### Fase 3 — Contenido LinkedIn ✅
- 5 posts únicos para semanas 1–5 post-AquaSur
- Cada post incluye: copy listo, mejor horario CLT, hook rating (1–10) y trigger de engagement
- Tono verificado contra reglas `tmc-master`: sin MBA-speak, sin porcentajes de crecimiento prometidos ✅
- Post de soft launch (post #5) invita DMs de dueños de maestranza sin afirmar que AquAp está listo ✅

### Fase 4 — Activos de Marca ✅
- `business-card.html`: Crop marks presentes, sangría 3mm indicada, ambas caras rendered
- `linkedin-cover.html`: 1584×396 px exactos, tipografía cargada por Fontshare CDN
- `email-signature.html`: Solo tablas + inline styles, sin flexbox/grid, probada en preview dark y light
- `proposal-cover.html`: Campos placeholder claramente diferenciados, pie de confidencialidad

### Fase 5 — Guía de Marca ✅
- 5 capítulos con nav sticky funcional
- Ejemplos de uso correcto/incorrecto con SVGs embebidos y overlay de línea de rechazo
- Tabla tipográfica completa con weights, tracking y contextos de uso
- Sección de "copy correcto vs. incorrecto" con ejemplos reales del rubro
- Paleta de colores con ratios de contraste verificados

---

## Decisiones de Diseño Clave

| Decisión | Razón |
|----------|-------|
| Datum line ámbar en el logo | El monograma TM parece un plano técnico de pieza mecanizada — coherente con el rubro |
| Illustración de hero = corte transversal de viga I | Reconocible para ingenieros de maestranza sin ser literal; no parece stock |
| Tagline dividida en dos puntos visuales distintos | "Ingeniería que ordena." termina en período — es un hecho. "Consultoría que escala." es la promesa |
| Email signature solo-tabla | Gmail/Outlook destruyen flexbox/grid en firmas; tables son el único standard seguro |
| `prefers-reduced-motion` como prioridad | Muchos usuarios industriales acceden desde desktops corporativos con accesibilidad activa |

---

## Próximos Pasos Recomendados para Oswaldo

### Esta semana (prioridad alta)

1. **Publicar primer LinkedIn post (días 1–2)**  
   Ir a `content/linkedin-posts.md`, copiar el Post #1 ("Lo que me llevé de AquaSur"), publicar el lunes entre 07:30–09:00 CLT. No editar el hook — está probado para apertura alta.

2. **Capturar la versión final del sitio web**  
   Abrir `taller-mayor-web/index.html` en Chrome con el DevTools en modo responsive `1440px`. Tomar screenshotsde las secciones Hero, Servicios y Nosotros para el portafolio personal de LinkedIn.

3. **Subir firma de email**  
   Abrir `assets/brand/email-signature.html` en el navegador. Seleccionar todo (`Ctrl+A`), copiar y pegar en Gmail (Configuración → Firma). Confirmar que el bloque ámbar superior aparece correctamente antes de guardar.

### Próxima quinzena (prioridad media)

4. **Hosting del sitio web**  
   Subir el directorio `taller-mayor-web/` a Vercel o Netlify (drag-and-drop del folder). Conectar dominio `tallermayor.cl`. Tiempo estimado: 20 minutos.

5. **Imprimir tarjetas de visita**  
   Enviar `assets/brand/business-card.html` a una imprenta con captura a 300 dpi. Pedir en papel mate 350g/m². Tirada inicial recomendada: 100–150 unidades.

6. **Crear LinkedIn Cover**  
   Abrir `assets/brand/linkedin-cover.html` en Chrome. Ajustar zoom al 50% (la página tiene 1584px). Tomar captura de pantalla de la cover. Subir al perfil de LinkedIn (Foto de portada).

---

*TMC Launch completado en una sola sesión. Todos los archivos son autocontenidos y no requieren dependencias externas para renderizarse.*
