import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import CTAButton from '../components/CTAButton'
import { WA_LINK } from '../constants'

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const PROBLEMATICAS = [
  { id: '01', title: 'Estrategia', desc: 'Falta de una planificación clara y objetivos estratégicos definidos. Muchas empresas operan sin una visión a largo plazo, lo que dificulta su crecimiento y adaptación a cambios del mercado.' },
  { id: '02', title: 'Gobierno Corporativo', desc: 'Ausencia de estructuras de liderazgo y toma de decisiones. La falta de procesos formales y roles bien definidos genera desorden, conflictos y dificulta el crecimiento sostenible.' },
  { id: '03', title: 'Propuesta de Valor y Clientes', desc: 'No hay una diferenciación clara respecto a la competencia. Muchas pymes desconocen su verdadero valor agregado y no logran conectar con el cliente ideal, perdiendo oportunidades de fidelización y crecimiento.' },
  { id: '04', title: 'Gestión Comercial y Marketing', desc: 'Estrategias comerciales poco estructuradas y sin medición de resultados. La falta de planificación y herramientas adecuadas hace que las empresas dependan solo de la venta por recomendación y no logren escalar.' },
  { id: '05', title: 'Gestión Financiera - Contable', desc: 'Falta de control sobre flujo de caja, costos y rentabilidad. Muchas pymes operan sin reportes financieros claros, lo que impide tomar decisiones informadas y sostenibles en el tiempo.' },
  { id: '06', title: 'Gestión de Operaciones', desc: 'Ineficiencia en procesos productivos, control de inventario y distribución. La falta de planificación y optimización genera desperdicios, costos innecesarios y afecta la capacidad de respuesta ante la demanda.' },
  { id: '07', title: 'Gestión de Personas', desc: 'Desorden en la estructura organizacional, falta de liderazgo y baja retención de talento. Muchas pymes no cuentan con procesos de selección, evaluación y desarrollo de equipos, lo que afecta la productividad y el compromiso de los colaboradores.' },
]

const BENEFICIOS = [
  'Educación Empresarial',
  'Visión externa profesional',
  'Metodología Comprobable',
  'Digitalización del Negocio',
  'Reportes Comerciales y Financieros para la toma de decisiones',
  'Orden y claridad de tareas',
  'Mejoras en la gestión empresarial',
]

const TESTIMONIOS = [
  {
    name: 'Nobuyuki Noda',
    company: 'Gerente General · Grupo Kintaro',
    photo: 'https://acercaconsultores.cl/wp-content/uploads/2025/04/7.png',
    initials: 'NN',
    quote: 'Han pasado 8 años desde que comenzamos este proyecto gastronómico y llegó un momento en que nos dimos cuenta que necesitábamos avanzar estratégicamente. Acerca Consultores nos han brindado las herramientas necesarias para seguir creciendo y trabajando colaborativamente para lograr nuestros objetivos. El profesionalismo y empatía están presentes en todas las intervenciones que Acerca realiza.',
  },
  {
    name: 'Magdalena Lisboa',
    company: 'Maderas Regnans',
    photo: 'https://acercaconsultores.cl/wp-content/uploads/2025/04/3.png',
    initials: 'ML',
    quote: 'La experiencia con Nico y Seba de Acerca Consultores ha sido sumamente enriquecedora para nuestra empresa. Tanto el diagnóstico como la consultoría nos han permitido identificar con precisión tanto las falencias como las oportunidades de mejora en nuestros procesos productivos y administrativos.',
  },
  {
    name: 'Alejandro Castillo',
    company: 'Gerente General Bozenlight',
    photo: 'https://acercaconsultores.cl/wp-content/uploads/2025/04/1.png',
    initials: 'AC',
    quote: 'El desarrollo del organigrama me aclaró muchísimo las funciones de cada trabajador, sus proyecciones y las necesidades que tenemos de incorporar más gente.',
  },
  {
    name: 'Danitza Irahola',
    company: 'Fundadora Braver Beauty',
    photo: 'https://acercaconsultores.cl/wp-content/uploads/2025/04/2.png',
    initials: 'DI',
    quote: 'Me ayudaron a ordenar mis ideas y poder de esta manera construir sobre cimientos sólidos.',
  },
  {
    name: 'María Ester Regueiro, Sebastián Meyer y Carlos Meyer',
    company: 'CAMEDA',
    photo: 'https://acercaconsultores.cl/wp-content/uploads/2025/04/5.png',
    initials: 'ME',
    quote: 'Llevamos ya dos años trabajando codo a codo con Acerca, y ha sido un verdadero acierto. Destacamos su profesionalismo y cercanía. En nuestro caso, su asesoría llegó en el momento justo, cuando incorporamos una nueva línea de negocios, siendo clave en la planificación y puesta en marcha de su funcionamiento.',
  },
  {
    name: 'Constanza Orrego',
    company: 'Casa Bloom',
    photo: 'https://acercaconsultores.cl/wp-content/uploads/2025/04/6.png',
    initials: 'CO',
    quote: 'Queremos agradecer enormemente a Nico y Seba de Acerca por la ayuda que nos entregaron con nuestro proyecto Casa Bloom!. Su orientación no solo nos ayudó a entender mejor el negocio y manejar los números, sino que también nos dieron el empuje necesario para tomar acción.',
  },
  {
    name: 'Jorge Böher',
    company: 'Director y Cofundador de Centro Amülen',
    photo: 'https://acercaconsultores.cl/wp-content/uploads/2025/04/4.png',
    initials: 'JB',
    quote: 'Nuestro emprendimiento tiene 10 años de vida. Contratamos los servicios de Acerca consultores un año, y en ese año crecimos como empresa más que en todos los anteriores.',
  },
]

