import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Moon, Sun } from "lucide-react";
import GlobeDemo from "@/components/globe-demo";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BackgroundLines } from "@/components/ui/background-lines";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { Vortex } from "@/components/ui/vortex";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOTCA — Aprende a pensar con la tecnología" },
      { name: "description", content: "MOTCA: Modelo de Transferencia de Capacidad Adaptativa. Desarrolla la capacidad de entender, dirigir y adaptarte a cualquier entorno tecnológico." },
      { property: "og:title", content: "MOTCA — Aprende a pensar con la tecnología" },
      { property: "og:description", content: "Un modelo estructural que desarrolla tu capacidad de pensar con la tecnología, no de depender de ella." },
    ],
  }),
  component: Landing,
});

const modelNodes = [
  {
    n: "N1",
    node: "01",
    label: "El Fonema",
    title: "Fonema de la Mente",
    tagline: "Fundamentos del pensamiento digital.",
    desc: "Te enseñaron a aislar el sonido y la existencia de cada letra. Aprendiste a reconocer las piezas mínimas de forma individual.",
    colors: [[16, 185, 129], [52, 211, 153]],
    speed: 4.2,
    accent: "from-emerald-400/35 via-teal-500/15 to-transparent",
    canvasBg: "!bg-[oklch(0.17_0.07_255)]",
  },
  {
    n: "N2",
    node: "02",
    label: "La Sintaxis",
    title: "Sintaxis del Pensamiento",
    tagline: "Estructura, conexión y flujo.",
    desc: "Una vez que comprendiste los fonemas, tus maestros te guiaron para unirlos. Aprendiste cómo una letra se conecta con otra para formar palabras, y cómo esas palabras se estructuran en oraciones con un sentido lógico y armónico.",
    colors: [[20, 149, 255], [99, 102, 241]],
    speed: 3.6,
    accent: "from-sky-400/35 via-indigo-500/18 to-transparent",
    canvasBg: "!bg-[oklch(0.15_0.08_260)]",
  },
  {
    n: "N3",
    node: "03",
    label: "La Lectura Fluida",
    title: "Lectura Fluida",
    tagline: "Independencia analítica y reconocimiento de patrones.",
    desc: "Gracias a ese orden conceptual, un día te paraste frente a un texto completamente nuevo y lograste descifrarlo de corrido. Tu mente ya había asimilado el método, otorgándote la libertad de comprender cualquier libro de forma autónoma.",
    colors: [[125, 211, 252], [34, 211, 238]],
    speed: 3.2,
    accent: "from-cyan-300/35 via-blue-500/15 to-transparent",
    canvasBg: "!bg-[oklch(0.14_0.07_250)]",
  },
  {
    n: "N4",
    node: "04",
    label: "La Escritura Propia",
    title: "Escritura Propia",
    tagline: "Creación de soluciones propias con criterio.",
    desc: "El momento exacto en el que tomaste el lápiz para plasmar tus propias ideas, crear tus historias y generar un impacto real en tu entorno.",
    colors: [[250, 204, 21], [45, 212, 191]],
    speed: 4.8,
    accent: "from-amber-300/30 via-emerald-400/18 to-transparent",
    canvasBg: "!bg-[oklch(0.16_0.06_255)]",
  },
];

const terrains = ["Docentes", "Empresas", "Jóvenes 13-18", "Emprendedores", "Técnicos y salud"];

const paths = [
  "Líderes Académicos y Docentes",
  "Alta Dirección y Líderes de Equipos",
  "Profesionales del Derecho y Regulación",
  "Consultores y Asesores Independientes",
  "Emprendedores y Creadores de Proyectos",
  "Estudiantes y Jóvenes Profesionales",
  "Profesionales Técnicos y de la Salud",
  "Familias y Hogar Digital",
];

const learnOptions = [
  "Lecciones cortas diarias",
  "Retos prácticos",
  "Proyectos guiados",
  "Con comunidad",
  "A mi propio ritmo",
];
const featureOptions = [
  "Rutas personalizadas",
  "Tutor IA conversacional",
  "Evaluación adaptativa",
  "Gamificación",
  "Recursos descargables",
];
const duolingoOptions = ["Sí, totalmente", "Sí, si es divertida", "Tal vez", "No lo creo"];
const whatsappNumber = "573128438532";

