import { Link } from 'react-router-dom'

export default function Logo({ inverted = false, size = 'md' }) {
  const dark   = inverted ? '#ffffff' : '#1d1d1b'
  const orange = '#e9740b'

  const s = {
    sm: { fs: '1.1rem',  sub: '0.38rem', i1: '0.38em', i2: '0.76em', mt: '0.4em'  },
    md: { fs: '1.45rem', sub: '0.48rem', i1: '0.4em',  i2: '0.8em',  mt: '0.45em' },
    lg: { fs: '2.1rem',  sub: '0.62rem', i1: '0.4em',  i2: '0.8em',  mt: '0.5em'  },
  }[size] || { fs: '1.45rem', sub: '0.48rem', i1: '0.4em', i2: '0.8em', mt: '0.45em' }

  const blockStyle = {
    fontFamily: "'Source Sans 3', sans-serif",
    fontWeight: 900,
    fontSize: s.fs,
    letterSpacing: '-0.03em',
    lineHeight: 0.9,
  }

  return (
    <Link to="/" aria-label="Acerca Consultores — Inicio" style={{ display: 'inline-block', userSelect: 'none', textDecoration: 'none' }}>
      <div style={{ lineHeight: 0.9 }}>
        <div style={blockStyle}>
          <div><span style={{ color: orange }}>A</span></div>
          <div style={{ paddingLeft: s.i1 }}>
            <span style={{ color: dark }}>CER</span>
          </div>
          <div style={{ paddingLeft: s.i2 }}>
            <span style={{ color: dark }}>C</span><span style={{ color: orange }}>A</span>
          </div>
        </div>
        <div style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontWeight: 300,
          fontSize: s.sub,
          letterSpacing: '0.22em',
          color: dark,
          opacity: 0.65,
          marginTop: s.mt,
          paddingLeft: '0.08em',
        }}>
          consultores
        </div>
      </div>
    </Link>
  )
}
