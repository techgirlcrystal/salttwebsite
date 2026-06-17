import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const TABS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'News', to: '/news' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'Events', to: '/events' },
  { label: 'Connect', to: '/connect' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `font-head uppercase tracking-widest text-sm transition-colors ${
      isActive ? 'text-saltred' : 'text-navy/70 hover:text-navy'
    }`

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-navy/10 shadow-sm">
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1" onClick={() => setOpen(false)}>
            <span className="font-head font-bold text-2xl tracking-widest text-navy">
              SAL<span className="text-saltred">TT</span>
            </span>
            <span className="font-head text-2xl tracking-widest text-navy/40 hidden sm:inline">
              NETWORK
            </span>
          </Link>

          {/* Desktop tabs */}
          <div className="hidden md:flex items-center gap-7">
            {TABS.map((t) => (
              <NavLink key={t.to} to={t.to} end={t.to === '/'} className={linkClass}>
                {t.label}
              </NavLink>
            ))}
          </div>

          {/* Support button + mobile toggle */}
          <div className="flex items-center gap-3">
            <a href="#support" className="btn-red hidden sm:inline-flex !px-5 !py-2.5">
              Support SALTT
            </a>
            <button
              aria-label="Toggle menu"
              className="md:hidden text-navy p-2"
              onClick={() => setOpen((o) => !o)}
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-6 bg-navy transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-6 bg-navy transition ${open ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-6 bg-navy transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-navy/10 bg-cream px-5 pb-6 pt-3">
          <div className="flex flex-col gap-1">
            {TABS.map((t) => (
              <NavLink
                key={t.to}
                to={t.to}
                end={t.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-head uppercase tracking-widest text-base py-2.5 border-b border-navy/10 ${
                    isActive ? 'text-saltred' : 'text-navy/80'
                  }`
                }
              >
                {t.label}
              </NavLink>
            ))}
            <a href="#support" className="btn-red mt-4 w-full" onClick={() => setOpen(false)}>
              Support SALTT
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
