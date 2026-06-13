export const modelNodes = [
  {
    n: "N1",
    node: "01",
    tag: "NODO 1 · EL FONEMA DE LA MENTE",
    label: "El Fonema de la Mente",
    title: "El Fonema de la Mente",
    subtitle: "Pensamiento digital",
    status: "Pensamiento digital",
    desc: "Este nodo activa tu autonomía intelectual frente al entorno tecnológico. Aquí deconstruimos la complejidad del mundo digital para comprender sus componentes esenciales de forma lógica y transparente. Al dominar el abecedario de la tecnología, transformas la incertidumbre en seguridad, permitiéndote sostener conversaciones con cualquier persona, desde un especialista técnico o un proveedor de servicios, hasta en el hogar cuando se habla de tecnología en el día a día, con absoluta naturalidad y sin barreras.",
    idealFor:
      "buscas dominar la lógica detrás de las herramientas digitales para comunicarte con total seguridad en tu cotidianidad, y deseas dejar atrás la intimidación tecnológica para empezar a interactuar con el entorno digital con total propiedad y confianza.",
    colors: [[29, 78, 216], [59, 130, 246]],
    speed: 4.2,
    accent: "from-blue-400/35 via-blue-500/15 to-transparent",
    canvasBg: "!bg-[oklch(0.17_0.07_255)]",
    color: "#1d4ed8",
  },
  {
    n: "N2",
    node: "02",
    tag: "NODO 2 · LA SINTAXIS DEL PENSAMIENTO",
    label: "La Sintaxis del Pensamiento",
    title: "La Sintaxis del Pensamiento",
    subtitle: "Estructuración del pensamiento de capacidad adaptativa",
    status: "Estructuración adaptativa",
    desc: "Aquí elevas tu habilidad para conectar variables y entender cómo se relaciona la información en tu entorno. Este nodo entrena tu mente para ordenar ideas o flujos de datos dispersos y traducirlos en mapas lógicos claros, organizados y listos para la acción. Al dominar la sintaxis digital, adquieres la destreza de trazar rutas claras para resolver problemas, asegurando que tus propuestas, proyectos o decisiones cotidianas tengan una estructura firme y fácil de comprender para cualquier persona.",
    idealFor:
      "quieres perfeccionar el hilo conductor de tus ideas, transformando proyectos personales, iniciativas ciudadanas o planes de trabajo en soluciones organizadas, nítidas y viables.",
    colors: [[217, 119, 6], [251, 191, 36]],
    speed: 3.6,
    accent: "from-amber-400/35 via-amber-500/18 to-transparent",
    canvasBg: "!bg-[oklch(0.15_0.08_260)]",
    color: "#b45309",
  },
  {
    n: "N3",
    node: "03",
    tag: "NODO 3 · LA LECTURA FLUIDA",
    label: "La Lectura Fluida",
    title: "La Lectura Fluida",
    subtitle: "Autonomía interpretativa",
    status: "Autonomía interpretativa",
    desc: "Este nivel entrena tu mente para reconocer patrones y entender el entorno digital a alta velocidad. Aquí desarrollas la agilidad cognitiva necesaria para evaluar la información que recibes y navegar por nuevas aplicaciones, plataformas o reportes con total soltura. Es la capacidad que te permite pararte frente a cualquier nueva solución o sistema e interpretarlo de forma natural y autónoma, sin depender de que alguien más te lo tenga que explicar o traducir.",
    idealFor:
      "necesitas evaluar situaciones o datos con rapidez y buscas que la tecnología deje de ser un intermediario confuso, convirtiéndose en un entorno transparente que lees y entiendes por ti mismo.",
    colors: [[126, 34, 206], [168, 85, 247]],
    speed: 3.2,
    accent: "from-purple-400/35 via-violet-500/15 to-transparent",
    canvasBg: "!bg-[oklch(0.14_0.07_250)]",
    color: "#7e22ce",
  },
  {
    n: "N4",
    node: "04",
    tag: "NODO 4 · LA ESCRITURA PROPIA",
    label: "La Escritura Propia",
    title: "La Escritura Propia",
    subtitle: "Generación de valor y creación",
    status: "Generación de valor y creación",
    desc: "La cúspide de tu madurez adaptativa. En este nodo, el conocimiento asimilado se convierte en capacidad de creación y acción pura. Te capacitas para proponer y liderar tus propios proyectos, diseñar soluciones a la medida de tus necesidades, gestionar los riesgos del entorno digital y tomar decisiones inteligentes con un impacto real. Es el nivel donde tomas el control para que las herramientas digitales, incluyendo la Inteligencia Artificial, trabajen exactamente en función de tus metas, tus proyectos sociales o tu comunidad.",
    idealFor:
      "ya dominas la lógica digital y tu meta actual es proponer, estructurar y dar vida a tus propias iniciativas, asegurando que la tecnología sea un motor para transformar tu realidad y la de tu entorno.",
    colors: [[21, 128, 61], [74, 222, 128]],
    speed: 4.8,
    accent: "from-emerald-400/30 via-green-500/18 to-transparent",
    canvasBg: "!bg-[oklch(0.16_0.06_255)]",
    color: "#15803d",
  },
] as const;

