import { motion } from 'framer-motion'
import { Search, Layers, Users, BarChart2, TrendingUp, Compass, PieChart, Gem } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import CTAButton from '../components/CTAButton'
import { WA_LINK } from '../constants'

const SERVICIOS = [
  {
    title: 'Diagnóstico Estratégico Integral',
    desc: 'Análisis integral para identificar brechas críticas en estrategia, finanzas, estructura y gestión.',
    icon: Search,
    featured: true,
  },
  {
    title: 'Arquitectura de Modelo de Negocio',
    desc: 'Definición o rediseño del modelo para mejorar propuesta de valor, márgenes y escalabilidad.',
    icon: Layers,
    featured: false,
  },
  {
    title: 'Programa de Acompañamiento Ejecutivo',
    desc: 'Acompañamiento estructurado con foco en implementación, seguimiento y resultados medibles.',
    icon: Users,
    featured: false,
  },
  {
    title: 'Evaluación Estratégica de Proyectos e Inversiones',
    desc: 'Análisis financiero y estratégico para decidir inversiones con claridad y minimizar riesgos.',
    icon: BarChart2,
    featured: false,
  },
  {
    title: 'Estrategia y Estructura Comercial',
    desc: 'Estructuración de procesos comerciales, mejora de conversión y profesionalización de ventas.',
    icon: TrendingUp,
    featured: false,
  },
  {
    title: 'Diseño de Estrategia Corporativa',
    desc: 'Definición de objetivos, prioridades y hoja de ruta alineada a crecimiento sostenible.',
    icon: Compass,
    featured: true,
  },
  {
    title: 'Finanzas Estratégicas y Control de Gestión',
    desc: 'Orden financiero, estructura de costos, control presupuestario y análisis de rentabilidad.',
    icon: PieChart,
    featured: true,
  },
  {
    title: 'Valorización y Creación de Valor Empresarial',
    desc: 'Determinación de valor para procesos de inversión, venta, incorporación de socios o decisiones estratégicas.',
    icon: Gem,
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

      {/* ─── TODOS LOS SERVICIOS ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-black text-brand-black mb-12">Todos los servicios</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICIOS.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.06}>
                <div className={`group h-full flex flex-col overflow-hidden border transition-all duration-300 hover:shadow-lg ${
                  s.featured ? 'border-brand-orange/30' : 'border-gray-100 hover:border-brand-orange/30'
                }`}>

                  {/* Icon header */}
                  <div className="relative bg-brand-black px-8 py-8 flex items-center shrink-0">
                    <s.icon className="w-10 h-10 text-brand-orange" strokeWidth={1.5} />
                    {s.featured && (
                      <span className="absolute top-4 right-4 bg-brand-orange text-white text-[10px] font-black px-2 py-1 leading-none tracking-wide uppercase">
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
