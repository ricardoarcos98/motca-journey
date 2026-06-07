import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { submitDiagnostic } from "@/lib/diagnostic.functions";
import GlobeDemo from "@/components/globe-demo";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BackgroundLines } from "@/components/ui/background-lines";

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

function Landing() {
  const [activeNode, setActiveNode] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border">
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
          <a href="#form" className="hidden md:inline-flex px-4 py-2 rounded-lg bg-navy text-primary-foreground text-sm font-medium hover:bg-navy-deep transition-colors">
            Solicitar diagnóstico
          </a>
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
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.62_0.20_250/0.12),transparent_60%),radial-gradient(ellipse_at_bottom_left,oklch(0.74_0.18_155/0.10),transparent_55%)]" />
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
                <span className="block text-motca-green mt-2">Eso es MOTCA.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Un modelo estructural que desarrolla en ti la capacidad de entender, dirigir y adaptarte a cualquier entorno tecnológico, sin importar qué herramienta cambie mañana.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#form" className="px-6 py-3 rounded-lg bg-navy text-primary-foreground font-medium hover:bg-navy-deep transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/20">
                  Solicitar diagnóstico
                </a>
                <a href="#architecture" className="px-6 py-3 rounded-lg border border-border bg-card text-navy font-medium hover:border-electric hover:text-electric transition-colors">
                  Ver arquitectura
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

      <SectionDivider />

      {/* ARCHITECTURE */}
      <section id="architecture" className="relative overflow-hidden py-16 md:py-20">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.98_0.01_240)_0%,oklch(0.95_0.035_245)_100%)]" />
          <div className="max-w-6xl mx-auto px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <LevelsDiagram active={activeNode} onHover={setActiveNode} />
            </motion.div>
          </div>
      </section>

      <SectionDivider flip />

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


      <SectionDivider />

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
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
                >
                  <div className="w-10 h-10 rounded-md bg-gradient-to-br from-electric to-motca-green text-primary-foreground font-mono font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <span className="font-display font-semibold text-navy-deep">{step}</span>
                </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <SectionDivider flip />

      {/* PATHS */}
      <Section id="paths" eyebrow="Vías" title="Vías de expansión" tone="blue">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {paths.map((p, i) => (
              <RevealPathCard key={p} path={p} index={i} />
            ))}
          </div>
      </Section>

      <SectionDivider />

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
    clean: "bg-white",
    mint: "bg-[radial-gradient(ellipse_at_top_left,oklch(0.74_0.18_155/0.12),transparent_58%),linear-gradient(180deg,oklch(0.99_0.005_240),oklch(0.96_0.02_225))]",
    blue: "bg-[linear-gradient(180deg,oklch(0.96_0.028_245),oklch(0.93_0.045_248))]",
    form: "bg-[radial-gradient(ellipse_at_top_right,oklch(0.74_0.18_155/0.14),transparent_55%),linear-gradient(180deg,oklch(0.98_0.01_235),oklch(1_0_0))]",
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

