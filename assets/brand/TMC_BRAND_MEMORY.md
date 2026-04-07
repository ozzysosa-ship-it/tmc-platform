# TMC Brand Memory — Taller Mayor Consultoría
> Versión 1.0 · Chile · 2026  
> **Uso:** Contexto permanente para generación de propuestas técnico-comerciales, contenido y cualquier pieza de comunicación de TMC.  
> **Autor:** Brand Manager + Dev — Taller Mayor Consultoría  
> **Fecha:** Abril 2026

---

## 1. IDENTIDAD CORPORATIVA

### 1.1 Datos de la empresa
| Campo | Valor |
|---|---|
| Razón social | Taller Mayor Consultoría |
| Sigla | TMC |
| País | Chile |
| Industria objetivo | Salmonicultura chilena — maestranzas y fábricas de equipos de salas de proceso |
| Email | contacto@tallermayor.cl |
| Web | tallermayor.cl |
| LinkedIn | linkedin.com/company/taller-mayor |

### 1.2 Fundador
| Campo | Valor |
|---|---|
| Nombre | Oswaldo Sosa |
| Título profesional | Ingeniero Civil Electrónico |
| Postgrado | Magíster en Gestión de Proyectos |
| Experiencia clave | Ex equipo del mayor fabricante de equipos de procesamiento de salmón de Chile |
| Posición | Fundador · Taller Mayor Consultoría |
| LinkedIn | (perfil personal de Oswaldo Sosa) |

### 1.3 Posicionamiento
**Para quién:** Maestranzas y fábricas de equipos de salas de proceso que crecieron más rápido que su estructura.

**Diferenciador central:** No es consultoría genérica. Es conocimiento construido desde adentro de la industria. El fundador sabe cómo se ve una maestranza cuando funciona bien de verdad.

**Tagline invariable:**
> *"Ingeniería que ordena. Consultoría que escala."*

Este tagline NO se modifica, NO se traduce, NO se parafrasea en ningún contexto.

---

## 2. SERVICIOS

### 2.1 Cuatro líneas de servicio

| # | Servicio | Descripción | Modelo de precio |
|---|---|---|---|
| S1 | **Branding Técnico** | Redefinimos tu identidad comercial | Proyecto fijo |
| S2 | **Ingeniería de Procesos** | Diseñamos cómo opera tu taller | Diagnóstico + implementación |
| S3 | **Automatización e IA** | Herramientas que reducen trabajo manual | Retainer mensual |
| S4 | **PM Externo** | Gestionamos tus proyectos grandes | Por proyecto |

### 2.2 Producto ancla: Diagnóstico de 48 horas
- Identifica los procesos que inhiben el crecimiento
- Entregable incluido
- Duración estimada: 2 días de trabajo on-site

### 2.3 Problemas que resuelve TMC
1. **Operación sin estructura** — El taller creció sin flujos diseñados. Cada proyecto se improvisa. Se pierde tiempo y margen todos los días.
2. **Imagen que no proyecta** — Existe la capacidad técnica. El branding no la comunica. Los clientes grandes no llaman.
3. **Proyectos que no escalan** — Sin portafolio de productos claro. El crecimiento depende del boca a boca.

---

## 3. SISTEMA DE IDENTIDAD VISUAL

### 3.1 Filosofía de diseño
- **Referencia estética:** Stripe meets catálogo de maquinaria de precisión
- **NO es:** Consultoría genérica, startup SaaS, diseño corporativo convencional
- **Principio guía:** Precisión de ingeniería + agencia moderna

### 3.2 Paleta de colores

#### Colores estructurales (fondos)
| Token CSS | Nombre | Hex | Uso |
|---|---|---|---|
| `--bg` | Background | `#0E1117` | Fondo principal del sitio |
| `--surf` | Surface | `#1A1F2E` | Tarjetas, nav, secciones alt — también color Navy principal |
| `--surf2` | Surface 2 | `#222838` | Hover de tarjetas, campos de formulario |
| `--surf3` | Surface 3 | `#2A3040` | Bordes activos, separadores |