const getWhatsAppHref = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const founders = [
  {
    initials: "LP",
    name: "Lorena Pitalúa",
    role: "Founder",
    imageSrc: assetPath("founders/lorena-headshot.jpg"),
    avatarClassName: "scale-[1.06] translate-y-1",
    linkedinUrl: "https://www.linkedin.com/",
    description:
      "Lorena conecta personas, tecnología, derecho y toma de decisiones para transformar problemas complejos en estructuras claras y comprensibles. Su visión parte de una idea central: las soluciones más valiosas nacen cuando se integran distintas perspectivas para ayudar a las personas a desenvolverse con mayor autonomía en entornos cambiantes.",
  },
  {
    initials: "RA",
    name: "Ricardo Arcos",
    role: "Co-founder",
    imageSrc: assetPath("founders/ricardo-headshot-v2.jpg"),
    avatarClassName: "scale-[1.08]",
    linkedinUrl: "https://www.linkedin.com/",
    description:
      "Ricardo conecta ingeniería, datos, inteligencia artificial y estrategia de negocio para convertir retos complejos en soluciones digitales claras, medibles y accionables. Su enfoque combina tecnología, analítica y visión estratégica para ayudar a las personas y organizaciones a adaptarse, aprender y tomar mejores decisiones.",
  },
];

const PAGE_CONTAINER = "mx-auto w-full max-w-6xl px-5 sm:px-6";

