import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import CTAButton from '../components/CTAButton'
import { WA_LINK } from '../constants'

const SERVICIOS = [
  {
    id: '01',
    title: 'Diagnóstico Estratégico Integral',
    desc: 'Análisis integral para identificar brechas críticas en estrategia, finanzas, estructura y gestión.',
    image: 'https://picsum.photos/seed/svc-diagnostico/700/460',
    featured: true,
  },
  {
    id: '02',
    title: 'Arquitectura de Modelo de Negocio',
    desc: 'Definición o rediseño del modelo para mejorar propuesta de valor, márgenes y escalabilidad.',
    image: 'https://picsum.photos/seed/svc-modelo/700/460',
    featured: false,
  },
  {
    id: '03',
    title: 'Programa de Acompañamiento Ejecutivo',
    desc: 'Acompañamiento estructurado con foco en implementación, seguimiento y resultados medibles.',
    image: 'https://picsum.photos/seed/svc-acompanamiento/700/460',
    featured: false,
  },
  {
    id: '04',
    title: 'Evaluación Estratégica de Proyectos e Inversiones',
    desc: 'Análisis financiero y estratégico para decidir inversiones con claridad y minimizar riesgos.',
    image: 'https://picsum.photos/seed/svc-proyectos/700/460',
    featured: false,
  },
  {
    id: '05',
    title: 'Estrategia y Estructura Comercial',
    desc: 'Estructuración de procesos comerciales, mejora de conversión y profesionalización de ventas.',
    image: 'https://picsum.photos/seed/svc-comercial/700/460',
    featured: false,
  },
  {
    id: '06',
    title: 'Diseño de Estrategia Corporativa',
    desc: 'Definición de objetivos, prioridades y hoja de ruta alineada a crecimiento sostenible.',
    image: 'https://picsum.photos/seed/svc-estrategia/700/460',
    featured: true,
  },
  {
    id: '07',
    title: 'Finanzas Estratégicas y Control de Gestión',
    desc: 'Orden financiero, estructura de costos, control presupuestario y análisis de rentabilidad.',
    image: 'https://picsum.photos/seed/svc-finanzas/700/460',
    featured: true,
  },
  {
    id: '08',
    title: 'Valorización y Creación de Valor Empresarial',
    desc: 'Determinación de valor para procesos de inversión, venta, incorporación de socios o decisiones estratégicas.',
    image: 'https://picsum.photos/seed/svc-valorizacion/700/460',
    featured: false,
  },
]

export default function Servicios() {
  return (
    <main>

      {/* ─── PAGE HEADER ─── */}
      <section className="bg-brand-black pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-brand-orange text-xs font-semibold tracking-[0.22em] uppercase">Lo que hacemos</span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mt-3 leading-tight">Nuestros Servicios</h1>
            <p className="text-brand-grey text-lg mt-4 max-w-xl leading-relaxed">
              Soluciones estratégicas y medibles para ordenar, estructurar y escalar tu empresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICIOS DESTACADOS ─── */}
      <section className="py-16 bg-[#f5f4f0] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-brand-orange text-xs font-semibold tracking-[0.22em] uppercase mb-6 block">Servicios punta de lanza</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
              {SERVICIOS.filter(s => s.featured).map((s) => (
                <div key={s.id} className="bg-white p-8">
                  <span className="text-brand-orange font-black text-xs tracking-[0.22em] uppercase">{s.id}</span>
                  <h3 className="font-black text-brand-black text-lg mt-3 mb-2 leading-tight">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── TODOS LOS SERVICIOS ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-black text-brand-black mb-12">Todos los servicios</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICIOS.map((s, i) => (
              <AnimatedSection key={s.id} delay={i * 0.06}>
                <div className={`group h-full flex flex-col overflow-hidden border transition-all duration-300 hover:shadow-lg ${
                  s.featured ? 'border-brand-orange/30' : 'border-gray-100 hover:border-brand-orange/30'
                }`}>

                  {/* Image */}
                  <div className="relative h-52 overflow-hidden shrink-0">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-brand-black/35 group-hover:bg-brand-black/20 transition-colors duration-400" />
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                    <span className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-black px-2.5 py-1 leading-none">
                      {s.id}
                    </span>
                    {s.featured && (
                      <span className="absolute top-4 right-4 bg-white text-brand-black text-[10px] font-black px-2 py-1 leading-none tracking-wide uppercase">
                        Destacado
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <h2 className="font-black text-brand-black text-xl leading-tight mb-3 group-hover:text-brand-orange transition-colors duration-300">
                      {s.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{s.desc}</p>
                    <CTAButton href={WA_LINK} variant="outline-dark" className="text-xs py-2.5 px-5 self-start">
                      Más información
                    </CTAButton>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://picsum.photos/seed/svc-cta/1600/600"
          alt=""
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-brand-black/88" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 max-w-2xl mx-auto leading-tight">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="text-brand-grey text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Agenda una reunión sin costo y te mostramos cómo podemos ayudarte a escalar con método y claridad.
            </p>
            <CTAButton href={WA_LINK}>Agenda una reunión sin costo</CTAButton>
          </AnimatedSection>
        </div>
      </section>

    </main>
  )
}
