import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import CTAButton from '../components/CTAButton'
import { WA_LINK } from '../constants'

const SERVICIOS = [
  {
    id: '01',
    title: 'Diagnóstico de Situación Empresarial',
    desc: 'Análisis integral de la empresa en 7 áreas clave para detectar problemáticas y oportunidades de mejora. Se identifican brechas en la gestión y se establecen prioridades para la toma de decisiones estratégicas.',
    image: 'https://picsum.photos/seed/svc-diagnostico/700/460',
  },
  {
    id: '02',
    title: 'Consultoría de Procesos',
    desc: 'Optimizamos la eficiencia operativa de las empresas mediante el análisis y rediseño de procesos clave. Implementamos mejoras en flujos de trabajo, gestión de recursos e indicadores de desempeño para aumentar la productividad y reducir costos.',
    image: 'https://picsum.photos/seed/svc-procesos/700/460',
  },
  {
    id: '03',
    title: 'Asesoría Estratégica (Post Diagnóstico)',
    desc: 'Acompañamos a los empresarios en la implementación de mejoras detectadas en el diagnóstico, estableciendo objetivos estratégicos, diseñando planes de acción y asegurando su ejecución con un enfoque práctico y medible.',
    image: 'https://picsum.photos/seed/svc-asesoria/700/460',
  },
  {
    id: '04',
    title: 'Desarrollo y Análisis de Modelos de Negocio',
    desc: 'Diseñamos, evaluamos y optimizamos modelos de negocio para asegurar su viabilidad y escalabilidad. Aplicamos metodologías como Business Model Canvas para estructurar propuestas de valor sólidas y rentables.',
    image: 'https://picsum.photos/seed/svc-modelos/700/460',
  },
  {
    id: '05',
    title: 'Evaluación de Proyectos',
    desc: 'Analizamos la rentabilidad y factibilidad de iniciativas empresariales mediante estudios financieros, evaluación de costos, proyección de ingresos y cálculo de indicadores clave como VAN y TIR para la toma de decisiones informadas.',
    image: 'https://picsum.photos/seed/svc-evaluacion/700/460',
  },
  {
    id: '06',
    title: 'Capacitación en Venta Consultiva',
    desc: 'Entrenamos equipos comerciales en técnicas de venta consultiva, enfocándonos en la identificación de necesidades del cliente, argumentación de valor y cierre efectivo. Buscamos mejorar las tasas de conversión y fidelización a través de un enfoque estructurado y estratégico.',
    image: 'https://picsum.photos/seed/svc-ventas/700/460',
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
              Soluciones prácticas y medibles para ordenar, estructurar y hacer crecer tu empresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CARDS ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICIOS.map((s, i) => (
              <AnimatedSection key={s.id} delay={i * 0.08}>
                <div className="group h-full flex flex-col overflow-hidden border border-gray-100 hover:border-brand-orange/30 hover:shadow-lg transition-all duration-400">

                  {/* Image */}
                  <div className="relative h-52 overflow-hidden shrink-0">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.06]"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-brand-black/35 group-hover:bg-brand-black/20 transition-colors duration-400" />
                    {/* Orange line at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                    {/* Number badge */}
                    <span className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-black px-2.5 py-1 leading-none">
                      {s.id}
                    </span>
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
        <div className="absolute inset-0 bg-brand-black/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 max-w-2xl mx-auto leading-tight">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="text-brand-grey text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Agenda una reunión gratuita y te mostraremos cómo podemos ayudarte a crecer con método y claridad.
            </p>
            <CTAButton href={WA_LINK}>Solicita una reunión</CTAButton>
          </AnimatedSection>
        </div>
      </section>

    </main>
  )
}