export const expansionPaths = [
  {
    icon: "🏢",
    name: "Alta Dirección y Líderes de Equipos",
    color: "#0284c7",
    retorno:
      "Adquieres las herramientas conceptuales y estratégicas para desactivar la dispersión de datos, resolver cuellos de botella operativos y liderar la toma de decisiones tecnológicas con total autonomía, velocidad y sin depender de intermediarios.",
    ejes: [
      "Gobernanza tecnológica y analítica desde la perspectiva de la toma de decisiones C-Level.",
      "Mitigación de riesgos estratégicos y optimización de recursos en la adopción de Inteligencia Artificial.",
      "Estructuración de preguntas críticas para evaluar y auditar propuestas de proveedores técnicos.",
    ],
  },
  {
    icon: "⚖️",
    name: "Profesionales del Derecho y Regulación",
    color: "#db2777",
    retorno:
      "Desarrollas el criterio tecno-legal exacto para evaluar, estructurar y blindar la adopción de nuevas tecnologías e Inteligencia Artificial con rapidez, actuando como un habilitador estratégico del negocio.",
    ejes: [
      "Comprensión de la arquitectura técnica subyacente para el diseño de contratos y cumplimiento normativo.",
      "Gestión de riesgo digital, privacidad por diseño y evidencia analítica sin tecnicismos complejos.",
      "Gobernanza ética y cumplimiento regulatorio en procesos automatizados y despliegue de IA.",
    ],
  },
  {
    icon: "💡",
    name: "Consultores y Asesores Independientes",
    color: "#0d9488",
    retorno:
      "Obtienes la metodología para integrar el componente digital en tus propuestas de valor actuales, permitiéndote diseñar arquitecturas de información claras y posicionarte como estratega integral.",
    ejes: [
      "Traducción de necesidades de negocio en estructuras de datos claras y accionables para el cliente.",
      "Metodología para diagnosticar la madurez digital y analítica de las organizaciones que acompañas.",
      "Diseño de narrativas estratégicas que conectan la operación del cliente con el ecosistema tecnológico.",
    ],
  },
  {
    icon: "🚀",
    name: "Emprendedores y Creadores de Proyectos",
    color: "#d97706",
    retorno:
      "Activas el criterio técnico fundamental para estructurar la infraestructura de tu negocio, automatizar flujos de trabajo para ganar tiempo y negociar de igual a igual con proveedores.",
    ejes: [
      "Lógica y soberanía de datos para el diseño de productos y servicios digitales sostenibles.",
      "Criterios estratégicos para la selección de software, infraestructura y herramientas no-code o de IA.",
      "Estructuración eficiente de flujos de información internos para acelerar la toma de decisiones y el escalado.",
    ],
  },
  {
    icon: "🏛️",
    name: "Líderes Académicos y Docentes",
    color: "#2563eb",
    retorno:
      "Te capacita para guiar la adopción tecnológica en tu institución con un sentido pedagógico real, evaluando el impacto ético de la IA en el aula y construyendo una cultura de aprendizaje autónoma.",
    ejes: [
      "Evaluación y adopción de herramientas digitales basadas en criterios de impacto pedagógico real.",
      "Gobernanza y gestión de riesgos éticos en el uso de IA por parte de estudiantes y docentes.",
      "Estrategias para diseñar entornos de aprendizaje que fomenten la autonomía digital y el criterio propio.",
    ],
  },
  {
    icon: "🎓",
    name: "Estudiantes y Jóvenes Profesionales",
    color: "#7c3aed",
    retorno:
      "Instala una base de pensamiento analítico y adaptativo que te permite absorber cualquier nueva herramienta del mercado a alta velocidad y destacar en cualquier rol desde el inicio de tu carrera.",
    ejes: [
      "Desarrollo de una estructura mental lógica para abordar problemas complejos mediante el uso de datos.",
      "Técnicas de aprendizaje acelerado para dominar nuevas herramientas de IA y software sin depender de manuales.",
      "Construcción de un perfil profesional diferenciado basado en el criterio estratégico y la capacidad adaptativa.",
    ],
  },
  {
    icon: "🛠️",
    name: "Profesionales Técnicos y de la Salud",
    color: "#059669",
    retorno:
      "Desarrollas la capacidad comunicativa y el enfoque estratégico para operar en la intersección de tu especialidad y los datos, traduciendo sistemas complejos en decisiones seguras y eficientes.",
    ejes: [
      "Traducción de datos técnicos o clínicos complejos en narrativas claras para la toma de decisiones ejecutivas.",
      "Optimización de la práctica diaria mediante la integración fluida de herramientas analíticas y de diagnóstico.",
      "Liderazgo de equipos multidisciplinarios actuando como puente entre la especialidad y el área de TI.",
    ],
  },
  {
    icon: "🏠",
    name: "Familias y Hogar Digital",
    color: "#ea580c",
    retorno:
      "Te entrega un enfoque práctico para guiar a tu familia en el entorno digital de forma consciente, proteger la privacidad y organizar la dinámica del hogar con criterio propio.",
    ejes: [
      "Principios prácticos de seguridad, privacidad y gestión consciente de dispositivos en el entorno familiar.",
      "Uso de la lógica de datos y la analítica elemental para la planificación y optimización de la rutina del hogar.",
      "Estrategias de acompañamiento digital para desarrollar criterio propio y responsabilidad en niños y jóvenes.",
    ],
  },
  {
    icon: "♻️",
    name: "Sostenibilidad y Gestión Responsable",
    color: "#16a34a",
    retorno:
      "Te enseña a integrar el pensamiento analítico dentro de la gestión ambiental y de gobierno, usando los datos como motor de medición real para estructurar reportes con criterio propio.",
    ejes: [
      "Estructuración y lectura de información clave para la medición del impacto ambiental, social y de gobierno (ESG).",
      "Diseño de reportes e indicadores de sostenibilidad basados en datos confiables, transparentes y auditables.",
      "Uso de la analítica como herramienta estratégica para identificar ineficiencias en el uso de recursos organizacionales.",
    ],
  },
  {
    icon: "🤝",
    name: "Responsabilidad Social y Territorio",
    color: "#6d28d9",
    retorno:
      "Consigues las herramientas conceptuales para gestionar información de proyectos sociales con rigor, estructurando evidencia de impacto clara que atraiga fondos de desarrollo con rapidez.",
    ejes: [
      "Metodologías para recolectar y estructurar datos sociales del territorio con autonomía y rigor metodológico.",
      "Traducción del impacto cualitativo de los programas comunitarios en evidencia cuantitativa creíble y auditable.",
      "Diseño de narrativas de impacto basadas en datos para la rendición de cuentas ante cooperantes y financiadores.",
    ],
  },
] as const;

