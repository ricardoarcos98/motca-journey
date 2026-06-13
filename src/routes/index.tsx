import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Moon, Sun, ChevronDown } from "lucide-react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BackgroundLines } from "@/components/ui/background-lines";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Vortex } from "@/components/ui/vortex";
import { supabase } from "@/integrations/supabase/client";
import {
  expansionPaths,
  lorenaProfile,
  modelNodes,
  pathOptions,
  ricardoProfile,
} from "@/content/motca-landing-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOTCA — Modelo de Transferencia de Capacidad Adaptativa" },
      { name: "description", content: "MOTCA es una estructura cognitiva y estratégica para construir autonomía digital y adaptarse a cualquier entorno tecnológico." },
      { property: "og:title", content: "MOTCA — Modelo de Transferencia de Capacidad Adaptativa" },
      { property: "og:description", content: "Las herramientas se transforman; tu habilidad para adoptar la tecnología es lo que permanece." },
    ],
  }),
  component: Landing,
});

const terrains = ["Docentes", "Empresas", "Jóvenes 13-18", "Emprendedores", "Técnicos y salud"];

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
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-navy">
            <a href="#origin" className="hover:text-electric transition-colors">Origen</a>
            <a href="#model" className="hover:text-electric transition-colors">Modelo</a>
            <a href="#impact" className="hover:text-electric transition-colors">Impacto</a>
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
                <a href="#impact" onClick={() => setMenuOpen(false)}>Impacto</a>
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
          <div className={`${PAGE_CONTAINER} py-16 md:py-24 lg:py-28`}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10 mx-auto max-w-3xl text-center"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-motca-green/15 text-navy-deep text-xs font-semibold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-motca-green animate-pulse" />
                Modelo de Transferencia de Capacidad Adaptativa
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl xl:text-[3.25rem] font-bold text-navy-deep leading-[1.12] tracking-tight">
                Las herramientas se transforman;{" "}
                <span className="bg-gradient-to-br from-motca-green to-electric bg-clip-text text-transparent">
                  tu habilidad para adoptar la tecnología es lo que permanece.
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                <strong className="font-bold text-sky-700 dark:text-sky-300">
                  MOTCA, Modelo de Transferencia de Capacidad Adaptativa,
                </strong>{" "}
                es una estructura cognitiva y estratégica diseñada para que personas, equipos y organizaciones construyan autonomía digital y desarrollen capacidades para adaptarse a cualquier entorno tecnológico.
              </p>
              <div className="mt-10">
                <a
                  href="#origin"
                  className="inline-flex items-center gap-2 rounded-xl border border-motca-green/30 bg-motca-green/10 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-motca-green transition-all hover:border-motca-green/50 hover:bg-motca-green/15 hover:-translate-y-0.5"
                >
                  Descubrir el origen
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
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
            Piensa por un momento en cuando estabas pequeño, antes de aprender a leer. Recuerdas la fascinación y el misterio que sentías cuando abriste un libro por primera vez; para ti esas páginas eran solo dibujos y letras raras que te daban muchísima curiosidad. Querías enterarte por ti mismo de las historias que venían ahí, pero como todavía no sabías cómo, te tocaba buscar a un adulto para que te las leyera, dependiendo de alguien más para entender ese mundo.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Por eso, el momento de ir al colegio y aprender a leer se convirtió en un proceso progresivo y natural que transformó tu mente para siempre. Primero te enseñaron las letras sueltas, a conocer cómo sonaba la M y cómo sonaba la A. Después te mostraron cómo unirlas para armar tus primeras palabras, y la primera que leíste con orgullo fue <em className="italic">mamá</em>, hasta que, casi sin darte cuenta, ya estructurabas frases completas como <em className="italic">amo a mi mamá</em>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Gracias a ese orden constructivo, un día cualquiera te sentaste frente a un libro nuevo y pudiste leerlo tú solo, de corrido y sin pedirle ayuda a nadie, descubriendo por ti mismo el significado de las palabras. Esa habilidad que adquiriste en tus primeros años se quedó contigo para siempre y fue la que usaste más adelante en el colegio y en la universidad para estudiar tu carrera. Nunca tuviste que volver a aprender a leer con cada libro nuevo; la habilidad ya era tuya.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.22, delay: 0.16, ease: fastEase }}
            className={`${brandCardShell} p-6 md:p-8`}
          >
            <BrandCardBackdrop accent="from-emerald-400/35 via-motca-green/18 to-transparent" />
            <GlowingEffect spread={36} glow disabled={false} proximity={80} inactiveZone={0.01} borderWidth={1.2} />
            <div className="relative z-10 border-l-[3px] border-motca-green/50 pl-5 md:pl-6">
              <p className="text-lg leading-relaxed text-white/85">
                MOTCA nace precisamente para transferir esa misma estructura evolutiva a la transformación digital. Este modelo se enfoca en desarrollar tu capacidad de adaptación para que tu mente pueda adoptar, de forma natural, cualquier tecnología.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <SectionDivider variant="originToModel" />

      {/* MODEL NODES */}
      <Section
        id="model"
        eyebrow="Arquitectura del modelo"
        title="Los cuatro nodos de desarrollo"
        subtitle="Cada nodo representa una etapa de madurez cognitiva diseñada para potenciar tu capacidad adaptativa. El modelo es completamente flexible: te permite ingresar directamente al nivel que mejor se alinee con las habilidades que necesitas activar hoy para interactuar con tu entorno."
        tone="clean"
        contentClassName="mx-auto max-w-5xl"
      >
        <ModelNodesShowcase />
      </Section>

      <SectionDivider variant="modelToImpact" />

      {/* IMPACT */}
      <Section
        id="impact"
        eyebrow="Impacto y responsabilidad social"
        title="Una capacidad que se multiplica cuando se comparte"
        tone="clean"
        contentClassName="mx-auto max-w-3xl text-center"
      >
        <p className="text-lg text-muted-foreground leading-relaxed">
          La autonomía digital no es solo un logro individual. Cuando una persona que lidera una institución, un equipo, un aula o un hogar desarrolla esta capacidad, quienes están a su alrededor también se transforman. Ese efecto multiplicador es lo que MOTCA busca activar en cada contexto.
        </p>
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-8 rounded-2xl border border-motca-green/20 bg-motca-green/[0.04] px-6 py-7 md:px-8 md:py-8"
        >
          <p className="text-base md:text-lg italic leading-relaxed text-muted-foreground">
            La transformación digital sostenible la producen{" "}
            <span className="font-bold not-italic text-motca-green">
              las personas que saben usarla, adaptarla y transmitirla;
            </span>{" "}
            que lideran a otros cuando las cosas se complican y no necesitan empezar de cero cada vez que algo cambia. Esas personas son las que MOTCA ayuda a formar.
          </p>
        </motion.blockquote>
      </Section>

      <SectionDivider variant="impactToPaths" />

      {/* PATHS */}
      <Section
        id="paths"
        eyebrow="Vías de expansión"
        title="Elige tu camino según tu realidad"
        subtitle="Una vez instalada tu capacidad adaptativa permanente a través de los cuatro nodos, las Vías de Expansión son el escenario práctico donde ese conocimiento se vuelve específico para tu realidad. Aquí el modelo te enseña a resolver los dolores y cuellos de botella de tu día a día, transformando la complejidad en agilidad y eficiencia."
        tone="blue"
        contentClassName="mx-auto max-w-5xl"
      >
        <ExpansionPathsSection />
      </Section>

      <SectionDivider variant="pathsToWho" />

      {/* WHO / FOUNDERS */}
      <Section
        id="who"
        eyebrow="Quién está detrás de MOTCA"
        title=""
        tone="clean"
        contentClassName="mx-auto max-w-4xl"
      >
        <div className="space-y-16">
          <LorenaProfileSection />
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
          <RicardoProfileSection />
        </div>
      </Section>

      <SectionDivider variant="whoToForm" />

      {/* FORM */}
      <Section
        id="form"
        eyebrow="Acceso al programa"
        title="Solicita tu diagnóstico de entrada"
        subtitle="Responde estas preguntas con honestidad. Con base en tus respuestas identificamos tu nodo de partida y la vía de expansión que más se alinea con tu realidad hoy."
        tone="form"
        contentClassName="mx-auto max-w-5xl"
      >
        <DiagnosticForm />
      </Section>

      <WhatsAppFeedbackButton />
      </main>

      <footer className="border-t border-border mt-12">
        <div className={`${PAGE_CONTAINER} py-8 flex flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground`}>
          <div className="font-display font-semibold text-navy-deep tracking-wide">
            MOTCA · Modelo de Transferencia de Capacidad Adaptativa · {new Date().getFullYear()}
          </div>
          <p className="max-w-xl text-xs text-muted-foreground/80">
            Desarrollado para transformar la forma en que personas y organizaciones se relacionan con la tecnología.
          </p>
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

