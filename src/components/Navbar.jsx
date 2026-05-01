import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { WA_LINK } from '../constants'

const NAV_LINKS = [
  { to: '/',              label: 'Inicio'          },
  { to: '/servicios',     label: 'Servicios'       },
  { to: '/quienes-somos', label: 'Quiénes Somos'  },
  { to: '/contacto',      label: 'Contacto'        },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname }          = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-black shadow-xl' : 'bg-brand-black/96 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">

        <Link to="/" aria-label="Inicio">
          <img src="/images/logo.png" alt="Acerca Consultores" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-semibold transition-colors ${
                pathname === to ? 'text-brand-orange' : 'text-white hover:text-brand-orange'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar reunión por WhatsApp"
            className="bg-brand-orange text-white text-sm font-semibold px-5 py-2.5 hover:bg-brand-orange-lt transition-colors"
          >
            Solicita una reunión
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-brand-black border-t border-white/10"
          >
            <nav className="px-6 py-4 flex flex-col" aria-label="Menú móvil">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`py-3.5 font-semibold border-b border-white/10 text-sm ${
                    pathname === to ? 'text-brand-orange' : 'text-white'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-brand-orange text-white text-center font-semibold py-3 text-sm"
              >
                Solicita una reunión
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