#### Color de acento único
| Token CSS | Nombre | Hex | Pantone | Uso |
|---|---|---|---|---|
| `--amber` | Amber | `#C8922A` | **138 C** | **ÚNICO color de acento.** CTAs, highlights, datum line del logo |
| `--amber-h` | Amber Hover | `#E0A030` | — | Estado hover sobre ámbar |

> ⚠️ **Regla crítica:** El ámbar es el **único** color de acento aprobado. Ningún otro color puede cumplir esta función.

#### Colores de texto
| Token CSS | Nombre | Hex | Uso |
|---|---|---|---|
| `--white` | Texto principal | `#E8E6E1` | Cuerpo, títulos, anchors |
| `--muted` | Texto muted | `#8A8F9E` | Párrafos secundarios, labels |
| `--faint` | Texto faint | `#4A4F5E` | Metadatos, notas, monocromático |
| `--red` | Error / Incorrecto | `#C04040` | Solo para estados de error o ejemplos de uso incorrecto |

#### Colores Pantone en impresión
- Navy principal: **Pantone 289 C** (equivale a `#1A1F2E`)
- Ámbar acento: **Pantone 138 C** (equivale a `#C8922A`)

#### Pares de contraste aprobados (WCAG)
| Combinación | Ratio | Nivel |
|---|---|---|
| `#E8E6E1` sobre `#0E1117` | 14.5:1 | AAA |
| `#C8922A` sobre `#0E1117` | 6.9:1 | AA |
| `#1A1F2E` sobre `#C8922A` | 6.9:1 | AA |

### 3.3 Sistema tipográfico

#### Familia 1: Cabinet Grotesk — Display / Headlines
- **Fuente:** Cabinet Grotesk (Fontshare)
- **CDN:** `https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&display=swap`
- **Pesos disponibles:** 500, 700, 800
- **Rol:** Titulares, wordmark, elementos que "mandan"
- **Regla:** NUNCA usar para cuerpo de texto

| Nivel | Tamaño | Peso | Letter-spacing |
|---|---|---|---|
| Hero | 52px | 800 | -0.03em |
| H1 | 36px | 800 | -0.02em |
| H2 | 28px | 700 | -0.01em |
| H3 | 20px | 700 | 0 |
| Card title | 16px | 700 | 0 |

#### Familia 2: Satoshi — Body / UI
- **Fuente:** Satoshi (Fontshare)
- **CDN:** `https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap`
- **Pesos disponibles:** 400, 500, 700
- **Rol:** Cuerpo, UI, párrafos, labels
- **Regla:** NUNCA usar para titulares principales

| Nivel | Tamaño | Peso | Notas |
|---|---|---|---|
| Lead | 18px | 500 | Párrafo introductorio |
| Body | 15px | 400 | Cuerpo estándar |
| Small | 12px | 400 | Metadatos, notas |
| LABEL | 10px | 700 | Uppercase + tracking 0.14em + color ámbar |

#### CDN unificado (usar siempre este)
```
https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&f[]=satoshi@400,500,700&display=swap
```

### 3.4 Sistema de logo

#### Anatomía del logo
El logo se compone de:
1. **Monograma TM** — geometría de precisión técnica, ángulos de 45°, sin círculos, sin gradientes
2. **Separador vertical** — línea ámbar tenue (opacidad 0.3), 0.75px
3. **Wordmark** — "TALLER MAYOR" Cabinet Grotesk 800, letter-spacing 2.2px + "CONSULTORÍA" Satoshi 500, letter-spacing 4.5px

#### Paths SVG del monograma TM (canónicos — NO redibujar)
```svg
<svg viewBox="0 0 100 100">
  <!-- T -->
  <path d="M 4,18 L 42,18 L 42,26 L 27,26 L 27,68 L 23,72 L 21,72 L 17,68 L 17,26 L 4,26 Z" fill="#E8E6E1"/>
  <!-- M -->
  <path d="M 54,76 L 54,22 L 58,18 L 63,18 L 75,44 L 87,18 L 92,18 L 96,22 L 96,76 Z" fill="#E8E6E1"/>
  <!-- Datum line ámbar -->
  <line x1="4" y1="44" x2="96" y2="44" stroke="#C8922A" stroke-width="1.5"/>
</svg>
```

