import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import CTAButton from '../components/CTAButton'

/* Placeholder photos — replace with real team photos */
const SOCIOS = [
  {
    name: 'Nicolás Chocaír Salas',
    role: 'Socio / Consultor principal',
    specialty: 'Ingeniero Comercial Universidad Diego Portales | Diplomado en Gestión y Planificación Estratégica',
    bio: 'Consultoría en gestión de empresas, desde el desarrollo, medición e implementación de diferentes modelos de negocio, identificando y potenciando la propuesta de valor de cada uno en búsqueda de ventajas competitivas, cuidando la rentabilidad a través de la administración de los recursos.',
    photo: '/images/equipo-nicolas.png',
  },
  {
    name: 'Sebastián Ortiz Ipinza',
    role: 'Socio / Consultor',
    specialty: 'Ingeniero Comercial Universidad Diego Portales | Curso BI con Python',
    bio: 'Amplios conocimientos contables, financieros y en el desarrollo e implementación de herramientas de control de gestión en medianas y grandes empresas chilenas y extranjeras, con especial énfasis en obtener y procesar información que permita una gestión del negocio basada en la medición de resultados.',
    photo: '/images/equipo-sebastian.png',
  },
]

const DANIEL = {
  name: 'Daniel Alvarado Landázuri',
  role: 'Abogado',
  specialty: 'Derecho Corporativo, Laboral y Compliance',
  bio: 'Amplia experiencia en asesoría a empresas del sector público y privado, nacionales y extranjeras. Ha liderado juicios laborales, civiles y arbitrales, así como negociaciones extrajudiciales de alto impacto. Su enfoque en prevención de riesgos y cumplimiento normativo le permite guiar a empresas en la toma de decisiones estratégicas. Además, su experiencia como emprendedor e inversionista le otorga una visión integral del mundo empresarial.',
  photo: '/images/equipo-daniel.jpg',
}

const PILARES = ['Clara', 'Estructurada', 'Cercana', 'Con Método']

export default function QuienesSomos() {
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
            <span className="text-brand-orange text-xs font-semibold tracking-[0.22em] uppercase">La consultora</span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mt-3 leading-tight">Quiénes Somos</h1>
            <p className="text-brand-grey text-lg mt-4 max-w-2xl leading-relaxed">
              Somos un equipo apasionado por el orden y la estrategia, dedicado a acompañar a medianas y grandes empresas en su proceso de crecimiento con método, claridad y resultados medibles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CULTURA ─── */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

          {/* Image */}
          <motion.div
            className="relative overflow-hidden min-h-[360px] lg:min-h-0 group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img
              src="https://picsum.photos/seed/qs-cultura/900/700"
              alt="Cultura Acerca Consultores"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-brand-black/25" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-brand-orange" />
          </motion.div>

          {/* Text */}
          <div className="bg-[#f5f4f0] flex items-center px-10 lg:px-16 xl:px-20 py-16">
            <AnimatedSection delay={0.15}>
              <span className="text-brand-orange text-xs font-semibold tracking-[0.22em] uppercase">Nuestra cultura</span>
              <h2 className="text-4xl sm:text-5xl font-black text-brand-black mt-3 mb-6 leading-tight">
                Trabajamos para ordenar, estructurar y hacer crecer.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Para nosotros la cercanía es consecuencia de la confianza, y la confianza se construye con responsabilidad, planificación, orden y seguimiento. Acompañamos a medianas y grandes empresas con método y criterio estratégico, siendo socios reales de sus procesos de crecimiento.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-10">
                {PILARES.map((pilar, i) => (
                  <motion.div
                    key={pilar}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.1, duration: 0.4 }}
                    className="bg-brand-black text-white font-black text-base px-5 py-5 flex items-center justify-center text-center"
                  >
                    {pilar}
                  </motion.div>
                ))}
              </div>
              <CTAButton>Agenda una reunión sin costo</CTAButton>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── EQUIPO ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Socios */}
          <AnimatedSection>
            <div className="mb-14">
              <span className="text-brand-orange text-xs font-semibold tracking-[0.22em] uppercase">Socios fundadores</span>
              <h2 className="text-4xl sm:text-5xl font-black text-brand-black mt-3 leading-tight max-w-lg">El Equipo</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-14">
            {SOCIOS.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 0.1}>
                <div className="h-full flex flex-col overflow-hidden bg-white border border-gray-100 shadow-sm">
                  <div className="relative aspect-[3/4] overflow-hidden shrink-0">
                    <img
                      src={m.photo}
                      alt={`Foto de ${m.name}`}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-black text-brand-black text-xl leading-tight mb-1">{m.name}</h3>
                    <p className="text-brand-orange text-xs font-semibold tracking-wide uppercase mb-3">{m.role}</p>
                    <p className="text-brand-grey text-xs mb-4 leading-relaxed">{m.specialty}</p>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{m.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Daniel */}
          <AnimatedSection delay={0.1}>
            <div className="flex justify-center">
              <div className="w-full max-w-[280px] flex flex-col overflow-hidden bg-white border border-gray-100 shadow-sm">
                <div className="relative aspect-[3/4] overflow-hidden shrink-0">
                  <img
                    src={DANIEL.photo}
                    alt={`Foto de ${DANIEL.name}`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange" />
                </div>
                <div className="p-5 flex flex-col">
                  <h3 className="font-black text-brand-black text-base leading-tight mb-1">{DANIEL.name}</h3>
                  <p className="text-brand-orange text-xs font-semibold tracking-wide uppercase mb-2">{DANIEL.role}</p>
                  <p className="text-brand-grey text-xs mb-3 leading-relaxed">{DANIEL.specialty}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{DANIEL.bio}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

    </main>
  )
}
