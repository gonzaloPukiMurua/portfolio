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
    cta: 'Consultar por este paquete',
    tiers: {
      starter: {
        name: 'Starter',
        duration: '4–5 semanas',
        features: [
          'Sitio de 3 a 5 páginas o landing page',
          'Next.js o WordPress',
          'CMS básico y formularios',
          'Adaptado a mobile y SEO básico',
        ],
      },
      growth: {
        name: 'Growth',
        duration: '5–7 semanas',
        features: [
          'De 8 a 10 páginas y un blog',
          'Tienda Shopify o a medida',
          'Integración de pagos',
          '3 rondas de revisión y capacitación',
        ],
      },
      premium: {
        name: 'Premium',
        duration: '7–9 semanas',
        features: [
          'Aplicación web a medida o MVP de SaaS',
          'Backend con Nest.js y PostgreSQL',
          'Autenticación, Stripe y paneles',
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