> ⚠️ **Los paths del monograma son geométricamente definidos y no deben regenerarse.** Cualquier IA o diseñador debe copiar estos paths exactos.

#### Logo completo (wordmark) — SVG canónico
```svg
<svg viewBox="0 0 300 60">
  <!-- Fondo (omitir si se embebe en nav/header) -->
  <rect width="300" height="60" fill="#0E1117"/>
  <!-- Monograma TM a escala 0.52 -->
  <g transform="translate(8,4) scale(0.52)">
    <path d="M 4,18 L 42,18 L 42,26 L 27,26 L 27,68 L 23,72 L 21,72 L 17,68 L 17,26 L 4,26 Z" fill="#E8E6E1"/>
    <path d="M 54,76 L 54,22 L 58,18 L 63,18 L 75,44 L 87,18 L 92,18 L 96,22 L 96,76 Z" fill="#E8E6E1"/>
    <line x1="4" y1="44" x2="96" y2="44" stroke="#C8922A" stroke-width="2.5"/>
  </g>
  <!-- Separador vertical ámbar -->
  <line x1="62" y1="10" x2="62" y2="50" stroke="#C8922A" stroke-width="0.75" opacity=".3"/>
  <!-- Wordmark -->
  <text x="72" y="30"
        font-family="'Cabinet Grotesk','Helvetica Neue',sans-serif"
        font-size="17" font-weight="800" letter-spacing="2.2"
        fill="#E8E6E1">TALLER MAYOR</text>
  <text x="72" y="43"
        font-family="'Cabinet Grotesk','Helvetica Neue',sans-serif"
        font-size="8" font-weight="500" letter-spacing="4.5"
        fill="#8A8F9E">CONSULTORÍA</text>
</svg>
```

#### Variantes del logo
| Variante | Fondo | Monograma | Texto "TALLER MAYOR" | Subtítulo | Uso |
|---|---|---|---|---|---|
| **Dark (primaria)** | `#0E1117` | `#E8E6E1` | `#E8E6E1` | `#8A8F9E` | Uso primario en todos los contextos digitales |
| **Light** | `#F0EDE6` | `#1A1F2E` | `#1A1F2E` | `#5A5F70` | Solo sobre fondos blancos/claros |
| **Monograma solo** | Transparente | `#E8E6E1` | — | — | Favicon, merch, contextos de espacio reducido |
| **Monograma sobre ámbar** | `#C8922A` | `#1A1F2E` | — | — | Solo casos especiales (portadas, tapas) |

#### Tamaños mínimos
- **Logo completo (impresión):** mínimo 20mm de ancho
- **Monograma (impresión):** mínimo 6mm
- **Logo digital:** mínimo 120px de ancho en pantalla
- **Monograma digital:** funciona desde 16px (favicon)

#### Reglas de uso del logo
✅ **Sí:**
- Usar siempre el SVG o PDF con fuentes embebidas
- Respetar el área de protección: mínimo la altura de la "M" en todos los lados
- Sobre fondos oscuros → versión Dark. Sobre fondos claros → versión Light

❌ **No:**
- No modificar proporciones, colores ni tipografía
- No aplicar sombras, efectos de relieve ni gradientes sobre el logo
- No usar sobre fondos grises intermedios (contraste mínimo 4.5:1)
- No recrear el logo con ninguna otra fuente tipográfica

### 3.5 CSS Design Tokens (copiar tal cual en cualquier implementación)
```css
:root {
  --bg:      #0E1117;
  --surf:    #1A1F2E;
  --surf2:   #222838;
  --surf3:   #2A3040;
  --amber:   #C8922A;
  --amber-h: #E0A030;
  --white:   #E8E6E1;
  --muted:   #8A8F9E;
  --faint:   #4A4F5E;
  --red:     #C04040;
  --font-d:  'Cabinet Grotesk', 'Helvetica Neue', sans-serif;
  --font-b:  'Satoshi', 'Inter', sans-serif;
}
```

