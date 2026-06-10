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
      <section className="py-24 lg:py-32 bg-[#f5f4f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {SERVICIOS.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.06}>
                <div className="group h-full flex flex-col bg-white p-8 transition-all duration-300 hover:shadow-md">

                  {/* Icon row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-11 h-11 bg-brand-orange/10 shrink-0">
                      <s.icon className="w-5 h-5 text-brand-orange" strokeWidth={1.75} />
                    </div>
                    {s.featured && (
                      <span className="text-[10px] font-black tracking-widest uppercase text-brand-orange border border-brand-orange/50 px-2 py-0.5">
                        Destacado
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="font-black text-brand-black text-base leading-snug mb-3 group-hover:text-brand-orange transition-colors duration-300">
                    {s.title}
                  </h2>

                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{s.desc}</p>

                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                    className="self-start text-xs font-semibold text-brand-black tracking-wide uppercase border-b border-brand-black/30 pb-0.5 hover:text-brand-orange hover:border-brand-orange transition-colors duration-200">
                    Más información →
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
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