export const pathOptions = [
  ...expansionPaths.map((path) => path.name),
  "Aún no sé cuál es la mía",
];

export const lorenaProfile = {
  name: "Lorena Pitalúa",
  linkedinUrl: "https://www.linkedin.com/in/lorena-pitalua/",
  credentials: [
    "Magíster en Gerencia de la Transformación Digital y Analítica de Negocios",
    "Especialista en Derecho Informático y Nuevas Tecnologías",
    "Especialista en Ciberseguridad",
    "Abogada",
  ],
  paragraphs: [
    "Mi trayectoria se ha desarrollado en la convergencia entre las personas, la tecnología, el derecho y la toma de decisiones. Ese recorrido me ha permitido comprender que los desafíos más complejos rara vez pertenecen a una sola disciplina y que las soluciones más valiosas suelen surgir cuando somos capaces de conectar perspectivas diferentes.",
    "Analizar problemas, identificar patrones y transformar la complejidad en estructuras comprensibles ha sido una constante en mi forma de trabajar y de entender el mundo. En ese camino ha estado presente una pregunta que sigue acompañándome hasta hoy: ¿qué capacidades permiten a las personas desenvolverse con autonomía en entornos cada vez más dinámicos, inciertos y cambiantes?",
    "Vivimos en una época en la que las herramientas evolucionan con rapidez, los modelos de trabajo se transforman y la tecnología redefine continuamente la forma en que aprendemos, decidimos y creamos valor. Sin embargo, detrás de todos esos cambios existe una capacidad que permanece vigente: la capacidad humana de aprender, adaptarse y construir nuevas formas de avanzar.",
    "MOTCA es una expresión de esa manera de pensar. Parte de una premisa fundamental: el verdadero desafío no consiste en aprender cada nueva herramienta que aparece, sino en desarrollar las capacidades que nos permitan navegar cualquier cambio con autonomía, criterio y confianza. Cuando las personas desarrollan esa capacidad de adaptarse, dejan de depender de las herramientas del momento y adquieren algo mucho más valioso: la posibilidad de seguir evolucionando en cualquier entorno que el futuro les presente.",
  ],
} as const;

export const ricardoProfile = {
  initials: "RA",
  name: "Ricardo Arcos",
  role: "Co-founder",
  imageSrc: "founders/ricardo-headshot-v2.jpg",
  avatarClassName: "scale-[1.08]",
  linkedinUrl: "https://www.linkedin.com/",
  description:
    "Ricardo conecta ingeniería, datos, inteligencia artificial y estrategia de negocio para convertir retos complejos en soluciones digitales claras, medibles y accionables. Su enfoque combina tecnología, analítica y visión estratégica para ayudar a las personas y organizaciones a adaptarse, aprender y tomar mejores decisiones.",
};