---

## 4. TONO DE VOZ

### 4.1 Principios
| # | Principio | Descripción |
|---|---|---|
| 1 | **Técnico directo** | Hablar como ingeniero de campo, no como consultor de powerpoint |
| 2 | **Sin relleno** | Cada frase debe ganarse su lugar. Sin frases decorativas |
| 3 | **Primera persona** | Oswaldo habla directamente. No "nosotros" corporativo |
| 4 | **Específico** | Números, ejemplos concretos, casos reales (anonimizados si es necesario) |
| 5 | **Industria primero** | 80% conocimiento del rubro. 20% señal de TMC |

### 4.2 DO / DON'T

#### ✅ Hacer
- Hablar de problemas específicos de la industria salmonera chilena
- Nombrar el dolor real: tiempo perdido, margen erosionado, proyectos que no escalan
- Usar el conocimiento técnico del rubro como credencial implícita
- Dar insight antes de dar el pitch
- Cerrar con una pregunta que genera conversación

#### ❌ No hacer
- No usar jerga de MBA: "sinergia", "soluciones integrales", "valor agregado"
- No usar las palabras: "innovación", "disruptivo", "transformación digital" (a secas)
- No poner emojis (máximo 1 opcional al inicio en posts de LinkedIn)
- No hablar en plural corporativo ("en TMC creemos que…")
- No más de 4 hashtags en LinkedIn, siempre al final

### 4.3 Ejemplos de copy

| ❌ MAL | ✅ BIEN |
|---|---|
| "Somos una empresa de consultoría que ofrece soluciones integrales para potenciar tu negocio." | "Trabajamos con maestranzas que tienen capacidad técnica real pero ninguna estructura para mostrarlo." |
| "Transformamos tu operación con tecnología de vanguardia." | "Auditamos tus flujos en 48 horas. Te decimos qué está frenando el crecimiento y por qué." |
| "¡Contáctanos hoy mismo!" | "Si tu taller creció más rápido que tu estructura, empecemos con 30 minutos de conversación. Sin costo." |

### 4.4 Voz de Oswaldo en LinkedIn
- Posts de 8-14 líneas
- Máximo 4 hashtags al final
- Una frase de cierre fuerte que gana comentarios
- Sin emojis excepto 1 opcional al inicio
- Estructura: Insight del rubro → Contexto specific → Señal TMC (sutil) → Pregunta o provocación

---

## 5. SISTEMA DE PROPUESTAS TÉCNICO-COMERCIALES

### 5.1 Estructura de una propuesta TMC

```
PÁGINA 1 — PORTADA
  - Logo TMC + línea ámbar
  - "PROPUESTA DE CONSULTORÍA"
  - Nombre del cliente
  - Servicio específico
  - Fecha

PÁGINA 2 — DIAGNÓSTICO DEL PROBLEMA
  - El problema que tiene el cliente (específico, sin generalidades)
  - Cómo afecta operación / margen / crecimiento
  - Datos o indicadores observados

PÁGINA 3 — PROPUESTA DE SOLUCIÓN
  - Línea de servicio aplicada
  - Entregables concretos (lista numerada)
  - Metodología breve

PÁGINA 4 — CRONOGRAMA
  - Fases con semanas
  - Hitos y entregables por fase
  - Dependencias del cliente

PÁGINA 5 — INVERSIÓN
  - Precio claro sin rangos
  - Modelo de pago
  - Qué incluye / qué no incluye

PÁGINA 6 — PRÓXIMOS PASOS
  - Acción específica del cliente para avanzar
  - Contacto directo de Oswaldo
```