const NODE_AUTO_INTERVAL_MS = 7000;

function ModelNodesShowcase() {
  const [activeNode, setActiveNode] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const active = modelNodes[activeNode];

  useEffect(() => {
    if (isPaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const intervalId = window.setInterval(() => {
      setActiveNode((current) => (current + 1) % modelNodes.length);
    }, NODE_AUTO_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
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

        <div className="relative mt-0 grid grid-cols-2 items-stretch gap-2 md:mt-5 md:grid-cols-4 md:gap-3">
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
                className={`relative flex h-full min-h-[5.75rem] flex-col overflow-hidden rounded-xl border p-4 text-left transition-all md:min-h-[6.25rem] md:p-5 ${
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
                <div className="relative z-10 flex h-full flex-col">
                  <div className={`font-mono text-xs font-bold leading-none transition-colors ${isActive ? "text-electric" : "text-muted-foreground"}`}>
                    {node.n}
                  </div>
                  <div className={`mt-2 flex flex-1 items-start font-display text-sm font-semibold leading-snug md:text-[0.95rem] ${isActive ? "text-navy-deep" : "text-navy-deep/80"}`}>
                    {node.label}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className={`${brandCardShell} min-h-[24rem] md:min-h-[26rem]`}>
        <div
          className="absolute left-0 top-0 z-20 h-full w-1 rounded-l-2xl transition-colors duration-200"
          style={{ backgroundColor: active.color }}
          aria-hidden="true"
        />
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

        <div className="relative z-10 flex min-h-[24rem] flex-col p-6 md:min-h-[26rem] md:p-8 lg:p-10">
          <motion.div
            key={active.n}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.08, ease: fastEase }}
            className="flex h-full max-w-none flex-col text-left pl-3 md:pl-4"
          >
            <span
              className="block font-mono text-[10px] font-bold uppercase leading-snug tracking-[0.14em]"
              style={{ color: active.color }}
            >
              {active.tag}
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-white md:text-[1.75rem]">
              {active.title}
            </h3>
            <p
              className="mt-2 text-xs font-semibold uppercase leading-snug tracking-[0.12em] md:text-sm"
              style={{ color: active.color }}
            >
              {active.subtitle}
            </p>
            <div className="mt-5 space-y-4 text-sm leading-[1.8] text-white/82 md:text-base">
              <p>{active.desc}</p>
              <p>
                <strong className="font-semibold text-white/92">Tu punto de partida ideal si</strong>{" "}
                {active.idealFor}
              </p>
            </div>
            <div className="mt-auto flex items-center gap-2 border-t border-white/10 pt-5 text-xs">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: active.color }}
              />
              <span className="font-medium" style={{ color: active.color }}>
                {active.status}
              </span>
              <span className="ml-auto font-mono rounded border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/70">
                {active.n}
              </span>
            </div>
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
          {title ? (
            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold text-navy-deep md:text-4xl">{title}</h2>
          ) : null}
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
  variant?:
    | "heroToOrigin"
    | "originToModel"
    | "modelToImpact"
    | "impactToPaths"
    | "pathsToWho"
    | "whoToForm";
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
    modelToImpact: {
      label: "Impacto",
      wash: "via-electric/[0.07] dark:via-electric/[0.04]",
      primary: "from-electric/75 via-electric/35 to-transparent",
      secondary: "from-transparent via-motca-green/45 to-motca-green/70",
      tick: "bg-electric",
    },
    impactToPaths: {
      label: "Vías",
      wash: "via-electric/[0.08] dark:via-electric/[0.05]",
      primary: "from-electric/80 via-electric/40 to-transparent",
      secondary: "from-transparent via-cyan-400/45 to-cyan-400/75",
      tick: "bg-electric",
    },
    pathsToWho: {
      label: "Quién",
      wash: "via-motca-green/[0.05] dark:via-motca-green/[0.04]",
      primary: "from-motca-green/70 via-motca-green/30 to-transparent",
      secondary: "from-transparent via-electric/45 to-electric/65",
      tick: "bg-motca-green",
    },
    whoToForm: {
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

function ExpansionPathsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {expansionPaths.map((path, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={path.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.03 }}
            className="overflow-hidden rounded-2xl border bg-card shadow-sm transition-colors"
            style={{
              borderColor: isOpen ? path.color : undefined,
              borderTopWidth: "3px",
              borderTopColor: path.color,
            }}
          >
            <GlowingEffect spread={34} glow={isOpen} disabled={false} proximity={72} inactiveZone={0.01} borderWidth={1.2} />
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-start gap-3 p-5 text-left transition-colors hover:bg-muted/30"
              aria-expanded={isOpen}
            >
              <span className="text-xl shrink-0" aria-hidden="true">
                {path.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold leading-snug text-navy-deep">{path.name}</span>
                <span className="mt-1.5 block text-xs leading-relaxed text-muted-foreground">{path.retorno}</span>
              </span>
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-all"
                style={{
                  borderColor: isOpen ? path.color : undefined,
                  backgroundColor: isOpen ? `${path.color}22` : undefined,
                  color: isOpen ? path.color : undefined,
                  transform: isOpen ? "rotate(45deg)" : undefined,
                }}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: fastEase }}
                  className="overflow-hidden border-t border-border/60"
                >
                  <div className="px-5 pb-5 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-navy-deep">
                      Ejes de profundización práctica
                    </p>
                    <ul className="mt-3 space-y-2">
                      {path.ejes.map((eje) => (
                        <li
                          key={eje}
                          className="relative border-b border-border/50 pb-2 pl-4 text-sm leading-relaxed text-muted-foreground last:border-b-0 last:pb-0"
                        >
                          <span
                            className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full opacity-80"
                            style={{ backgroundColor: path.color }}
                          />
                          {eje}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

function LorenaProfileSection() {
  const lorenaQuestion =
    "¿qué capacidades permiten a las personas desenvolverse con autonomía en entornos cada vez más dinámicos, inciertos y cambiantes?";

  return (
    <div className="grid items-start gap-10 md:grid-cols-[200px_minmax(0,1fr)] md:gap-12">
      <motion.aside
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.46, ease: fastEase }}
        className="text-center"
      >
        <div className="mx-auto mb-4 h-[150px] w-[150px] overflow-hidden rounded-full border-[3px] border-motca-green/25 bg-muted shadow-sm">
          <img
            src={assetPath("founders/lorena-headshot.jpg")}
            alt={lorenaProfile.name}
            className="h-full w-full object-cover object-[center_15%]"
            loading="lazy"
            decoding="async"
          />
        </div>
        <h3 className="font-display text-base font-bold text-navy-deep">{lorenaProfile.name}</h3>
        <div className="mt-3 space-y-1 text-xs leading-relaxed text-muted-foreground">
          {lorenaProfile.credentials.map((credential) => (
            <span key={credential} className="block">
              {credential}
            </span>
          ))}
        </div>
        <a
          href={lorenaProfile.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-motca-green/30 bg-motca-green/5 px-3.5 py-2 text-xs font-semibold text-motca-green transition-colors hover:border-motca-green/50 hover:bg-motca-green/10"
        >
          <LinkedInIcon className="h-3.5 w-3.5 text-[#0a66c2]" />
          Conectar en LinkedIn
        </a>
      </motion.aside>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.46, delay: 0.06, ease: fastEase }}
        className="space-y-4 text-base leading-relaxed text-foreground"
      >
        {lorenaProfile.paragraphs.map((paragraph, index) => {
          if (index === 1) {
            const [before, after] = paragraph.split(lorenaQuestion);
            return (
              <p key={index}>
                {before}
                <em className="italic">{lorenaQuestion}</em>
                {after}
              </p>
            );
          }
          return <p key={index}>{paragraph}</p>;
        })}
      </motion.div>
    </div>
  );
}

function RicardoProfileSection() {
  return (
    <div className="grid items-start gap-10 md:grid-cols-[200px_minmax(0,1fr)] md:gap-12">
      <motion.aside
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.46, ease: fastEase }}
        className="text-center"
      >
        <div className="mx-auto mb-4 h-[150px] w-[150px] overflow-hidden rounded-full border-[3px] border-electric/25 bg-muted shadow-sm">
          <img
            src={assetPath(ricardoProfile.imageSrc)}
            alt={ricardoProfile.name}
            className={`h-full w-full object-cover ${ricardoProfile.avatarClassName}`}
            loading="lazy"
            decoding="async"
          />
        </div>
        <h3 className="font-display text-base font-bold text-navy-deep">{ricardoProfile.name}</h3>
        <p className="mt-2 text-xs font-semibold text-electric">{ricardoProfile.role}</p>
        <a
          href={ricardoProfile.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-electric/30 bg-electric/5 px-3.5 py-2 text-xs font-semibold text-electric transition-colors hover:border-electric/50 hover:bg-electric/10"
        >
          <LinkedInIcon className="h-3.5 w-3.5 text-[#0a66c2]" />
          Conectar en LinkedIn
        </a>
      </motion.aside>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.46, delay: 0.06, ease: fastEase }}
        className="text-base leading-relaxed text-foreground"
      >
        <p>{ricardoProfile.description}</p>
      </motion.div>
    </div>
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


function DiagnosticForm() {
  const initialFormData = {
    name: "",
    phone: "",
    role: "",
    email: "",
    path: "",
    terrain: "",
    learn: [] as string[],
    features: [] as string[],
    duolingo: "",
    comment: "",
  };

  const [done, setDone] = useState(false);
  const [data, setData] = useState(initialFormData);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const resetForm = () => {
    setDone(false);
    setData(initialFormData);
    setError(null);
    setSubmitting(false);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendAnother = () => {
    resetForm();
    window.requestAnimationFrame(() => scrollTo("form"));
  };

  const handleBackToTop = () => {
    resetForm();
    window.requestAnimationFrame(() => scrollTo("top"));
  };

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
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={getWhatsAppHref("Hola MOTCA, ya envié mi diagnóstico y quiero agendar una demo.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-navy/20 transition-colors hover:bg-navy-deep"
            >
              Agendar una demo
            </a>
            <button
              type="button"
              onClick={handleSendAnother}
              className="inline-flex items-center justify-center rounded-lg border border-motca-green/35 bg-motca-green/10 px-5 py-3 text-sm font-semibold text-motca-green transition-colors hover:border-motca-green/50 hover:bg-motca-green/15"
            >
              Enviar otro diagnóstico
            </button>
            <button
              type="button"
              onClick={handleBackToTop}
              className="inline-flex items-center justify-center rounded-lg border border-border bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-electric hover:text-electric dark:bg-background/70"
            >
              Volver al inicio
            </button>
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
            <Field label="Vía de expansión que te interesa" className="md:col-span-2">
              <select className={inputCls} value={data.path} onChange={(e) => setData({ ...data, path: e.target.value })}>
                <option value="">Selecciona la que más se acerca a tu perfil</option>
                {pathOptions.map((p) => <option key={p} value={p}>{p}</option>)}
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
            {submitting ? "Enviando…" : "Ver mi diagnóstico de entrada"}
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
