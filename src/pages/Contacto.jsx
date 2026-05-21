import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { MapPin, Phone, Mail, MessageCircle, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { WA_LINK, WA_PHONE, EMAIL, ADDRESS } from '../constants'

const FACTURACION = [
  'Menos de $5.000.000',
  'Entre $5.000.000 y $10.000.000',
  'Entre $10.000.000 y $20.000.000',
  'Entre $20.000.000 y $50.000.000',
  'Entre $50.000.000 y $100.000.000',
  'Entre $100.000.000 y $250.000.000',
  'Entre $250.000.000 y $400.000.000',
  '+$400.000.000',
]

const inputClass =
  'w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-300 bg-white'
const labelClass =
  'block text-xs font-semibold text-brand-black tracking-[0.15em] uppercase mb-2'

export default function Contacto() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 800))
    console.log('Formulario enviado:', data)
    reset()
  }

  return (
    <main>

      {/* ──────────────────── PAGE HEADER ──────────────────── */}
      <section className="bg-brand-black pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-brand-orange text-xs font-semibold tracking-[0.22em] uppercase">Hablemos</span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mt-3 leading-tight">Contacto</h1>
            <p className="text-brand-grey text-lg mt-4 max-w-xl leading-relaxed">
              Tu próximo gran paso comienza aquí. Cuéntanos sobre tu empresa y te ayudaremos a estructurar un plan estratégico a la medida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────── CONTENT ──────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* ── Form ── */}
            <AnimatedSection>
              <h2 className="text-2xl font-black text-brand-black mb-2">Solicita una consultoría gratuita</h2>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Llena el formulario y te contactaremos a la brevedad para agendar una consultoría gratuita.
              </p>

              {isSubmitSuccessful ? (
                <div className="text-center py-16 border border-gray-200">
                  <CheckCircle2 className="mx-auto text-brand-orange mb-4" size={48} strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-brand-black">¡Mensaje enviado!</h3>
                  <p className="text-gray-500 mt-2 text-sm">Te contactaremos a la brevedad.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="c-nombre" className={labelClass}>Nombre *</label>
                    <input id="c-nombre" type="text" placeholder="Tu nombre completo"
                      {...register('nombre', { required: 'Ingresa tu nombre' })}
                      className={inputClass}
                    />
                    {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="c-email" className={labelClass}>Email *</label>
                    <input id="c-email" type="email" placeholder="tu@email.com"
                      {...register('email', {
                        required: 'Ingresa tu email',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' },
                      })}
                      className={inputClass}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="c-telefono" className={labelClass}>Teléfono</label>
                    <input id="c-telefono" type="tel" placeholder="+56 9 XXXX XXXX"
                      {...register('telefono')}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="c-empresa" className={labelClass}>Empresa *</label>
                    <input id="c-empresa" type="text" placeholder="Nombre de tu empresa"
                      {...register('empresa', { required: 'Ingresa el nombre de tu empresa' })}
                      className={inputClass}
                    />
                    {errors.empresa && <p className="text-red-500 text-xs mt-1">{errors.empresa.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="c-facturacion" className={labelClass}>Facturación Mensual *</label>
                    <select id="c-facturacion"
                      {...register('facturacion', { required: 'Selecciona tu facturación mensual' })}
                      className={inputClass}
                    >
                      <option value="">Selecciona un rango</option>
                      {FACTURACION.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                    {errors.facturacion && <p className="text-red-500 text-xs mt-1">{errors.facturacion.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-orange text-white font-semibold py-4 text-xs tracking-[0.2em] uppercase hover:bg-brand-orange-lt transition-colors disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? 'Enviando...' : 'Solicitar consultoría gratuita'}
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* ── Contact info ── */}
            <AnimatedSection delay={0.15}>
              <h2 className="text-2xl font-black text-brand-black mb-8">Información de contacto</h2>

              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-orange flex items-center justify-center shrink-0">
                    <MapPin size={17} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-black text-sm mb-1">Dirección</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-orange flex items-center justify-center shrink-0">
                    <Phone size={17} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-black text-sm mb-1">WhatsApp</p>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 text-sm hover:text-brand-orange transition-colors"
                    >
                      {WA_PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-orange flex items-center justify-center shrink-0">
                    <Mail size={17} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-black text-sm mb-1">Email</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-gray-500 text-sm hover:text-brand-orange transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA card */}
              <div className="mt-12 bg-brand-black p-8">
                <p className="text-white font-black text-xl mb-3 leading-tight">
                  ¿Prefieres hablar directamente?
                </p>
                <p className="text-brand-grey text-sm mb-6 leading-relaxed">
                  Escríbenos por WhatsApp y agendamos una reunión en minutos.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp"
                  className="inline-flex items-center gap-3 bg-brand-orange text-white font-semibold text-sm px-6 py-3 hover:bg-brand-orange-lt transition-colors"
                >
                  <MessageCircle size={17} />
                  Escribir por WhatsApp
                </a>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

    </main>
  )
}
