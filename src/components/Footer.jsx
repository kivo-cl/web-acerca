import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Linkedin } from 'lucide-react'
import Logo from './Logo'
import { WA_LINK, WA_PHONE, EMAIL, ADDRESS } from '../constants'

const NAV_LINKS = [
  { to: '/',              label: 'Inicio'         },
  { to: '/servicios',     label: 'Servicios'      },
  { to: '/quienes-somos', label: 'Quiénes Somos'  },
  { to: '/contacto',      label: 'Contacto'        },
]

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <Logo inverted size="sm" />
            <p className="mt-6 text-brand-grey text-sm leading-relaxed max-w-xs">
              Acerca Consultores ayuda a las Pymes a ordenar, planificar y optimizar su gestión para un crecimiento sostenible y rentable.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram de Acerca Consultores"
                className="w-8 h-8 flex items-center justify-center text-brand-grey hover:text-brand-orange transition-colors">
                <Instagram size={17} />
              </a>
              <a href="#" aria-label="LinkedIn de Acerca Consultores"
                className="w-8 h-8 flex items-center justify-center text-brand-grey hover:text-brand-orange transition-colors">
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-6">Navegación</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-brand-grey hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-brand-grey">
                <MapPin size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-grey">
                <Phone size={14} className="shrink-0 text-brand-orange" />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="hover:text-white transition-colors">{WA_PHONE}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-grey">
                <Mail size={14} className="shrink-0 text-brand-orange" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-grey text-xs">
            © Copyright Acerca Consultores 2025. Todos los derechos reservados.
          </p>
          <p className="text-brand-grey text-xs">
            <a href="https://acercaconsultores.cl" className="hover:text-white transition-colors">
              acercaconsultores.cl
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
