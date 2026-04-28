import {
  Bot,
  BriefcaseBusiness,
  Code2,
  Compass,
  FileText,
  Gauge,
  Gem,
  LineChart,
  MailCheck,
  MapPin,
  Megaphone,
  Palette,
  Search,
  Target,
  TrendingUp,
  Users
} from "lucide-react";

export const whatsappHref =
  "https://wa.me/13050000000?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Grow%20Revenue.";

export const navItems = [
  ["Inicio", "#inicio"],
  ["Servicios", "#servicios"],
  ["Planes", "#planes"],
  ["SEO", "#seo"],
  ["Proceso", "#proceso"],
  ["Contacto", "#contacto"]
];

export const authorityCards = [
  {
    icon: Search,
    title: "Más visibilidad",
    text: "Tu marca aparece con más autoridad donde tus clientes ya están buscando soluciones."
  },
  {
    icon: Users,
    title: "Más clientes",
    text: "Convertimos tráfico en conversaciones, formularios y oportunidades que tu equipo puede seguir."
  },
  {
    icon: TrendingUp,
    title: "Más ventas",
    text: "Diseñamos mensajes, ofertas y flujos para generar confianza y acelerar decisiones."
  }
];

export const services = [
  {
    icon: Code2,
    title: "Diseño web profesional",
    text: "Experiencias web premium, rápidas y pensadas para convertir visitas en leads calificados."
  },
  {
    icon: MapPin,
    title: "SEO local y posicionamiento",
    text: "Optimización para búsquedas en Miami, Google Maps y palabras clave locales."
  },
  {
    icon: Megaphone,
    title: "Meta Ads y Google Ads",
    text: "Campañas con intención comercial, creatividad clara y medición enfocada en revenue."
  },
  {
    icon: Palette,
    title: "Branding básico",
    text: "Identidad visual limpia, coherente y lista para competir con autoridad."
  },
  {
    icon: Bot,
    title: "Automatización de leads",
    text: "Flujos de seguimiento para responder más rápido y perder menos oportunidades."
  },
  {
    icon: BriefcaseBusiness,
    title: "Integración con CRM",
    text: "Conectamos formularios, contactos y pipeline para organizar cada oportunidad."
  },
  {
    icon: Target,
    title: "Landing pages de conversión",
    text: "Páginas enfocadas en una acción clara: captar clientes listos para actuar."
  },
  {
    icon: FileText,
    title: "Copywriting para negocios",
    text: "Mensajes directos que explican valor, reducen fricción y venden mejor."
  }
];

export const monthlyMarketingPlans = [
  {
    name: "Plan Starter",
    price: "$1,500",
    cadence: "/ mes",
    description:
      "Para negocios pequeños que necesitan empezar a generar clientes con una estrategia clara y simple.",
    includes: [
      "1 campaña de Meta Ads",
      "1 landing page simple",
      "Integración básica de leads",
      "Seguimiento básico",
      "Reporte mensual"
    ],
    ideal: ["Contractors", "Pequeños negocios locales", "Emprendedores con servicios"],
    cta: "Quiero empezar",
    theme: "starter",
    icon: Target
  },
  {
    name: "Plan Growth",
    badge: "Best Seller",
    price: "$3,000",
    cadence: "/ mes",
    description:
      "El plan ideal para negocios que quieren generar leads y convertirlos con seguimiento, CRM y automatización.",
    includes: [
      "Meta Ads + Google Ads",
      "2-3 funnels o landing pages",
      "Integración con CRM",
      "Automatización básica por WhatsApp / email",
      "Seguimiento de leads",
      "Dashboard de ventas",
      "Optimización semanal"
    ],
    highlight: "No solo generamos leads, los convertimos.",
    cta: "Quiero crecer",
    theme: "growth",
    icon: LineChart
  },
  {
    name: "Plan Elite",
    price: "$5,000 - $8,000",
    cadence: "/ mes",
    description:
      "Para empresas serias que quieren un sistema completo de adquisición, seguimiento y crecimiento.",
    includes: [
      "Ads avanzados: Meta Ads + Google Ads + retargeting",
      "Funnels completos",
      "CRM completo con pipeline",
      "Automatización avanzada",
      "Contenido creativo para ads y copies",
      "Optimización diaria",
      "Estrategia de crecimiento"
    ],
    highlight: "ROI, escalabilidad y control real de tus oportunidades.",
    cta: "Solicitar estrategia",
    theme: "elite",
    icon: Gem
  }
];