const fastEase = [0.16, 1, 0.3, 1] as const;
const fastSpring = { type: "spring" as const, stiffness: 720, damping: 40, mass: 0.35 };
const brandCardShell =
  "relative overflow-hidden rounded-2xl border border-electric/25 bg-navy shadow-xl shadow-electric/15";

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const storedTheme = window.localStorage.getItem("motca-theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("motca-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-50 overflow-hidden bg-background" aria-hidden="true">
        <BackgroundBeams className="opacity-60 mix-blend-multiply dark:opacity-50 dark:mix-blend-screen [mask-image:linear-gradient(180deg,transparent_0%,black_8%,black_86%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.74_0.18_155/0.18),transparent_42%),radial-gradient(ellipse_at_top_right,oklch(0.62_0.2_250/0.16),transparent_48%),linear-gradient(180deg,oklch(1_0_0/0.76),oklch(0.985_0.01_240/0.82)_42%,oklch(0.985_0.01_240/0.92))] dark:bg-[radial-gradient(ellipse_at_top,oklch(0.74_0.18_155/0.11),transparent_48%),radial-gradient(ellipse_at_bottom_right,oklch(0.62_0.2_250/0.16),transparent_55%),linear-gradient(180deg,oklch(0.09_0.035_260/0.9),oklch(0.13_0.045_255/0.88)_42%,oklch(0.08_0.028_255/0.94))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_16%,var(--background)_96%)] opacity-25 dark:opacity-35" />
      </div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/82 backdrop-blur-md dark:bg-background/78">
        <div className={`${PAGE_CONTAINER} py-4 flex items-center justify-between`}>
          <a href="#top" className="font-display font-bold text-navy text-lg tracking-tight">
            MOTCA
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-navy">
            <a href="#origin" className="hover:text-electric transition-colors">Origen</a>
            <a href="#model" className="hover:text-electric transition-colors">Modelo</a>
            <a href="#paths" className="hover:text-electric transition-colors">Vías</a>
            <a href="#form" className="hover:text-electric transition-colors">Diagnóstico</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href="#form" className="inline-flex rounded-lg bg-navy px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy-deep">
              Solicitar diagnóstico
            </a>
            <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode((v) => !v)} />
          </div>
          <button
            className="md:hidden p-2 text-navy"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border bg-background"
            >
              <div className="px-5 py-4 flex flex-col gap-3 text-navy">
                <a href="#origin" onClick={() => setMenuOpen(false)}>Origen</a>
                <a href="#model" onClick={() => setMenuOpen(false)}>Modelo</a>
                <a href="#paths" onClick={() => setMenuOpen(false)}>Vías</a>
                <a href="#form" onClick={() => setMenuOpen(false)}>Diagnóstico</a>
                <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode((v) => !v)} className="mt-1" />
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.62_0.20_250/0.14),transparent_60%),radial-gradient(ellipse_at_bottom_left,oklch(0.74_0.18_155/0.12),transparent_55%),linear-gradient(180deg,oklch(1_0_0/0.8),oklch(1_0_0/0.62))] dark:bg-[radial-gradient(ellipse_at_top_right,oklch(0.62_0.20_250/0.16),transparent_60%),radial-gradient(ellipse_at_bottom_left,oklch(0.74_0.18_155/0.1),transparent_55%),linear-gradient(180deg,oklch(0.09_0.035_260/0.76),oklch(0.1_0.035_255/0.58))]" />
          <div className={`${PAGE_CONTAINER} py-14 md:py-20 lg:py-24`}>
            <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(320px,1fr)] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10 text-left"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-motca-green/15 text-navy-deep text-xs font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-motca-green animate-pulse" />
                MODELO DE TRANSFERENCIA DE CAPACIDAD ADAPTATIVA
              </span>
              <h1 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-bold text-navy-deep leading-[1.08]">
                <span className="block">
                  Aprende a pensar <span className="text-electric">con la tecnología</span>,
                </span>
                <span className="block">no a depender de ella.</span>
                <span className="mt-3 inline-flex max-w-full flex-nowrap items-center gap-x-3 text-motca-green">
                  <span className="shrink-0">Eso es</span>
                  <LayoutTextFlip
                    className="shrink-0"
                    words={[
                      "MOTCA",
                      "Soñadores",
                      "Transformadores",
                      "Innovadores",
                      "Educación",
                    ]}
                  />
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Un modelo estructural que desarrolla en ti la capacidad de entender, dirigir y adaptarte a cualquier entorno tecnológico, sin importar qué herramienta cambie mañana.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#form" className="px-6 py-3 rounded-lg bg-navy text-primary-foreground font-medium hover:bg-navy-deep transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/20">
                  Solicitar diagnóstico
                </a>
                <a href="#origin" className="px-6 py-3 rounded-lg border border-border bg-card text-navy font-medium hover:border-electric hover:text-electric transition-colors">
                  Conocer el origen
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative min-h-[24rem] sm:min-h-[30rem] md:min-h-[36rem]"
              data-motca-hero-globe
            >
              <GlobeDemo compact showCopy={false} />
            </motion.div>
            </div>
          </div>
      </section>

      <SectionDivider variant="heroToOrigin" />

      {/* ORIGIN */}
      <Section id="origin" eyebrow="El origen de MOTCA" title="La evolución de la autonomía" tone="mint">
        <div className="mx-auto w-full max-w-3xl space-y-6 text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Piensa por un momento en tu infancia. Recuerda el día en que abriste un libro por primera vez. En ese momento, las páginas eran un conjunto de formas y trazos misteriosos — un código fascinante que sabías que contenía un gran valor, pero que aún no podías interpretar por ti mismo.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            El proceso para dominarlo no ocurrió de la noche a la mañana, ni se dio a través de saltos cuánticos. Tus maestros sabían que para construir una habilidad para toda la vida, la mente humana necesita una secuencia natural y progresiva.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.22, delay: 0.08, ease: fastEase }}
            className={`${brandCardShell} p-6 md:p-8`}
          >
            <BrandCardBackdrop accent="from-emerald-400/35 via-motca-green/18 to-transparent" />
            <GlowingEffect spread={36} glow disabled={false} proximity={80} inactiveZone={0.01} borderWidth={1.2} />
            <div className="relative z-10">
              <span className="inline-flex rounded-md bg-gradient-to-br from-electric to-motca-green px-2.5 py-1 font-mono text-xs font-bold text-primary-foreground shadow-md shadow-electric/30">
                MOTCA
              </span>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                Nace precisamente para replicar este viaje natural y evolutivo dentro de la transformación digital y la toma de decisiones inteligentes. En lugar de enfocarse en la memorización de interfaces temporales, este modelo estructura tu cerebro para que domines la lógica profunda de los datos, la analítica de negocios y la gobernanza. Es el chasis intelectual que te devuelve la brújula estratégica y la total soberanía cognitiva para dirigir con absoluta claridad cualquier entorno tecnológico, presente o futuro.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <SectionDivider variant="originToModel" />

      {/* MODEL NODES */}
      <Section
        id="model"
        eyebrow="El modelo"
        title="Cuatro nodos. Un centro cognitivo."
        subtitle="La misma secuencia natural del aprendizaje, ahora aplicada a tu autonomía digital."
        tone="clean"
        contentClassName="mx-auto max-w-5xl"
      >
        <ModelNodesShowcase />
      </Section>

      <SectionDivider variant="modelToPaths" />

      {/* PATHS */}
      <Section id="paths" eyebrow="Vías" title="Vías de expansión" tone="blue">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {paths.map((p, i) => (
              <RevealPathCard key={p} path={p} index={i} />
            ))}
          </div>
      </Section>

      <SectionDivider variant="pathsToForm" />

      {/* FOUNDERS */}
      <Section
        id="founders"
        eyebrow="Equipo fundador"
        title="Quién está detrás de MOTCA"
        subtitle="MOTCA nace de la unión entre tecnología, estrategia, aprendizaje y visión humana. Detrás de esta iniciativa hay dos founders que comparten una misma convicción: ayudar a las personas a desarrollar capacidades para adaptarse, decidir y avanzar con autonomía en entornos cambiantes."
        tone="clean"
        contentClassName="mx-auto max-w-5xl"
      >
        <FoundersSection />
      </Section>

      <SectionDivider variant="foundersToForm" />

      {/* FORM */}
      <Section
        id="form"
        eyebrow="Diagnóstico"
        title="Solicita tu diagnóstico de entrada"
        subtitle="Una entrevista estructurada para identificar tu punto de partida en el modelo MOTCA."
        tone="form"
        contentClassName="mx-auto max-w-5xl"
      >
        <DiagnosticForm />
      </Section>

      <WhatsAppFeedbackButton />
      </main>

      <footer className="border-t border-border mt-12">
        <div className={`${PAGE_CONTAINER} py-8 flex flex-col items-center justify-center gap-3 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left`}>
          <div className="font-display font-semibold text-navy-deep">MOTCA</div>
          <p>© {new Date().getFullYear()} Modelo de Transferencia de Capacidad Adaptativa.</p>
        </div>
      </footer>
    </div>
  );
}