const LOGOS = [
  { src: 'https://cotiza.acercaconsultores.cl/images/logo-regnans.png',  alt: 'Maderas Regnans'   },
  { src: 'https://cotiza.acercaconsultores.cl/images/logo-outlet.png',   alt: 'Outlet de Puertas' },
  { src: 'https://cotiza.acercaconsultores.cl/images/logo-cimalat.png',  alt: 'Cimalat'           },
  { src: 'https://cotiza.acercaconsultores.cl/images/logo-bigboba.png',  alt: 'Big Boba'          },
  { src: 'https://cotiza.acercaconsultores.cl/images/logo-ramen.png',    alt: 'Ramen'             },
]

const FACTURACION = [
  'Menos de $5.000.000', 'Entre $5.000.000 y $10.000.000',
  'Entre $10.000.000 y $20.000.000', 'Entre $20.000.000 y $50.000.000',
  'Entre $50.000.000 y $100.000.000', 'Entre $100.000.000 y $250.000.000',
  'Entre $250.000.000 y $400.000.000', '+$400.000.000',
]

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function StatCounter({ value, label, duration = 2000 }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const [count, setCount]   = useState(0)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.5 },
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!active) return
    const total = Math.round(duration / (1000 / 60))
    let frame = 0
    const id = setInterval(() => {
      frame++
      const eased = 1 - Math.pow(1 - frame / total, 3)
      setCount(Math.min(Math.round(value * eased), value))
      if (frame >= total) clearInterval(id)
    }, 1000 / 60)
    return () => clearInterval(id)
  }, [active, value, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="font-black text-brand-orange tabular-nums leading-none" style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)' }}>
        +{count.toLocaleString('es-CL')}
      </div>
      <div className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase mt-4">{label}</div>
    </div>
  )
}