export const pricingPlans = [
  {
    name: "Plan Básico",
    label: "Web Express",
    price: "Desde $199",
    cadence: "/ pago único",
    description:
      "Para negocios que necesitan estar online rápido, verse profesionales y empezar a recibir clientes.",
    includes: [
      "1 página landing",
      "Diseño moderno con plantilla optimizada",
      "Formulario de contacto",
      "Botón directo a WhatsApp",
      "Entrega en 48-72 horas"
    ],
    ideal: ["Negocios sin presencia online", "Emprendedores", "Servicios locales"],
    cta: "Quiero mi web básica",
    theme: "basic"
  },
  {
    name: "Plan Pro",
    label: "Más popular",
    price: "$599",
    cadence: "/ pago único",
    description:
      "Para negocios que ya crecieron y necesitan una presencia digital más sólida, profesional y confiable.",
    includes: [
      "Hasta 5 páginas",
      "Diseño profesional",
      "Copy básico",
      "SEO básico",
      "Google Analytics",
      "Google Search Console",
      "Entrega en 3 a 5 días"
    ],
    ideal: ["Clínicas", "Real Estate", "Contractors", "Empresas de servicios"],
    cta: "Quiero el Plan PRO",
    theme: "pro",
    featured: true
  },
  {
    name: "Plan Premium",
    label: "Sistema Digital Completo",
    badge: "Alto impacto",
    price: "Inicia en $999+",
    cadence: "",
    description:
      "No es solo una página web. Es un sistema digital diseñado para atraer, organizar y convertir clientes.",
    includes: [
      "Diseño completo y estratégico",
      "Branding básico",
      "Optimización SEO",
      "Integración con CRM",
      "Automatización inteligente",
      "Formularios conectados a seguimiento",
      "WhatsApp / email follow-up básico"
    ],
    ideal: [
      "Empresas que quieren escalar",
      "Negocios con volumen de leads",
      "Marcas que buscan más control y más ventas"
    ],
    cta: "Quiero el Plan Premium",
    theme: "premium"
  }
];

export const seoBlocks = [
  {
    icon: Compass,
    title: "SEO Local",
    points: [
      "Optimización para búsquedas en Miami",
      "Google Business Profile",
      "Keywords locales",
      "Visibilidad en Google Maps"
    ]
  },
  {
    icon: FileText,
    title: "SEO On-Page",
    points: [
      "Títulos optimizados",
      "Meta descriptions",
      "Estructura de contenido",
      "URLs limpias",
      "Optimización móvil"
    ]
  },
  {
    icon: Gauge,
    title: "SEO Técnico",
    points: [
      "Velocidad del sitio",
      "Sitemap",
      "Indexación",
      "Search Console",
      "Buenas prácticas de estructura"
    ]
  },
  {
    icon: MailCheck,
    title: "SEO de Contenido",
    points: [
      "Textos claros",
      "Palabras clave estratégicas",
      "Intención de búsqueda",
      "Contenido que ayuda a convertir"
    ]
  }
];

export const processSteps = [
  ["Diagnóstico", "Entendemos tu negocio, tus servicios y tus objetivos."],
  ["Estrategia", "Definimos la estructura, mensaje y enfoque visual."],
  ["Diseño y desarrollo", "Creamos una presencia digital profesional y optimizada."],
  ["Lanzamiento", "Publicamos tu sitio y conectamos herramientas clave."],
  ["Crecimiento", "Optimizamos para generar más clientes y mejores resultados."]
];

export const testimonials = [
  {
    quote:
      "Necesitábamos una web seria y rápida. Grow Revenue nos ayudó a explicar mejor nuestros servicios y empezamos a recibir mensajes más calificados.",
    name: "Carlos M.",
    role: "Dueño de negocio local"
  },
  {
    quote:
      "La landing quedó elegante, clara y enfocada en captar leads. Ahora tengo una página que realmente representa mi marca.",
    name: "Andrea R.",
    role: "Realtor en Miami"
  },
  {
    quote:
      "Me gustó que no solo hicieron diseño. También pensaron en SEO, formularios y seguimiento para no perder oportunidades.",
    name: "Miguel T.",
    role: "Contractor"
  }
];

export const comparison = {
  common: ["Solo diseño", "Sin seguimiento", "Sin estrategia de conversión", "Sin medición clara"],
  grow: [
    "Diseño orientado a ventas",
    "SEO básico desde el inicio",
    "Integración con Google",
    "Automatización y CRM",
    "Estrategia enfocada en revenue"
  ]
};

export const stats = [
  ["48-72h", "lanzamiento express"],
  ["5", "piezas clave conectadas"],
  ["Miami", "enfoque local"]
];