function ThemeToggle({
  darkMode,
  onToggle,
  className = "",
}: {
  darkMode: boolean;
  onToggle: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
      onClick={onToggle}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-navy shadow-sm shadow-navy/5 transition-all hover:border-electric hover:text-electric dark:shadow-black/20 ${className}`}
    >
      {darkMode ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
}

function BrandCardBackdrop({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-navy/88 via-[oklch(0.18_0.08_260)]/72 to-[oklch(0.13_0.06_255)]/90" />
      <div className={`absolute inset-0 bg-gradient-to-tr ${accent}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.62_0.2_250/0.22),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.74_0.18_155/0.18),transparent_52%)]" />
    </div>
  );
}

function ModelNodesShowcase() {
  const [activeNode, setActiveNode] = useState(0);
  const active = modelNodes[activeNode];

  return (
    <div className="relative w-full">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-64 max-w-3xl bg-[radial-gradient(ellipse_at_top,oklch(0.62_0.2_250/0.14),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_top,oklch(0.62_0.2_250/0.1),transparent_68%)]"
      />

      <div className="relative mb-8">
        <div className="relative hidden h-1 overflow-hidden rounded-full bg-border/80 md:block">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-electric via-motca-green to-electric"
            animate={{ width: `${((activeNode + 1) / modelNodes.length) * 100}%` }}
            transition={{ duration: 0.16, ease: fastEase }}
          />
        </div>

        <div className="relative mt-0 grid grid-cols-2 gap-2 md:mt-5 md:grid-cols-4 md:gap-3">
          {modelNodes.map((node, i) => {
            const isActive = activeNode === i;
            return (
              <motion.button
                key={node.n}
                type="button"
                onClick={() => setActiveNode(i)}
                onMouseEnter={() => setActiveNode(i)}
                onFocus={() => setActiveNode(i)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
                whileHover={{ y: -2 }}
                className={`relative overflow-hidden rounded-xl border p-4 text-left transition-all md:p-5 ${
                  isActive
                    ? "border-electric/50 bg-card shadow-lg shadow-electric/12 ring-1 ring-electric/20"
                    : "border-border bg-card/70 hover:border-electric/30 hover:bg-card"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-electric/8 via-transparent to-motca-green/10 transition-opacity duration-100 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                <GlowingEffect spread={30} glow={isActive} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={1.2} />
                <div className="relative z-10">
                  <div className={`font-mono text-xs font-bold transition-colors ${isActive ? "text-electric" : "text-muted-foreground"}`}>
                    {node.n}
                  </div>
                  <div className={`mt-2 font-display text-sm font-semibold leading-tight md:text-base ${isActive ? "text-navy-deep" : "text-navy-deep/80"}`}>
                    {node.label}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className={`${brandCardShell} h-[20rem]`}>
        <div className="absolute inset-0" aria-hidden="true">
          <CanvasRevealEffect
            key={active.n}
            animationSpeed={active.speed}
            colors={active.colors}
            containerClassName={active.canvasBg}
            dotSize={2}
            showGradient={false}
          />
          <BrandCardBackdrop accent={active.accent} />
        </div>

        <GlowingEffect spread={42} glow disabled={false} proximity={96} inactiveZone={0.01} borderWidth={1.4} />

        <div className="relative z-10 flex h-full flex-col items-center justify-center p-7 text-center md:p-10">
          <motion.div
            key={active.n}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.08, ease: fastEase }}
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex rounded-md bg-gradient-to-br from-electric to-motca-green px-2.5 py-1 font-mono text-xs font-bold text-primary-foreground shadow-md shadow-electric/30">
                NODO {active.node}
              </span>
              <span className="text-xs font-mono font-semibold tracking-widest text-sky-200 uppercase">
                {active.label}
              </span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl">
              {active.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-motca-green md:text-base">
              {active.tagline}
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/82 md:text-lg">
              {active.desc}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  tone = "clean",
  contentClassName = "",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  tone?: "clean" | "mint" | "blue" | "form";
  contentClassName?: string;
}) {
  const toneClass = {
    clean: "bg-white/76 backdrop-blur-[1px] dark:bg-background/68",
    mint: "bg-[radial-gradient(ellipse_at_top_left,oklch(0.74_0.18_155/0.14),transparent_58%),linear-gradient(180deg,oklch(0.99_0.005_240/0.76),oklch(0.96_0.02_225/0.82))] backdrop-blur-[1px] dark:bg-[radial-gradient(ellipse_at_top_left,oklch(0.74_0.18_155/0.12),transparent_58%),linear-gradient(180deg,oklch(0.11_0.04_255/0.72),oklch(0.13_0.045_255/0.78))]",
    blue: "bg-[linear-gradient(180deg,oklch(0.96_0.028_245/0.78),oklch(0.93_0.045_248/0.84))] backdrop-blur-[1px] dark:bg-[linear-gradient(180deg,oklch(0.12_0.045_250/0.74),oklch(0.1_0.036_255/0.82))]",
    form: "bg-[radial-gradient(ellipse_at_top_right,oklch(0.74_0.18_155/0.16),transparent_55%),linear-gradient(180deg,oklch(0.98_0.01_235/0.76),oklch(1_0_0/0.86))] backdrop-blur-[1px] dark:bg-[radial-gradient(ellipse_at_top_right,oklch(0.74_0.18_155/0.11),transparent_55%),linear-gradient(180deg,oklch(0.1_0.035_255/0.74),oklch(0.08_0.028_255/0.84))]",
  }[tone];

  return (
    <section id={id} className={`relative overflow-hidden py-16 md:py-24 ${toneClass}`}>
      <div className={`relative z-10 ${PAGE_CONTAINER}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center md:mb-12"
        >
          <div className="text-xs font-mono font-semibold tracking-widest text-electric uppercase">{eyebrow}</div>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold text-navy-deep md:text-4xl">{title}</h2>
          {subtitle && <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full ${contentClassName}`}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

const dividerSnap = { type: "spring" as const, stiffness: 520, damping: 34, mass: 0.55 };

function SectionDivider({
  variant = "heroToOrigin",
}: {
  variant?: "heroToOrigin" | "originToModel" | "modelToPaths" | "pathsToForm" | "foundersToForm";
}) {
  const styles = {
    heroToOrigin: {
      label: "Origen",
      wash: "via-motca-green/[0.08] dark:via-motca-green/[0.05]",
      primary: "from-motca-green/80 via-motca-green/40 to-transparent",
      secondary: "from-transparent via-electric/50 to-electric/80",
      tick: "bg-motca-green",
    },
    originToModel: {
      label: "Modelo",
      wash: "via-motca-green/[0.06] dark:via-electric/[0.04]",
      primary: "from-motca-green/75 via-motca-green/35 to-transparent",
      secondary: "from-transparent via-electric/55 to-electric/75",
      tick: "bg-electric",
    },
    modelToPaths: {
      label: "Vías",
      wash: "via-electric/[0.08] dark:via-electric/[0.05]",
      primary: "from-electric/80 via-electric/40 to-transparent",
      secondary: "from-transparent via-cyan-400/45 to-cyan-400/75",
      tick: "bg-electric",
    },
    pathsToForm: {
      label: "Founders",
      wash: "via-electric/[0.05] dark:via-electric/[0.04]",
      primary: "from-electric/70 via-electric/30 to-transparent",
      secondary: "from-transparent via-motca-green/45 to-motca-green/65",
      tick: "bg-electric",
    },
    foundersToForm: {
      label: "Diagnóstico",
      wash: "via-motca-green/[0.06] dark:via-motca-green/[0.04]",
      primary: "from-electric/70 via-electric/35 to-transparent",
      secondary: "from-transparent via-motca-green/55 to-motca-green/75",
      tick: "bg-motca-green",
    },
  }[variant];

  return (
    <div className="relative h-10 overflow-hidden md:h-11" aria-hidden="true">
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${styles.wash} to-transparent`} />

      <div className={`${PAGE_CONTAINER} relative flex h-full items-center gap-4`}>
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5">
          <motion.div
            className={`h-[2px] w-[72%] bg-gradient-to-r ${styles.primary}`}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={dividerSnap}
            style={{ originX: 0 }}
          />
          <motion.div
            className={`ml-auto h-[2px] w-[68%] bg-gradient-to-r ${styles.secondary}`}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ ...dividerSnap, delay: 0.04 }}
            style={{ originX: 1 }}
          />
        </div>

        <motion.div
          className="flex shrink-0 items-center gap-2"
          initial={{ opacity: 0, x: 8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1], delay: 0.07 }}
        >
          <motion.span
            className={`h-3 w-0.5 rounded-full ${styles.tick}`}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1], delay: 0.09 }}
          />
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground/80">
            {styles.label}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

function FoundersSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-5">
      {founders.map((founder, index) => (
        <FounderCard key={founder.name} founder={founder} index={index} />
      ))}
    </div>
  );
}

