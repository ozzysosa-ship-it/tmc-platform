# TMC LAUNCH MEGA-PROMPT
# Paste this ENTIRE block into GitHub Copilot Agent Mode (Claude Opus 4.6)
# Mode: Agent | Model: Claude Opus 4.6 | Skills: ALL installed

---

You are acting as CTO + Lead Designer + Brand Manager for the launch of
"Taller Mayor Consultoría" (TMC) this week.

Load and activate ALL installed skills before starting:
- tmc-master (ALWAYS active — business context)
- ui-ux-pro-max (design system, 99 UX guidelines)
- frontend-design (component generation)
- writing-skills (all copy and content)
- verification-before-completion (QA before every file delivery)

Do NOT ask for confirmation between phases.
Execute everything sequentially. Iterate each phase until it passes QA.
If a phase fails QA, fix and re-run before moving to the next.

---

## BUSINESS CONTEXT (from tmc-master skill)

Company: Taller Mayor Consultoría (TMC)
Founder: Oswaldo Sosa — Civil Electronic Engineer,
         MSc in Project Management, ex-team member at
         Chile's largest salmon processing equipment manufacturer
Market: Chilean salmon industry — maestranzas and
        processing room equipment factories
First client: AquaServ (in negotiation)
Services: Technical Branding | Process Engineering |
          AI & Automation | External Project Management
Tone: Technical. Direct. Zero filler. Zero MBA clichés.

Design system:
  Primary background: Deep navy #1A1F2E
  Accent: Industrial amber/gold #C8922A
  Text light: #E8E6E1
  Text muted: #8A8F9E
  Font display: Cabinet Grotesk (Fontshare) — headlines only
  Font body: Satoshi (Fontshare) — all body text
  Feel: Engineering precision meets modern agency.
        Think Stripe meets a precision machining catalogue.
        NOT generic consulting. NOT SaaS startup.

---

## PHASE 1 — SVG LOGO SYSTEM
### Output: ./assets/logo/

Create 4 SVG logo variants for TMC.

Logo concept: The "T" and "M" letterforms built from
precision engineering geometry — square corners, 45° chamfers,
structural grid lines. Think technical drawing meets wordmark.
No circles. No gear icons. No gradients. Pure geometry.

Principles (Paul Rand / Vignelli):
- Works at 24px favicon AND at 500px hero size
- Monochrome first, amber accent as enhancement only
- Geometric construction — every angle deliberate
- The negative space between T and M should feel like
  a calibration mark or alignment guide

Deliver:
1. logo-primary.svg — full wordmark "TALLER MAYOR" + "CONSULTORÍA"
   horizontal layout, navy background version
2. logo-light.svg — same wordmark for light backgrounds
3. logo-mark.svg — icon only (TM monogram), 100x100 viewBox
4. favicon.svg — simplified 32x32 version of the mark