function LogoSlider() {
  const items = [...LOGOS, ...LOGOS]
  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
      <div
        className="flex items-center"
        style={{ width: 'max-content', animation: 'marquee 22s linear infinite' }}
      >
        {items.map((logo, i) => (
          <div key={i} className="flex items-center justify-center px-14">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-9 max-w-[130px] object-contain grayscale opacity-40 hover:opacity-70 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

function TestimonialCard({ t }) {
  return (
    <div className="min-w-[360px] max-w-[360px] h-[340px] border border-gray-200 p-8 flex flex-col bg-white hover:border-brand-orange/40 hover:shadow-md transition-all duration-300 shrink-0">
      <span className="text-3xl text-brand-orange font-black leading-none mb-4 select-none">"</span>
      <p className="text-gray-600 text-sm leading-relaxed flex-1 italic"
        style={{ display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {t.quote}
      </p>
      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3 shrink-0">
        {t.photo ? (
          <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full object-cover object-top shrink-0 border border-gray-200" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white font-black text-xs shrink-0">
            {t.initials}
          </div>
        )}
        <div className="min-w-0">
          <p className="font-bold text-brand-black text-sm leading-tight truncate">{t.name}</p>
          {t.company && <p className="text-brand-orange text-xs font-semibold mt-0.5 truncate">{t.company}</p>}
        </div>
      </div>
    </div>
  )
}

function TestimoniosSlider() {
  const [paused, setPaused] = useState(false)
  const items = [...TESTIMONIOS, ...TESTIMONIOS]

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-5"
        style={{
          width: 'max-content',
          animation: 'marquee 52s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {items.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  )
}

/* ─── Form helpers ─────────────────────────────────────────────────────────── */
const inputClass = 'w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-300 bg-white'
const labelClass = 'block text-xs font-semibold text-brand-black tracking-[0.15em] uppercase mb-2'

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function Home() {
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const heroImgY = useTransform(scrollY, [0, 700], [0, 90])

  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm()
  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 800))
    console.log('Formulario:', data)
    reset()
  }

  return (
    <main>

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section ref={heroRef} className="relative bg-brand-black min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="absolute right-0 top-0 h-full w-[45%] hidden lg:block overflow-hidden">
          <motion.img
            src="https://picsum.photos/seed/acerca-hero/900/1100"
            alt=""
            className="w-full h-full object-cover grayscale opacity-45"
            style={{ y: heroImgY }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/50 to-transparent" />
          <div className="absolute inset-0 bg-brand-orange/8" />
          <div className="absolute left-0 top-12 bottom-12 w-px bg-brand-orange/25" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-24">
          <div className="lg:max-w-[56%]">
            <motion.span
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-block border border-brand-orange text-brand-orange text-xs font-semibold tracking-[0.22em] uppercase px-4 py-1.5 mb-10"
            >
              Consultoría Empresarial
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.93] tracking-tight mb-8"
            >
              Más que consultores, somos el equipo que impulsa tu empresa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-brand-grey text-xl sm:text-2xl font-light max-w-xl mb-12"
            >
              Transformamos tu negocio en una empresa ordenada, rentable y sostenible.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <CTAButton>Solicita una reunión</CTAButton>
              <a href="/servicios"
                className="inline-flex items-center gap-2 text-white/70 text-sm font-semibold hover:text-white transition-colors border border-white/20 px-7 py-3.5 hover:border-white/40">
                Ver servicios
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-px h-10 bg-white" />
        </motion.div>
      </section>

      {/* ═══════════════════════ STATS ═══════════════════════ */}
      <section className="py-20 lg:py-24 bg-brand-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            <StatCounter value={50}   label="Empresas"             duration={1600} />
            <StatCounter value={1200} label="Horas de Consultoría" duration={2200} />
            <StatCounter value={75}   label="Procesos Creados"      duration={1800} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════ LOGO SLIDER ═══════════════════════ */}
      <LogoSlider />

      {/* ═══════════════════════ FEATURE SECTION ═══════════════════════ */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">
          <motion.div
            className="relative overflow-hidden min-h-[360px] lg:min-h-0 group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img src="https://picsum.photos/seed/acerca-feature/1000/700"
              alt="Equipo Acerca Consultores"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-brand-black/30" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-brand-orange" />
          </motion.div>

          <div className="bg-[#f5f4f0] flex items-center px-10 lg:px-16 xl:px-20 py-16">
            <AnimatedSection delay={0.15}>
              <span className="text-brand-orange text-xs font-semibold tracking-[0.22em] uppercase">Acerca Consultores</span>
              <h2 className="text-4xl sm:text-5xl font-black text-brand-black mt-3 mb-6 leading-tight">
                Somos el partner estratégico de tu empresa
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Somos un equipo apasionado por el orden y la planificación, dedicado a implementar herramientas de gestión para profesionalizar los negocios de nuestros clientes.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-10">
                Acercamos personas, empresas, procesos y decisiones. Reducimos la distancia entre la estrategia y la operación.
              </p>
              <CTAButton>Conoce al equipo</CTAButton>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PROBLEMÁTICAS ═══════════════════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-brand-orange text-xs font-semibold tracking-[0.22em] uppercase">Diagnóstico</span>
            <h2 className="text-4xl sm:text-5xl font-black text-brand-black mt-3 mb-16 max-w-xl leading-tight">
              Problemáticas que resolvemos
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {PROBLEMATICAS.map((p, i) => (
              <AnimatedSection key={p.id} delay={i * 0.06}>
                <div className="flex gap-6 py-9 border-b border-gray-100 group">
                  <span className="text-[2.8rem] font-black text-gray-100 group-hover:text-brand-orange/20 transition-colors leading-none min-w-[3rem] pt-0.5 select-none">
                    {p.id}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold text-brand-black text-lg mb-2">{p.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ POR QUÉ ELEGIRNOS ═══════════════════════ */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">
          <div className="bg-brand-black flex items-center px-10 lg:px-16 xl:px-20 py-20 order-2 lg:order-1">
            <div className="w-full">
              <AnimatedSection>
                <span className="text-brand-orange text-xs font-semibold tracking-[0.22em] uppercase">Por qué elegirnos</span>
                <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-6 leading-tight">
                  Somos la opción para hacer crecer tu empresa
                </h2>
                <p className="text-brand-grey text-lg leading-relaxed mb-10">
                  Tu negocio necesita más que intuición: necesita estrategia, planificación y control. En Acerca Consultores, te ayudamos a tomar decisiones informadas, optimizar recursos y fortalecer la rentabilidad de tu empresa con un enfoque profesional y cercano.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="text-white/35 text-xs font-semibold tracking-[0.22em] uppercase mb-7">Con nuestro trabajo obtendrás:</p>
                <ul className="space-y-4 mb-10">
                  {BENEFICIOS.map((b, i) => (
                    <motion.li key={b}
                      initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.07 + 0.1, duration: 0.4 }}
                      className="flex items-start gap-4">
                      <span className="text-brand-orange font-black text-xs min-w-[2rem] pt-1 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-white text-base font-medium leading-snug">{b}</span>
                    </motion.li>
                  ))}
                </ul>
                <CTAButton>Solicita una reunión</CTAButton>
              </AnimatedSection>
            </div>
          </div>

          <motion.div
            className="relative overflow-hidden min-h-[400px] lg:min-h-0 group order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img src="https://picsum.photos/seed/acerca-porque/900/1000"
              alt="Consultoría estratégica"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-brand-black/40" />
            <div className="absolute top-0 left-0 w-20 h-20 bg-brand-orange" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ TESTIMONIOS — ENDLESS SLIDER ═══════════════════════ */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <AnimatedSection>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <span className="text-brand-orange text-xs font-semibold tracking-[0.22em] uppercase">Testimonios</span>
                <h2 className="text-4xl sm:text-5xl font-black text-brand-black mt-3">Lo que dicen nuestros clientes</h2>
                <p className="text-gray-400 text-base mt-2">
                  Ellos confiaron en nuestro talento; nosotros impulsamos su crecimiento.
                </p>
              </div>
              <p className="text-brand-grey text-xs italic hidden sm:block">Pasa el cursor para pausar</p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1}>
          <TestimoniosSlider />
        </AnimatedSection>
      </section>

      {/* ═══════════════════════ CTA FINAL ═══════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <img src="https://picsum.photos/seed/acerca-cta/1600/700" alt=""
          className="absolute inset-0 w-full h-full object-cover grayscale" />
        <div className="absolute inset-0 bg-brand-orange/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight max-w-3xl mx-auto mb-10">
              Da el primer paso hacia una estructura organizacional más eficiente y rentable. Agenda una reunión hoy.
            </h2>
            <CTAButton variant="outline" href={WA_LINK}>Agenda una reunión</CTAButton>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════ FORMULARIO ═══════════════════════ */}
      <section id="formulario" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="text-brand-orange text-xs font-semibold tracking-[0.22em] uppercase">Consultoría gratuita</span>
                <h2 className="text-4xl sm:text-5xl font-black text-brand-black mt-3 mb-5 leading-tight">
                  Tu próximo gran paso comienza aquí
                </h2>
                <p className="text-gray-500 text-base leading-relaxed">
                  Cuéntanos sobre tu empresa, agenda una reunión y te ayudaremos a estructurar un plan estratégico a la medida. Llena el formulario y te contactaremos a la brevedad para agendar una consultoría gratuita.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              {isSubmitSuccessful ? (
                <div className="text-center py-16 border border-gray-200">
                  <CheckCircle2 className="mx-auto text-brand-orange mb-4" size={48} strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-brand-black">¡Mensaje enviado!</h3>
                  <p className="text-gray-500 mt-2 text-sm">Te contactaremos a la brevedad.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="h-nombre" className={labelClass}>Nombre *</label>
                    <input id="h-nombre" type="text" placeholder="Tu nombre completo"
                      {...register('nombre', { required: 'Ingresa tu nombre' })} className={inputClass} />
                    {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="h-email" className={labelClass}>Email *</label>
                    <input id="h-email" type="email" placeholder="tu@email.com"
                      {...register('email', { required: 'Ingresa tu email', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' } })}
                      className={inputClass} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="h-telefono" className={labelClass}>Teléfono</label>
                    <input id="h-telefono" type="tel" placeholder="+56 9 XXXX XXXX"
                      {...register('telefono')} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="h-empresa" className={labelClass}>Empresa *</label>
                    <input id="h-empresa" type="text" placeholder="Nombre de tu empresa"
                      {...register('empresa', { required: 'Ingresa el nombre de tu empresa' })} className={inputClass} />
                    {errors.empresa && <p className="text-red-500 text-xs mt-1">{errors.empresa.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="h-facturacion" className={labelClass}>Facturación Mensual *</label>
                    <select id="h-facturacion"
                      {...register('facturacion', { required: 'Selecciona tu facturación mensual' })}
                      className={inputClass}>
                      <option value="">Selecciona un rango</option>
                      {FACTURACION.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                    {errors.facturacion && <p className="text-red-500 text-xs mt-1">{errors.facturacion.message}</p>}
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="w-full bg-brand-orange text-white font-semibold py-4 text-xs tracking-[0.2em] uppercase hover:bg-brand-orange-lt transition-colors disabled:opacity-70 cursor-pointer">
                    {isSubmitting ? 'Enviando...' : 'Solicitar consultoría gratuita'}
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

    </main>
  )
}