function FounderCard({
  founder,
  index,
}: {
  founder: (typeof founders)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.46, delay: index * 0.06, ease: fastEase }}
      whileHover={{ y: -3, scale: 1.006, transition: { duration: 0.12, ease: fastEase } }}
      className="group relative flex min-h-[28rem] flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/88 p-6 shadow-xl shadow-navy/6 backdrop-blur-xl transition-all duration-150 hover:border-electric/35 hover:shadow-2xl hover:shadow-electric/10 dark:border-white/10 dark:bg-card/72 dark:shadow-black/25 sm:p-7"
    >
      <GlowingEffect spread={46} glow disabled={false} proximity={115} inactiveZone={0.01} borderWidth={1.2} />
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-motca-green/55 to-transparent opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-electric/10 opacity-70 blur-3xl transition-opacity duration-150 group-hover:opacity-90 dark:bg-electric/8" />
      <div className="absolute -bottom-24 left-6 h-48 w-48 rounded-full bg-motca-green/10 blur-3xl dark:bg-motca-green/8" />

      <div className="relative z-10 flex items-start justify-between gap-5">
        <div
          className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-transparent bg-transparent font-display text-xl font-bold text-white shadow-sm shadow-navy/5 transition-transform duration-150 group-hover:scale-[1.015]"
        >
          {founder.imageSrc ? (
            <img
              src={founder.imageSrc}
              alt={founder.name}
              className={`h-full w-full object-cover transition-transform duration-150 ${founder.avatarClassName}`}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span role="img" aria-label={`Imagen pendiente de ${founder.name}`}>
              {founder.initials}
            </span>
          )}
        </div>

        <a
          href={founder.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`LinkedIn de ${founder.name}`}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background/80 text-navy-deep shadow-sm shadow-navy/5 transition-all hover:-translate-y-0.5 hover:border-electric hover:text-electric hover:shadow-electric/12 dark:bg-background/50 dark:text-white"
        >
          <LinkedInIcon className="h-4 w-4" />
        </a>
      </div>

      <div className="relative z-10 mt-7 flex flex-1 flex-col">
        <div>
          <h3 className="font-display text-2xl font-bold leading-tight text-navy-deep dark:text-white">
            {founder.name}
          </h3>
          <p className="mt-1 text-sm font-semibold text-motca-green">{founder.role}</p>
        </div>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          {founder.description}
        </p>
      </div>
    </motion.article>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const revealThemes = [
  {
    speed: 5.1,
    colors: [[16, 185, 129], [52, 211, 153]],
    dotSize: 3,
    background: "!bg-emerald-900",
    veil: "bg-emerald-950/35",
  },
  {
    speed: 3,
    colors: [[236, 72, 153], [232, 121, 249]],
    dotSize: 2,
    background: "!bg-black",
    veil: "bg-black/50 [mask-image:radial-gradient(420px_at_center,white,transparent)]",
  },
  {
    speed: 3,
    colors: [[125, 211, 252]],
    dotSize: 3,
    background: "!bg-sky-600",
    veil: "bg-sky-950/30",
  },
  {
    speed: 4,
    colors: [[20, 149, 255], [16, 185, 129]],
    dotSize: 2,
    background: "!bg-[oklch(0.20_0.07_260)]",
    veil: "bg-[oklch(0.08_0.04_260)]/70",
  },
  {
    speed: 3.5,
    colors: [[250, 204, 21], [45, 212, 191]],
    dotSize: 2,
    background: "!bg-slate-950",
    veil: "bg-slate-950/45",
  },
  {
    speed: 4.5,
    colors: [[99, 102, 241], [34, 211, 238]],
    dotSize: 2,
    background: "!bg-indigo-950",
    veil: "bg-indigo-950/45",
  },
  {
    speed: 3,
    colors: [[244, 114, 182], [251, 146, 60]],
    dotSize: 2,
    background: "!bg-rose-950",
    veil: "bg-rose-950/45",
  },
  {
    speed: 5,
    colors: [[74, 222, 128], [59, 130, 246], [168, 85, 247]],
    dotSize: 2,
    background: "!bg-zinc-950",
    veil: "bg-zinc-950/45 [mask-image:radial-gradient(460px_at_center,white,transparent)]",
  },
];