Embed the amber accent (#C8922A) ONLY on the geometric mark,
not on the wordmark text. The wordmark text is pure white or
pure navy depending on background.

QA before delivering: Does it work at 24px? Does it feel
like it belongs on a precision equipment catalogue AND
a modern consulting website? If not, redesign.

---

## PHASE 2 — WEBSITE REBUILD
### Output: ./taller-mayor-web/index.html

Audit the existing HTML files in the current project.
Preserve any copy that is technically accurate.
Completely rebuild the visual design from scratch using
the TMC design system above.

Build a single production-grade HTML file with embedded
CSS and JS. Use Tailwind CDN v3 + custom CSS variables.

### DESIGN SYSTEM (implement before any component)

```css
:root {
  /* TMC Custom Palette */
  --color-bg:        #0E1117;
  --color-surface:   #1A1F2E;
  --color-surface-2: #222838;
  --color-surface-3: #2A3040;
  --color-border:    rgba(200, 146, 42, 0.15);
  --color-text:      #E8E6E1;
  --color-text-muted:#8A8F9E;
  --color-text-faint:#4A4F5E;
  --color-accent:    #C8922A;
  --color-accent-hover: #E0A030;
  --color-accent-dim: rgba(200, 146, 42, 0.12);

  /* Type scale — fluid clamp() */
  --text-xs:   clamp(0.75rem,  0.7rem + 0.25vw, 0.875rem);
  --text-sm:   clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-lg:   clamp(1.125rem, 1rem + 0.75vw, 1.5rem);
  --text-xl:   clamp(1.5rem, 1.2rem + 1.25vw, 2.25rem);
  --text-2xl:  clamp(2rem, 1.2rem + 2.5vw, 3.5rem);
  --text-hero: clamp(2.5rem, 1rem + 4vw, 5rem);

  /* Spacing 4px grid */
  --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem;
  --space-4: 1rem;    --space-6: 1.5rem; --space-8: 2rem;
  --space-12: 3rem;   --space-16: 4rem;  --space-24: 6rem;

  /* Fonts */
  --font-display: 'Cabinet Grotesk', 'Helvetica Neue', sans-serif;
  --font-body: 'Satoshi', 'Inter', sans-serif;

  /* Radius */
  --radius-sm: 0.25rem; --radius-md: 0.5rem;
  --radius-lg: 0.75rem; --radius-xl: 1rem;

  /* Transitions */
  --transition: 180ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

### SECTIONS (exact order, no deviation)

**NAV — sticky, minimal**
- Left: SVG logo (inline, from Phase 1)
- Right: "Servicios" (anchor), "Quiénes somos" (anchor),
  amber CTA button "Conversemos" → scroll to contact
- Mobile: hamburger → full overlay menu
- Behavior: transparent → solid surface-2 on scroll

**HERO — full viewport height**
- Layout: Split 60/40. Left: headline + sub + CTA.
  Right: abstract technical SVG illustration (precision
  grid lines, measurement marks, technical drawing aesthetic —
  NO equipment photos, NO generic isometric)
- Headline (display font, --text-hero):
  "Ingeniería que ordena."
  Second line in amber: "Consultoría que escala."
- Body (--text-base, muted):
  "Para maestranzas y fábricas de equipos de salas de proceso
  que crecieron más rápido que su estructura."
- CTA primary (amber): "Conversemos" → contact section
- CTA ghost: "Ver servicios" → services section
- Scroll indicator: amber animated chevron at bottom center
- ANTI-PATTERN CHECK: No gradient background. No blobs.
  No centered layout on desktop. Left-aligned text.

**PROBLEM SECTION — dark, asymmetric**
- Title (left-aligned): "Lo que frena a los talleres con potencial"
- Layout: NOT 3 equal columns. Use:
  1 large card (60% width) + 2 stacked small cards (40%)
- Large card — "Operación sin estructura":
  The workshop grew without designed workflows.
  Every project is improvised. Time and margin lost daily.
- Small card 1 — "Imagen que no proyecta":
  Technical capacity exists. Branding doesn't communicate it.
  Big clients don't call.
- Small card 2 — "Proyectos que no escalan":
  No clear product portfolio. Growth depends on word-of-mouth.
- Cards: surface-2 bg, amber left-accent line (1px only,
  ultra-thin — NOT the thick colored border anti-pattern),
  no icons in circles

**SERVICES SECTION — light surface**
- Title: "Cómo trabajamos"
- Subtitle: "Cuatro líneas. Un ciclo de crecimiento completo."
- Layout: 2x2 grid on desktop, 1 col mobile
  Each card has: service name (display font),
  one-line description, price model tag (amber badge),
  hover reveals 3 deliverable bullets
- S1: Branding Técnico | Redefinimos tu identidad comercial
  Tag: Proyecto fijo
- S2: Ingeniería de Procesos | Diseñamos cómo opera tu taller
  Tag: Diagnóstico + implementación
- S3: Automatización e IA | Herramientas que reducen trabajo manual
  Tag: Retainer mensual
- S4: PM Externo | Gestionamos tus proyectos grandes
  Tag: Por proyecto

**FOUNDER SECTION — full-width split**
- Left (40%): photo placeholder (div with amber gradient,
  aspect-ratio 3/4, --radius-lg)
- Right (60%): 
  Eyebrow (amber, uppercase, --text-xs tracked):
  "EXPERIENCIA DIRECTA EN EL RUBRO"
  Headline: "El conocimiento que no se construye desde afuera."
  Body: "Taller Mayor Consultoría nace desde adentro de la
  industria salmonera chilena. Su fundador es ingeniero civil
  electrónico con maestría en gestión de proyectos, con
  experiencia directa en la operación de referencia del sector.
  No es consultoría genérica. Es saber cómo se ve una
  maestranza cuando funciona bien de verdad."
  LinkedIn link → (text link, not button): "Conecta en LinkedIn →"

**CONTACT SECTION — dark, full-width**
- Headline: "¿Tu operación creció más rápido que tu estructura?"
- Sub: "Partamos con 30 minutos de conversación. Sin costo."
- Form (3 fields max): Nombre | Empresa | Tu mayor desafío hoy
- Submit button: amber, full-width on mobile
- Below form: "O escríbenos a contacto@tallermayor.cl"
- Form validation: inline errors, no toast notifications

**FOOTER — minimal**
- Logo + tagline
- "Chile · Industria Salmonera · 2026"
- LinkedIn icon link only

### MOTION (subtle, purposeful)
- Hero: staggered fade-up on load (headline → body → CTAs)
- Sections: IntersectionObserver fade-up, threshold 0.1,
  translateY(24px) → translateY(0), opacity 0 → 1
- Service cards: hover scale(1.02) + shadow elevation
- NO parallax. NO scroll-triggered animation on text.
- Respect prefers-reduced-motion

### TECHNICAL
- Single HTML file with embedded <style> and <script>
- Fonts via Fontshare CDN:
  https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&f[]=satoshi@400,500,700&display=swap
- Lucide icons via CDN (no icon in colored circles)
- Mobile-first, tested at 375px and 1280px
- WCAG AA contrast on all text
- No localStorage

### QA GATE (must pass before delivering)
- [ ] Logo renders correctly at nav size (32px height)
- [ ] Hero text left-aligned on desktop, centered on mobile
- [ ] No 3-column equal feature grid anywhere
- [ ] No gradient on any button
- [ ] No icons in colored circles
- [ ] Form validation works without page reload
- [ ] Fonts load from Fontshare CDN
- [ ] Scroll animations use IntersectionObserver
- [ ] Mobile menu works at 375px
- [ ] WCAG AA: amber on navy passes 4.5:1 check
If any check fails, fix before delivering.

---

## PHASE 3 — LINKEDIN CONTENT CALENDAR
### Output: ./content/linkedin-posts.md

Generate 5 LinkedIn posts for Oswaldo Sosa,
weeks 1-5 post AquaSur 2026.

Tone rules (from writing-skills + tmc-master):
- Voice: first person, Oswaldo speaks directly
- No consulting jargon. No "soluciones integrales"
- 8-14 lines per post
- Max 4 hashtags, all at the end
- One strong closing sentence that earns a comment
- No emoji except 1 optional at very start
- 80% industry insight, 20% TMC signal

Post 1 — Week 1 (publish Monday Mar 30):
Topic: AquaSur 2026 closing reflection
Angle: 3 patterns observed across the booths that reveal
where the industry is heading. Make one of them uncomfortable
but true. Close with a question.

Post 2 — Week 2 (publish Wed Apr 7):
Topic: The real reason maestranzas don't win big contracts
Angle: It's not capability. It's not price.
It's the inability to present as a serious counterpart.
One concrete story (anonymized). Close with a provocation.

Post 3 — Week 3 (publish Mon Apr 14):
Topic: What a workflow audit reveals in 48 hours
Angle: When you sit with a workshop's team for 2 days,
you find the same 3 bottlenecks in every single one.
Name them specifically. This is the TMC diagnostic
without saying TMC.

Post 4 — Week 4 (publish Wed Apr 21):
Topic: The engineering inverse problem in Chilean industry
(reference to the Klaus Hoseth post, subtle callback)
Angle: Importing technology is step 1.
Building your own knowledge is step 2.
Most companies are still on step 1.5.
Close: where are you on this scale?

Post 5 — Week 5 (publish Mon Apr 28):
Topic: Why I'm building TMC lean (first explicit mention)
Angle: Not a big consulting firm. No associates.
No overhead. Just direct expertise applied where it matters.
This is the "soft launch" post. Announce without announcing.
Close: invite DMs from maestranza owners.

For each post include:
- [COPY READY] — full post text, copy-paste ready
- [BEST TIME] — optimal publish time (Chilean timezone)
- [HOOK RATING] — score the opening line 1-10 with reason
- [ENGAGEMENT TRIGGER] — what should generate comments

---

## PHASE 4 — MERCHANDISING ASSETS
### Output: ./assets/brand/

Generate 4 brand asset HTML files
(print-ready layouts, 96dpi screen preview):

**4A: business-card.html**
- Size: 90mm x 50mm (landscape)
- Front: Logo mark large (amber on navy), name, title
  "Fundador · Taller Mayor Consultoría"
  LinkedIn URL, email
- Back: Full wordmark + tagline on navy
  "Ingeniería que ordena. Consultoría que escala."
- Print marks: 3mm bleed, crop marks in CSS
- Font: Cabinet Grotesk for name/title, Satoshi for details

**4B: linkedin-cover.html**
- Size: 1584px x 396px
- Layout: Full navy background, subtle technical grid
  pattern (SVG repeating-linear-gradient, very subtle),
  logo left-aligned, tagline right-aligned,
  amber horizontal rule at bottom 4px
- No photo, no illustration — pure typographic

**4C: email-signature.html**
- HTML email-safe (inline styles only, no flexbox)
- Table-based layout (email clients)
- Name | Title | Company | LinkedIn | Email | Website
- Amber divider line, logo mark as inline SVG fallback text

**4D: proposal-cover.html**
- A4 portrait (210mm x 297mm)
- For use as page 1 of any TMC proposal
- Top: TMC logo
- Center: "PROPUESTA DE CONSULTORÍA"
  Client name placeholder: [NOMBRE CLIENTE]
  Date placeholder: [FECHA]
- Bottom: Oswaldo Sosa | contact details | website
- Subtle navy-to-surface gradient background, amber accents

QA: All assets must look identical brand to website.
Same fonts, same colors, same radius system.

---

## PHASE 5 — BRAND STYLE GUIDE
### Output: ./assets/brand/tmc-brand-guide.html

Single HTML page documenting:
1. Logo usage rules (with SVGs embedded)
2. Color palette (swatches with hex + OKLCH values)
3. Typography specimens (Cabinet Grotesk + Satoshi)
4. Tone of voice (5 do's + 5 don'ts with examples)
5. Incorrect usage examples (crossed out examples)

This is the internal reference. Keep it brief but complete.
A freelancer should be able to pick this up and produce
on-brand work without asking questions.

---

## FINAL DELIVERY REPORT

After all phases complete, output a markdown report:

```
# TMC Launch — Delivery Report

## Files Created
[list all files with paths]

## QA Results
[pass/fail for each phase QA gate]

## Token Usage Estimate
[rough estimate of tokens used per phase]

## Recommended Next Steps
[3 concrete actions for Oswaldo this week]
```

---

## EXECUTION ORDER

Run phases in this order. Do not skip.
Do not stop to ask questions.
If you encounter ambiguity, make the stronger design decision
and document it in the delivery report.

Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Report

Start now with Phase 1 — SVG Logo System.
