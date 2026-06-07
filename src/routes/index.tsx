import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Moon, Sun } from "lucide-react";
import { submitDiagnostic } from "@/lib/diagnostic.functions";
import GlobeDemo from "@/components/globe-demo";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BackgroundLines } from "@/components/ui/background-lines";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { Vortex } from "@/components/ui/vortex";

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

const nodes = [
  { n: "01", title: "Fonema de la Mente", desc: "Fundamentos del pensamiento digital." },
  { n: "02", title: "Sintaxis del Pensamiento", desc: "Estructura, conexión y flujo." },
  { n: "03", title: "Lectura Fluida", desc: "Independencia analítica y reconocimiento de patrones." },
  { n: "04", title: "Escritura Propia", desc: "Creación de soluciones propias con criterio." },
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

function Landing() {
  const [activeNode, setActiveNode] = useState(0);
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
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <a href="#top" className="font-display font-bold text-navy text-lg tracking-tight">
            MOTCA
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-navy">
            <a href="#model" className="hover:text-electric transition-colors">Modelo</a>
            <a href="#origin" className="hover:text-electric transition-colors">Origen</a>
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
                <a href="#model" onClick={() => setMenuOpen(false)}>Modelo</a>
                <a href="#origin" onClick={() => setMenuOpen(false)}>Origen</a>
                <a href="#paths" onClick={() => setMenuOpen(false)}>Vías</a>
                <a href="#form" onClick={() => setMenuOpen(false)}>Diagnóstico</a>
                <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode((v) => !v)} className="mt-1" />
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.62_0.20_250/0.14),transparent_60%),radial-gradient(ellipse_at_bottom_left,oklch(0.74_0.18_155/0.12),transparent_55%),linear-gradient(180deg,oklch(1_0_0/0.8),oklch(1_0_0/0.62))] dark:bg-[radial-gradient(ellipse_at_top_right,oklch(0.62_0.20_250/0.16),transparent_60%),radial-gradient(ellipse_at_bottom_left,oklch(0.74_0.18_155/0.1),transparent_55%),linear-gradient(180deg,oklch(0.09_0.035_260/0.76),oklch(0.1_0.035_255/0.58))]" />
          <div className="max-w-7xl mx-auto px-5 py-14 md:py-18 lg:py-20">
            <div className="grid items-center gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)] xl:gap-14">
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
              <h1 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-bold text-navy-deep leading-[1.05]">
                Aprende a pensar <span className="text-electric">con la tecnología</span>, no a depender de ella.
                <span className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-motca-green">
                  <span>Eso es</span>
                  <LayoutTextFlip
                    words={["MOTCA", "soñadores", "transformadores", "innovadores"]}
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
                <a href="#model" className="px-6 py-3 rounded-lg border border-border bg-card text-navy font-medium hover:border-electric hover:text-electric transition-colors">
                  Ver modelo
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

      <SectionDivider variant="heroToModel" />

      {/* MODEL NODES */}
      <Section id="model" eyebrow="El modelo" title="Cuatro nodos. Un centro cognitivo." tone="clean">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {nodes.map((node, i) => (
              <motion.button
                key={node.n}
                type="button"
                onMouseEnter={() => setActiveNode(i)}
                onFocus={() => setActiveNode(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`relative overflow-hidden text-left p-6 rounded-lg bg-card border transition-all ${
                  activeNode === i ? "border-electric shadow-lg shadow-electric/10" : "border-border"
                }`}
              >
                <GlowingEffect spread={32} glow disabled={false} proximity={80} inactiveZone={0.01} borderWidth={1.4} />
                <div className={`text-xs font-mono font-semibold mb-3 transition-colors ${activeNode === i ? "text-electric" : "text-muted-foreground"}`}>
                  NODO {node.n}
                </div>
                <h3 className="text-lg font-semibold text-navy-deep">{node.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{node.desc}</p>
              </motion.button>
            ))}
          </div>
      </Section>


      <SectionDivider variant="modelToOrigin" />

      {/* ORIGIN */}
      <Section id="origin" eyebrow="Origen del modelo" title="La evolución de la autonomía" tone="mint">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              MOTCA replica el proceso natural de aprender a leer: primero se reconocen sonidos, luego se entiende la sintaxis, después se lee con fluidez y finalmente se escribe con autonomía. Esa misma lógica se aplica al aprendizaje de tecnología e IA.
            </p>
            <div className="space-y-3">
              {["Reconocer", "Estructurar", "Leer", "Escribir"].map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex items-center gap-4 overflow-hidden p-4 rounded-lg bg-card border border-border"
                >
                  <GlowingEffect spread={32} glow disabled={false} proximity={80} inactiveZone={0.01} borderWidth={1.2} />
                  <div className="w-10 h-10 rounded-md bg-gradient-to-br from-electric to-motca-green text-primary-foreground font-mono font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <span className="font-display font-semibold text-navy-deep">{step}</span>
                </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <SectionDivider variant="originToPaths" />

      {/* PATHS */}
      <Section id="paths" eyebrow="Vías" title="Vías de expansión" tone="blue">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {paths.map((p, i) => (
              <RevealPathCard key={p} path={p} index={i} />
            ))}
          </div>
      </Section>

      <SectionDivider variant="pathsToForm" />

      {/* FORM */}
      <Section id="form" eyebrow="Diagnóstico" title="Solicita tu diagnóstico de entrada" subtitle="Una entrevista estructurada para identificar tu punto de partida en el modelo MOTCA." tone="form">
        <DiagnosticForm />
      </Section>

      <WhatsAppFeedbackButton />

      <footer className="border-t border-border mt-12">
        <div className="max-w-6xl mx-auto px-5 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
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

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  tone = "clean",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  tone?: "clean" | "mint" | "blue" | "form";
}) {
  const toneClass = {
    clean: "bg-white/76 backdrop-blur-[1px] dark:bg-background/68",
    mint: "bg-[radial-gradient(ellipse_at_top_left,oklch(0.74_0.18_155/0.14),transparent_58%),linear-gradient(180deg,oklch(0.99_0.005_240/0.76),oklch(0.96_0.02_225/0.82))] backdrop-blur-[1px] dark:bg-[radial-gradient(ellipse_at_top_left,oklch(0.74_0.18_155/0.12),transparent_58%),linear-gradient(180deg,oklch(0.11_0.04_255/0.72),oklch(0.13_0.045_255/0.78))]",
    blue: "bg-[linear-gradient(180deg,oklch(0.96_0.028_245/0.78),oklch(0.93_0.045_248/0.84))] backdrop-blur-[1px] dark:bg-[linear-gradient(180deg,oklch(0.12_0.045_250/0.74),oklch(0.1_0.036_255/0.82))]",
    form: "bg-[radial-gradient(ellipse_at_top_right,oklch(0.74_0.18_155/0.16),transparent_55%),linear-gradient(180deg,oklch(0.98_0.01_235/0.76),oklch(1_0_0/0.86))] backdrop-blur-[1px] dark:bg-[radial-gradient(ellipse_at_top_right,oklch(0.74_0.18_155/0.11),transparent_55%),linear-gradient(180deg,oklch(0.1_0.035_255/0.74),oklch(0.08_0.028_255/0.84))]",
  }[tone];

  return (
    <section id={id} className={`relative overflow-hidden py-16 md:py-24 ${toneClass}`}>
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-xs font-mono font-semibold tracking-widest text-electric uppercase">{eyebrow}</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy-deep max-w-3xl">{title}</h2>
          {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function SectionDivider({
  variant = "heroToModel",
}: {
  variant?: "heroToModel" | "modelToOrigin" | "originToPaths" | "pathsToForm";
}) {
  const styles = {
    heroToModel: {
      base: "from-white/72 via-sky-100/52 to-white/82 dark:from-background/78 dark:via-cyan-950/32 dark:to-background/72",
      aura: "bg-[radial-gradient(ellipse_at_center,oklch(0.62_0.2_250/0.34),transparent_64%)]",
      beam: "from-transparent via-electric/80 to-transparent",
      shard: "from-electric/0 via-electric/18 to-motca-green/0",
    },
    modelToOrigin: {
      base: "from-white/82 via-emerald-50/62 to-sky-50/76 dark:from-background/72 dark:via-emerald-950/30 dark:to-sky-950/24",
      aura: "bg-[radial-gradient(ellipse_at_center,oklch(0.74_0.18_155/0.3),transparent_66%)]",
      beam: "from-transparent via-motca-green/80 to-transparent",
      shard: "from-motca-green/0 via-motca-green/18 to-electric/0",
    },
    originToPaths: {
      base: "from-sky-50/76 via-cyan-50/66 to-blue-100/54 dark:from-sky-950/24 dark:via-cyan-950/28 dark:to-background/70",
      aura: "bg-[radial-gradient(ellipse_at_center,oklch(0.62_0.2_250/0.3),transparent_64%)]",
      beam: "from-transparent via-electric/75 to-transparent",
      shard: "from-electric/0 via-cyan-300/22 to-electric/0",
    },
    pathsToForm: {
      base: "from-blue-100/54 via-emerald-50/56 to-white/84 dark:from-background/70 dark:via-emerald-950/30 dark:to-background/78",
      aura: "bg-[radial-gradient(ellipse_at_center,oklch(0.74_0.18_155/0.3),transparent_64%)]",
      beam: "from-transparent via-motca-green/80 to-transparent",
      shard: "from-motca-green/0 via-cyan-300/22 to-electric/0",
    },
  }[variant];

  return (
    <div
      className={`relative h-20 overflow-hidden bg-gradient-to-r md:h-28 ${styles.base}`}
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      <motion.div
        className={`absolute left-1/2 top-1/2 h-24 w-[min(80rem,108vw)] -translate-x-1/2 -translate-y-1/2 blur-2xl md:h-32 ${styles.aura}`}
        initial={{ opacity: 0.72, scaleX: 0.9 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
      <motion.div
        className={`absolute left-1/2 top-1/2 h-[2px] w-[min(78rem,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r ${styles.beam} shadow-[0_0_36px_oklch(0.62_0.2_250/0.32)]`}
        initial={{ scaleX: 0.78, opacity: 0.82 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className={`absolute left-1/2 top-1/2 h-16 w-[min(70rem,88vw)] -translate-x-1/2 -translate-y-1/2 skew-x-[-18deg] bg-gradient-to-r ${styles.shard} opacity-70 [clip-path:polygon(0_42%,100%_0,92%_58%,7%_100%)]`}
        initial={{ x: "-52%", opacity: 0.62 }}
        whileInView={{ x: "-50%", opacity: 0.9 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(1_0_0/0.52),transparent_42%,oklch(1_0_0/0.45))] dark:bg-[linear-gradient(180deg,oklch(0.08_0.028_255/0.5),transparent_42%,oklch(0.08_0.028_255/0.46))]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
    </div>
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
    background: "!bg-navy-deep",
    veil: "bg-navy-deep/45",
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
  const [staticFallback, setStaticFallback] = useState(false);
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
  const send = useServerFn(submitDiagnostic);

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

    const isGitHubPages =
      typeof window !== "undefined" && window.location.hostname.endsWith("github.io");

    setSubmitting(true);
    try {
      if (isGitHubPages) {
        window.localStorage.setItem(
          "motca-diagnostic-draft",
          JSON.stringify({ ...data, createdAt: new Date().toISOString() }),
        );
        setStaticFallback(true);
        setDone(true);
        return;
      }

      await send({ data });
      setDone(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "No pudimos enviar tu solicitud.";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <BackgroundLines
        className="relative min-h-[28rem] overflow-hidden rounded-2xl border border-motca-green/40 bg-white text-left shadow-xl shadow-navy/5 dark:bg-card dark:shadow-black/30"
        svgOptions={{ duration: 8 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-20 flex min-h-[28rem] flex-col justify-center px-7 py-10 text-center md:px-12"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-white/70 blur-3xl dark:bg-background/70" />
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.1 }}
            className="w-16 h-16 mx-auto rounded-full bg-motca-green flex items-center justify-center text-white shadow-lg shadow-motca-green/30"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </motion.div>
          <h3 className="mt-6 text-2xl md:text-3xl font-bold text-navy-deep">
            {staticFallback ? "Tu diagnóstico quedó preparado" : "Ya estás en lista de espera"}
          </h3>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            {staticFallback
              ? "GitHub Pages publica esta landing como sitio estático. Para dejar tus datos y avanzar, agenda una demo por WhatsApp y comparte tu diagnóstico."
              : "Recibimos tu información. Te tendremos en cuenta para las próximas aperturas del diagnóstico de entrada MOTCA y te orientaremos sobre tu punto de partida en el modelo."}
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={getWhatsAppHref("Hola MOTCA, ya envié mi diagnóstico y quiero agendar una demo.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-navy/20 transition-colors hover:bg-navy-deep"
            >
              {staticFallback ? "Enviar por WhatsApp" : "Agendar una demo"}
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
            className="relative w-full overflow-hidden rounded-lg bg-navy px-7 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-navy/15 transition-colors hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
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
      <div className="absolute inset-x-0 bottom-0 z-30 h-32 bg-gradient-to-t from-[#05070f] via-[#05070f]/80 to-transparent" />
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