function RevealPathCard({ path, index }: { path: string; index: number }) {
  const theme = revealThemes[index % revealThemes.length];

  return (
    <motion.div
      data-path-card={index}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -3 }}
      className="group relative min-h-[112px] overflow-hidden rounded-lg border border-border bg-card p-5 transition-colors hover:border-motca-green"
    >
      <GlowingEffect spread={34} glow disabled={false} proximity={72} inactiveZone={0.01} borderWidth={1.3} />
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        aria-hidden="true"
        data-path-reveal-effect
      >
        <CanvasRevealEffect
          animationSpeed={theme.speed}
          colors={theme.colors}
          containerClassName={theme.background}
          dotSize={theme.dotSize}
          showGradient={false}
        />
        <div className={`absolute inset-0 ${theme.veil}`} />
      </div>
      <div className="relative z-10 flex h-full flex-col justify-center">
        <div className="mb-3 h-1 w-8 rounded-full bg-electric transition-colors group-hover:bg-motca-green" />
        <p className="text-sm font-medium leading-snug text-navy-deep transition-colors group-hover:text-white">
          {path}
        </p>
      </div>
    </motion.div>
  );
}


function DiagnosticForm() {
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    name: "", phone: "", role: "", email: "",
    path: "",
    terrain: "",
    learn: [] as string[],
    features: [] as string[],
    duolingo: "",
    comment: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const toggle = (key: "learn" | "features", value: string) => {
    setData((d) => ({
      ...d,
      [key]: d[key].includes(value) ? d[key].filter((v) => v !== value) : [...d[key], value],
    }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!data.name.trim() || data.name.length > 120) return setError("Ingresa tu nombre.");
    if (!/^[+\d\s()-]{6,20}$/.test(data.phone)) return setError("Teléfono inválido.");
    if (!data.role.trim()) return setError("Indica tu cargo o rol.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return setError("Correo inválido.");
    if (!data.path) return setError("Selecciona una vía de expansión.");
    if (!data.terrain) return setError("Selecciona un terreno.");

    setSubmitting(true);
    try {
      const { error: insertError } = await supabase
        .from("diagnostic_submissions")
        .insert({
          name: data.name.trim(),
          phone: data.phone.trim(),
          role: data.role.trim(),
          email: data.email.trim(),
          path: data.path,
          terrain: data.terrain,
          learn: data.learn,
          features: data.features,
          duolingo: data.duolingo || null,
          comment: data.comment.trim() || null,
        });

      if (insertError) {
        throw insertError;
      }

      setDone(true);
    } catch (err) {
      console.error("[diagnostic_submissions] insert failed", err);
      setError("No pudimos guardar tu solicitud. Inténtalo de nuevo o escríbenos por WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <BackgroundLines
        className="relative flex min-h-[34rem] items-center justify-center overflow-hidden rounded-2xl border border-motca-green/35 bg-white/88 p-5 text-left shadow-xl shadow-navy/5 dark:bg-card/88 dark:shadow-black/30 sm:p-8"
        svgOptions={{ duration: 8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -8, scale: 1.015 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="group relative z-20 w-full max-w-xl overflow-hidden rounded-2xl border border-white/80 bg-white/92 px-7 py-9 text-center shadow-2xl shadow-navy/12 backdrop-blur-xl transition-shadow duration-300 hover:shadow-motca-green/18 dark:border-white/10 dark:bg-background/86 dark:shadow-black/35 sm:px-10 sm:py-11"
        >
          <GlowingEffect spread={64} glow disabled={false} proximity={150} inactiveZone={0.01} borderWidth={1.4} />
          <div className="absolute -top-28 left-1/2 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-motca-green/18 blur-3xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-motca-green/12" />
          <div className="absolute inset-x-10 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-motca-green/60 to-transparent" />
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.1, bounce: 0.45 }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-motca-green text-white shadow-lg shadow-motca-green/30 ring-8 ring-motca-green/10 transition-transform duration-300 group-hover:scale-105"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </motion.div>
          <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-navy-deep dark:text-white md:text-3xl">
            Ya estás en lista de espera
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Recibimos tu información. Te tendremos en cuenta para las próximas aperturas del diagnóstico de entrada MOTCA y te orientaremos sobre tu punto de partida en el modelo.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={getWhatsAppHref("Hola MOTCA, ya envié mi diagnóstico y quiero agendar una demo.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-navy/20 transition-colors hover:bg-navy-deep"
            >
              Agendar una demo
            </a>
            <a
              href="#top"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-electric hover:text-electric dark:bg-background/70"
            >
              Volver al inicio
            </a>
          </div>
        </motion.div>
      </BackgroundLines>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/75 bg-white/82 shadow-2xl shadow-navy/14 backdrop-blur-xl dark:border-white/10 dark:bg-card/82 dark:shadow-black/35">
      <GlowingEffect spread={58} glow disabled={false} proximity={140} inactiveZone={0.01} borderWidth={1.5} />
      <BackgroundBeams className="opacity-20 mix-blend-screen [mask-image:radial-gradient(ellipse_at_center,black_24%,transparent_74%)]" />
      <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr]">
        <FuturisticLandscapePanel />

        <form onSubmit={submit} className="space-y-5 bg-white/88 p-6 text-navy-deep md:p-9 lg:p-10 dark:bg-card/88">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Nombre completo">
              <input className={inputCls} value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} maxLength={120} />
            </Field>
            <Field label="Teléfono">
              <input className={inputCls} value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} maxLength={20} />
            </Field>
            <Field label="Cargo o rol actual">
              <input className={inputCls} value={data.role} onChange={(e) => setData({ ...data, role: e.target.value })} maxLength={120} />
            </Field>
            <Field label="Correo electrónico">
              <input type="email" className={inputCls} value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} maxLength={120} />
            </Field>
            <Field label="Vía de expansión" className="md:col-span-2">
              <select className={inputCls} value={data.path} onChange={(e) => setData({ ...data, path: e.target.value })}>
                <option value="">Selecciona una vía…</option>
                {paths.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </Field>
          </div>

          <Group label="¿En qué terreno quieres activar tu capacidad?">
            <div className="flex flex-wrap gap-2">
              {terrains.map((t) => (
                <Chip key={t} active={data.terrain === t} onClick={() => setData({ ...data, terrain: t })}>{t}</Chip>
              ))}
            </div>
          </Group>

          <Group label="¿Cómo te gustaría aprender?">
            <div className="flex flex-wrap gap-2">
              {learnOptions.map((o) => (
                <Chip key={o} active={data.learn.includes(o)} onClick={() => toggle("learn", o)}>{o}</Chip>
              ))}
            </div>
          </Group>

          <Group label="Funciones esperadas">
            <div className="flex flex-wrap gap-2">
              {featureOptions.map((o) => (
                <Chip key={o} active={data.features.includes(o)} onClick={() => toggle("features", o)}>{o}</Chip>
              ))}
            </div>
          </Group>

          <Group label="¿Usarías una app tipo Duolingo?">
            <div className="flex flex-wrap gap-2">
              {duolingoOptions.map((o) => (
                <Chip key={o} active={data.duolingo === o} onClick={() => setData({ ...data, duolingo: o })}>{o}</Chip>
              ))}
            </div>
          </Group>

          <Field label="Comentario abierto">
            <textarea
              className={`${inputCls} min-h-[100px] resize-y`}
              value={data.comment}
              onChange={(e) => setData({ ...data, comment: e.target.value })}
              maxLength={1000}
            />
          </Field>

          {error && <p className="text-sm font-medium text-red-600">{error}</p>}

          <motion.button
            whileHover={{ y: submitting ? 0 : -2 }}
            whileTap={{ scale: submitting ? 1 : 0.98 }}
            type="submit"
            disabled={submitting}
            className="relative w-full overflow-hidden rounded-lg bg-navy px-7 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-navy/15 transition-colors hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-60"
          >
            <GlowingEffect spread={30} glow disabled={false} proximity={72} inactiveZone={0.01} borderWidth={1.2} />
            {submitting ? "Enviando…" : "Enviar diagnóstico"}
          </motion.button>
        </form>
      </div>
    </div>
  );
}

function FuturisticLandscapePanel() {
  return (
    <aside
      className="relative z-20 hidden min-h-[34rem] overflow-hidden bg-[#06090d] text-white lg:block"
    >
      <Vortex
        particleCount={980}
        rangeY={520}
        baseHue={190}
        rangeSpeed={1.18}
        baseRadius={0.7}
        rangeRadius={1.7}
        backgroundColor="#020617"
        containerClassName="absolute inset-0 z-10"
      />
      <div className="absolute inset-0 z-20 bg-[#020617]/34" />
      <div className="absolute inset-0 z-40 flex items-center justify-center p-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative max-w-sm rounded-lg border border-white/10 bg-[#020617]/24 px-7 py-6 backdrop-blur-[2px]"
        >
          <div className="mb-4 text-[0.68rem] font-mono font-semibold tracking-[0.42em] text-motca-green">
            MOTCA
          </div>
          <h3 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl">
            Diagnóstico de capacidad adaptativa
          </h3>
          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-white/76">
            Identifica cómo piensas, decides y te adaptas cuando la tecnología cambia.
          </p>
        </motion.div>
      </div>
    </aside>
  );
}

const inputCls =
  "relative z-10 w-full rounded-lg border border-border bg-white/78 px-4 py-3 text-navy-deep outline-none transition-all placeholder:text-muted-foreground focus:border-motca-green focus:bg-white focus:ring-2 focus:ring-motca-green/20 dark:bg-background/56 dark:focus:bg-background/76 [&>option]:bg-white [&>option]:text-navy-deep dark:[&>option]:bg-background dark:[&>option]:text-foreground";

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-medium text-current">{label}</span>
      <span className="relative block rounded-lg">
        <GlowingEffect spread={28} glow disabled={false} proximity={68} inactiveZone={0.01} borderWidth={1.1} />
        {children}
      </span>
    </label>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 text-sm font-medium text-current">{label}</div>
      {children}
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative overflow-hidden px-4 py-2 rounded-md text-sm font-medium border transition-all ${
        active
          ? "bg-motca-green text-navy-deep border-motca-green"
          : "bg-white/70 text-navy-deep border-border hover:border-motca-green hover:bg-white dark:bg-background/48 dark:hover:bg-background/74"
      }`}
    >
      <GlowingEffect spread={24} glow disabled={false} proximity={56} inactiveZone={0.01} borderWidth={1} />
      {children}
    </button>
  );
}

function WhatsAppFeedbackButton() {
  return (
    <motion.a
      href={getWhatsAppHref("Hola MOTCA, quiero dejar un feedback rápido sobre la landing y el piloto.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Enviar feedback rápido por WhatsApp"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.45 }}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#25D366] text-sm font-semibold text-white shadow-xl shadow-[#25D366]/25 ring-1 ring-white/60 transition-all duration-300 hover:w-44 hover:bg-[#1fbd58] md:bottom-6 md:right-6"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/18">
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-28 group-hover:opacity-100">
        Feedback rápido
      </span>
    </motion.a>
  );
}