### 5.2 Reglas de redacción para propuestas
1. **Cliente primero:** El nombre del cliente aparece antes que TMC en la portada
2. **Problema antes que solución:** Siempre describir el problema del cliente antes de ofrecer la solución
3. **Entregables específicos:** Nunca decir "asesoría" — decir exactamente qué documento/sistema/proceso se entrega
4. **Precio sin ambigüedad:** Un número. No rangos.
5. **Sin formato de presentación genérico:** Cada propuesta refleja que TMC conoce ese taller específico

### 5.3 Servicios y entregables tipo

#### S1 — Branding Técnico
- Diagnóstico de imagen actual (auditoría)
- Nuevo sistema de identidad visual (logo, paleta, tipografía)
- Brand guide entregable (PDF + HTML)
- Plantillas de propuesta, tarjeta, firma email

#### S2 — Ingeniería de Procesos
- Diagnóstico 48 horas (on-site)
- Mapa de flujos actuales (VSM o equivalente)
- Identificación de 3 cuellos de botella principales
- Plan de implementación priorizado
- Seguimiento mensual (opcional)

#### S3 — Automatización e IA
- Auditoría de tareas repetitivas (formulario + entrevistas)
- Propuesta de automatización (n8n, Make, u otras)
- Implementación de 1-3 flujos prioritarios
- Capacitación al equipo
- Retainer mensual de mantención

#### S4 — PM Externo
- Definición de alcance y WBS
- Gestión semanal de hitos
- Reportes de avance al directorio/gerencia
- Gestión de proveedores y subcontratos
- Cierre formal con lecciones aprendidas

---

## 6. MERCADO OBJETIVO

### 6.1 Cliente ideal (ICP)
- **Industria:** Salmonicultura chilena — fase de procesamiento
- **Tipo de empresa:** Maestranzas industriales, fábricas de equipos de salas de proceso
- **Tamaño:** 15-150 personas, en crecimiento activo
- **Síntoma principal:** Crecieron rápido, opera bien a mediana escala pero no puede escalar más sin estructura
- **Decisor de compra:** Gerente general / dueño / director técnico
- **Señal de compra:** Perdieron un proyecto grande por imagen, o tienen cuellos de botella operacionales crónicos

### 6.2 Primer cliente objetivo
- **Nombre:** AquaServ (en negociación al momento de lanzamiento)
- **Contexto:** Primera relación comercial de TMC

### 6.3 Industria de referencia
- Industria salmonera chilena — mayor concentración en regiones de Los Lagos, Aysén, Magallanes
- Evento de referencia: AquaSur (feria bienal de acuicultura, Puerto Montt)
- Referente técnico: Klaus Hoseth (mencionado en contexto de ingeniería inversa en la industria)

---

## 7. STACK TECNOLÓGICO

### 7.1 Plataformas activas
| Rol | Plataforma |
|---|---|
| Sitio web | Framer (HTML/CSS + Tailwind export) |
| SaaS interno (AquaServ) | Next.js + Supabase |
| Automatización | n8n |
| Documentación | Notion |
| Diseño | Canva + DALL-E para conceptualización |

### 7.2 Stack de desarrollo para brand assets
| Elemento | Tecnología |
|---|---|
| Framework | Vite + React + TypeScript |
| Estilos | Tailwind CSS v3 + CSS Custom Properties |
| Componentes | shadcn/ui (40+ componentes) |
| Fuentes | Fontshare CDN |
| Export imágenes | html2canvas 1.4.1 |
| Node.js | v20 |

### 7.3 Brand assets disponibles
Todos en `app/assets/brand/`:
| Archivo | Descripción |
|---|---|
| `index_brand.html` | Hub central — 13 assets, paleta, tipografía |
| `tmc-brand-guide.html` | Guía de marca completa (5 capítulos) |
| `business-card.html` | Tarjeta de visita 90×50mm |
| `proposal-cover.html` | Portada de propuesta A4 |
| `email-signature.html` | Firma email HTML-safe |
| `linkedin-cover.html` | Cover LinkedIn 1584×396px |
| `merch/tmc-taza.html` | Taza 350ml — 3 colorways |
| `merch/tmc-chaqueta.html` | Chaqueta softshell |
| `merch/tmc-camiseta.html` | Camiseta — 3 colorways |
| `merch/tmc-camisa-manga-larga.html` | Camisa Oxford manga larga |
| `merch/tmc-carpeta.html` | Carpeta corporativa A4 |