function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`relative h-10 overflow-hidden bg-white ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <motion.div
        className="absolute left-1/2 top-1/2 h-px w-[84vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-electric/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-motca-green shadow-[0_0_24px_oklch(0.74_0.18_155/0.7)]"
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.4 }}
      />
    </div>
  );
}

function LevelsDiagram({
  active,
  onHover,
  compact = false,
}: {
  active: number;
  onHover: (i: number) => void;
  compact?: boolean;
}) {
  const nodeColumns = compact ? [nodes] : [nodes.slice(0, 2), nodes.slice(2)];

  return (
    <div data-motca-levels className="relative overflow-hidden p-6 md:p-8 rounded-2xl bg-card border border-border shadow-xl shadow-navy/5">
      <GlowingEffect spread={46} glow disabled={false} proximity={120} inactiveZone={0.01} borderWidth={1.5} />
      <div className="flex items-center justify-between mb-6">
        <div className="text-[10px] font-mono font-semibold tracking-widest text-muted-foreground uppercase">
          Arquitectura MOTCA
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-motca-green animate-pulse" />
          <span className="text-[10px] font-mono text-muted-foreground">activo</span>
        </div>
      </div>

      <div className={`grid gap-5 relative ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 md:gap-8"}`}>
        {nodeColumns.map((column, columnIndex) => (
          <div key={columnIndex === 0 ? "base" : "autonomy"} className="flex flex-col gap-4">
            {column.map((node, itemIndex) => {
              const i = compact ? itemIndex : columnIndex * 2 + itemIndex;
              const isActive = active === i;
              return (
                <motion.div
                  key={node.n}
                  data-motca-node={node.n}
                  onMouseEnter={() => onHover(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className={`relative min-h-[142px] overflow-hidden p-5 rounded-lg border transition-all cursor-pointer ${
                    isActive
                      ? "border-electric bg-electric/5"
                      : "border-border bg-background hover:border-electric/50"
                  }`}
                >
                  <GlowingEffect spread={34} glow disabled={false} proximity={86} inactiveZone={0.01} borderWidth={1.2} />
                  <div
                    className={`w-10 h-10 rounded-md flex items-center justify-center font-mono font-bold text-sm transition-colors mb-4 ${
                      isActive ? "bg-electric text-white" : "bg-muted text-navy-deep"
                    }`}
                  >
                    {node.n}
                  </div>
                  <div className="font-display font-semibold text-navy-deep text-sm md:text-base">{node.title}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{node.desc}</div>
                  <div className="mt-4 h-1 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-electric to-motca-green"
                      initial={{ width: "0%" }}
                      animate={{ width: isActive ? "100%" : `${(i + 1) * 25}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
        {!compact && (
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-electric/50 to-transparent" aria-hidden="true" />
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          Capacidad adaptativa
        </span>
        <span className="text-sm font-display font-bold text-motca-green">100%</span>
      </div>
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

    setSubmitting(true);
    try {
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
        className="relative flex h-auto min-h-[24rem] items-center justify-center overflow-hidden rounded-lg border border-motca-green/40 bg-white px-6 py-10 text-center shadow-xl shadow-navy/5"
        svgOptions={{ duration: 8 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-20 max-w-2xl"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-white/70 blur-3xl" />
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
          <h3 className="mt-6 text-2xl md:text-3xl font-bold text-navy-deep">Ya estás en lista de espera</h3>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Recibimos tu información. Te tendremos en cuenta para las próximas aperturas del diagnóstico de entrada MOTCA y te orientaremos sobre tu punto de partida en el modelo.
          </p>
        </motion.div>
      </BackgroundLines>
    );
  }

  return (
    <form onSubmit={submit} className="p-6 md:p-10 rounded-lg bg-card border border-border space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
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

      {error && <p className="text-sm text-destructive">{error}</p>}

      <motion.button
        whileHover={{ y: submitting ? 0 : -2 }}
        whileTap={{ scale: submitting ? 1 : 0.98 }}
        type="submit"
        disabled={submitting}
        className="w-full md:w-auto px-7 py-3.5 rounded-lg bg-navy text-primary-foreground font-semibold hover:bg-navy-deep transition-colors shadow-lg shadow-navy/20 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Enviando…" : "Quiero mi diagnóstico de entrada"}
      </motion.button>
    </form>
  );
}

const inputCls =
  "w-full px-4 py-2.5 rounded-md bg-background border border-input text-navy-deep placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/20 transition-all";

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-medium text-navy-deep mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-sm font-medium text-navy-deep mb-2">{label}</div>
      {children}
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium border transition-all ${
        active
          ? "bg-electric text-white border-electric"
          : "bg-background text-navy-deep border-border hover:border-electric"
      }`}
    >
      {children}
    </button>
  );
}

function WhatsAppFeedbackButton() {
  const text = encodeURIComponent("Hola MOTCA, quiero dejar un feedback rápido sobre la landing y el piloto.");

  return (
    <motion.a
      href={`https://wa.me/?text=${text}`}
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
