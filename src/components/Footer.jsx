import { Link } from 'react-router-dom'

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'News', to: '/news' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'Events', to: '/events' },
  { label: 'Connect', to: '/connect' },
]

const SOCIALS = ['FB', 'IG', 'YT', 'X']

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1">
              <span className="font-head font-bold text-3xl tracking-widest text-saltgold">
                SALTT
              </span>
              <span className="font-head text-3xl tracking-widest text-white/40">NETWORK</span>
            </div>
            <p className="mt-4 text-white/60 max-w-xs">
              SALTT Radio — Music, Ministry, and More.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-saltgold text-sm tracking-widest mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-y-2">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-head uppercase tracking-wider text-sm text-white/70 hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-saltgold text-sm tracking-widest mb-4">Follow SALTT</h4>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <span
                  key={s}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-charcoal font-head text-xs text-white/70 hover:border-saltred hover:text-white transition cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} SALTT Network. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
