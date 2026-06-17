import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Youtube, Instagram, Facebook } from 'lucide-react'

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'News', to: '/news' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'Events', to: '/events' },
  { label: 'Connect', to: '/connect' },
]

const SOCIALS = [
  { label: 'YouTube', href: '#', Icon: Youtube },
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'Facebook', href: '#', Icon: Facebook },
]

export default function Footer() {
  const [logoMissing, setLogoMissing] = useState(false)

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-14 sm:py-16 text-center">
        {/* Logo — real logo on a light plate, falls back to a placeholder until the file exists */}
        <div className="flex justify-center">
          {logoMissing ? (
            <div className="flex h-20 w-60 items-center justify-center rounded-xl border-2 border-dashed border-white/20 bg-charcoal/60 px-4">
              <span className="font-head uppercase tracking-[0.16em] text-[11px] text-white/55 leading-snug">
                Add public/saltt-logo.png
              </span>
            </div>
          ) : (
            <img
              src="/saltt-logo.png"
              alt="SALTT Network — Servants Altering Lives Through Truth"
              onError={() => setLogoMissing(true)}
              className="h-28 sm:h-32 w-auto object-contain"
            />
          )}
        </div>

        {/* Tagline */}
        <p className="mt-6 font-head uppercase tracking-[0.18em] text-saltgold text-sm sm:text-base">
          SALTT Radio — Music, Ministry, and More.
        </p>

        {/* Quick links */}
        <nav className="mt-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="font-head uppercase tracking-wider text-sm text-white/70 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social icons */}
        <div className="mt-9 flex items-center justify-center gap-4 sm:gap-5">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dotted border-saltgold/50 text-saltgold transition-all duration-200 hover:-translate-y-1 hover:border-saltgold hover:bg-saltgold/10"
            >
              <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-6 text-white/40 text-sm">
          © {new Date().getFullYear()} SALTT Network. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
