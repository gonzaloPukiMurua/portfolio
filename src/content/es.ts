import type { Dictionary } from './types';

// Draft copy: rewritten by the owner in sprint 03.
// Services, prices and durations are carried over from the previous site.
export const es = {
  meta: {
    title: 'Gelum Digital | Sitios web a medida para pymes',
    description:
      'Sitios web programados a medida para pymes. Hechos a mano, 100% tuyos y rápidos.',
  },
  skipLink: 'Saltar al contenido',
  nav: {
    label: 'Principal',
    sections: {
      services: 'Servicios',
      work: 'Trabajos',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    cta: 'Escribime',
    menuOpen: 'Menú',
    menuClose: 'Cerrar',
  },
  language: {
    label: 'Idioma',
  },
  hero: {
    availability: 'Agenda abierta · oct. 2026',
    title: 'Sitios web programados a medida que superan a los creadores con IA.',
    lead: 'Diseño y desarrollo sitios web rápidos y a medida para pymes. Trabajás directamente conmigo, y al final todo es tuyo.',
    primaryCta: 'Empezar un proyecto',
    secondaryCta: 'Ver trabajos',
    trust: 'Next.js · TypeScript · Tailwind — desde Argentina, para clientes de EE. UU., Australia y Nueva Zelanda',
  },
  services: {
    eyebrow: 'Servicios',
    title: 'Paquetes claros, precios base claros.',
    lead: 'Cada proyecto empieza con una llamada breve y un alcance cerrado. Los precios son un punto de partida; el presupuesto final depende del alcance.',
    from: 'desde',
    popular: 'El más elegido',
    cta: 'Pedir presupuesto',
    // Contenido y plazos de los paquetes: borradores pendientes de aprobación (los precios son finales).
    tiers: {
      website: {
        name: 'Sitio web',
        duration: '1–2 semanas',
        features: [
          'Landing page o sitio de hasta 5 páginas',
          'Diseño a medida, pensado primero para mobile',
          'Formulario de contacto y SEO básico',
          'Publicación en tu dominio',
        ],
      },
      redesign: {
        name: 'Rediseño',
        duration: '2–4 semanas',
        features: [
          'Nuevo diseño y estructura para tu sitio actual',
          'Reconstruido con código moderno y rápido',
          'Migración del contenido del sitio anterior',
          'Redirecciones para no perder posicionamiento',
        ],
      },
      cms: {
        name: 'Sitio con CMS',
        duration: '3–5 semanas',
        features: [
          'Un sitio que podés actualizar vos',
          'Gestor de contenidos configurado',
          'Sección de blog o novedades',
          'Capacitación para manejar tu contenido',
        ],
      },
      custom: {
        name: 'Software a medida',
        duration: '6–8 semanas',
        features: [
          'Aplicación web o herramienta interna para tu proceso',
          'Base de datos, usuarios y panel de administración',
          'Integraciones con tus herramientas (pagos, email)',
        ],
      },
    },
  },
  work: {
    eyebrow: 'Trabajos',
    title: 'Trabajos seleccionados',
    lead: 'Proyectos concepto hechos para mostrar variedad y oficio. Los negocios son ficticios; los sitios son reales y están publicados.',
    concept: 'Concepto',
    demoLink: 'Ver demo',
    newTab: '(se abre en una pestaña nueva)',
    screenshotAlt: 'Página de inicio del sitio concepto {name}',
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Hola, soy Gonzalo.',
    paragraphs: [
      'Soy desarrollador full-stack. Diseño y desarrollo sitios y aplicaciones web a medida para pymes.',
      'Trabajás directamente conmigo, desde la primera llamada hasta el lanzamiento: sin intermediarios. Te mantengo al tanto por escrito, así el proyecto avanza sin reuniones diarias.',
    ],
    meta: 'Desde Argentina (UTC−3) · Trabajo en español e inglés',
    photoAlt: 'Retrato de Gonzalo Murua',
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Contame sobre tu proyecto.',
    lead: 'Con unas líneas alcanza. Te respondo con los próximos pasos y un horario para una llamada breve.',
    fields: {
      name: { label: 'Nombre', error: 'Ingresá tu nombre.' },
      email: {
        label: 'Email',
        error: 'Ingresá tu email.',
        invalid: 'Ingresá un email válido.',
      },
      service: {
        label: '¿Qué necesitás?',
        placeholder: 'Elegí una opción',
        other: 'Otra cosa',
        error: 'Elegí una opción.',
      },
      message: { label: 'Detalles del proyecto', error: 'Contame un poco sobre tu proyecto.' },
    },
    submit: 'Enviar mensaje',
    submitting: 'Enviando…',
    success: {
      title: 'Gracias, recibí tu mensaje.',
      body: 'Te respondo por email dentro de un día hábil.',
    },
    error: 'No se pudo enviar tu mensaje. Probá de nuevo, o escribime directamente a',
    direct: '¿Preferís el email?',
    replyTime: 'Respondo dentro de un día hábil.',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
} satisfies Dictionary;
