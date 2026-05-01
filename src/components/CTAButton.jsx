import { WA_LINK } from '../constants'

export default function CTAButton({ href, children, variant = 'primary', className = '' }) {
  const link = href || WA_LINK
  const base = 'inline-flex items-center gap-2 font-semibold text-sm tracking-wide px-7 py-3.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2'
  const variants = {
    'primary':      'bg-brand-orange text-white hover:bg-brand-orange-lt',
    'outline':      'border-2 border-white text-white hover:bg-white hover:text-brand-black',
    'outline-dark': 'border border-brand-black text-brand-black hover:bg-brand-black hover:text-white',
  }
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${children} — WhatsApp`}
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
    >
      {children}
    </a>
  )
}