---

## 8. REGLAS PARA GENERACIÓN DE CONTENIDO CON IA

### 8.1 Cuando generes una propuesta técnico-comercial, siempre:
1. Comienza con el problema del cliente — no con TMC
2. Usa el nombre real del cliente en la portada
3. Los entregables son sustantivos concretos, nunca verbos vagos
4. El precio va en una sola línea, sin rangos
5. Cierra con un CTA de acción específica ("Respondeme este correo confirmando si quieres una reunión el jueves")

### 8.2 Cuando generes copy de marca, siempre:
1. Verifica que el tagline sea exactamente: *"Ingeniería que ordena. Consultoría que escala."*
2. El ámbar (`#C8922A`) es el único color de acento — ningún otro
3. "TALLER MAYOR" siempre en mayúsculas, "Consultoría" con acento
4. Nunca generar el monograma TM desde cero — usar los SVG paths canónicos de la sección 3.4

### 8.3 Cuando generes interfaces o documentos HTML:
1. Usar siempre los design tokens CSS de la sección 3.5
2. Cargar fuentes desde Fontshare CDN (URL en sección 3.3)
3. Cabinet Grotesk para titulares, Satoshi para cuerpo — nunca al revés
4. Fondo base `#0E1117`, superficies en escala navy
5. Cualquier acento de color → únicamente `#C8922A`
6. No usar gradientes en botones ni en el logo
7. No usar íconos dentro de círculos de color (anti-patrón)
8. WCAG AA mínimo en todo el texto

### 8.4 Lo que TMC NO es
- No es consultoría genérica de negocios
- No es una startup SaaS
- No es una agencia de marketing digital
- No "transforma digitalmente" empresas
- No tienen "soluciones integrales"

---

## 9. MENSAJES CLAVE POR CANAL

### 9.1 LinkedIn (voz Oswaldo, primera persona)
> "Para maestranzas y fábricas de equipos de salas de proceso que crecieron más rápido que su estructura."

> "No es consultoría genérica. Es saber cómo se ve una maestranza cuando funciona bien de verdad."

> "Auditamos tu operación en 48 horas. Te decimos qué está frenando el crecimiento."

### 9.2 Propuesta (presentación a cliente)
> "Taller Mayor Consultoría trabaja con maestranzas que tienen capacidad técnica real pero ninguna estructura para proyectarla. Entramos, diagnosticamos y ejecutamos."

### 9.3 Web (hero)
> "Ingeniería que ordena."  
> "Consultoría que escala."  
> "Para maestranzas y fábricas de equipos de salas de proceso que crecieron más rápido que su estructura."

### 9.4 Email / contacto directo
> "Partamos con 30 minutos de conversación. Sin costo."

---

## 10. CHECKLIST DE CALIDAD PARA CUALQUIER ENTREGA TMC

Antes de entregar cualquier pieza (propuesta, post, diseño, código):

- [ ] ¿El tagline está correcto y sin parafrasear?
- [ ] ¿El ámbar `#C8922A` es el único color de acento?
- [ ] ¿Se usó Cabinet Grotesk para titulares y Satoshi para cuerpo?
- [ ] ¿No hay gradientes en botones ni en el logo?
- [ ] ¿El copy es directo y técnico, sin jerga de MBA?
- [ ] ¿Los entregables de la propuesta son sustantivos concretos?
- [ ] ¿El contraste de texto cumple WCAG AA (mínimo 4.5:1)?
- [ ] ¿Los paths SVG del monograma son los canónicos de la sección 3.4?
- [ ] ¿El tono habla de problemas del cliente antes que de TMC?

---

*Documento generado por Brand Manager + Dev de Taller Mayor Consultoría · v1.0 · Abril 2026*  
*Uso interno y para proveedores autorizados. No distribuir públicamente.*
