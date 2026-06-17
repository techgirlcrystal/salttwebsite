import { Link } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage.jsx'
import RadioPlayer from '../components/RadioPlayer.jsx'
import ProgrammingCarousel from '../components/ProgrammingCarousel.jsx'

const NEWS = [
  {
    title: 'Gospel Artist of the Year Announced',
    date: 'June 12, 2026',
    img: 'https://picsum.photos/seed/choir/1200/900',
  },
  {
    title: 'New Worship Album Tops the Charts',
    date: 'June 8, 2026',
    img: 'https://picsum.photos/seed/worship/800/600',
  },
  {
    title: 'Faith & Community Tour Hits the Road',
    date: 'June 1, 2026',
    img: 'https://picsum.photos/seed/gospel/800/600',
  },
]

const EVENTS = [
  { title: 'Praise in the Park', date: 'July 4', img: 'https://picsum.photos/seed/concert/600/800' },
  { title: 'Gospel Night Live', date: 'July 19', img: 'https://picsum.photos/seed/congregation/600/800' },
  { title: 'Youth Worship Encounter', date: 'August 2', img: 'https://picsum.photos/seed/hands/600/800' },
  { title: 'Annual SALTT Gala', date: 'August 23', img: 'https://picsum.photos/seed/microphone/600/800' },
]

function SectionTitle({ children, kicker }) {
  return (
    <div className="text-center mb-12">
      {kicker && (
        <span className="font-head uppercase tracking-[0.3em] text-saltred text-sm">
          {kicker}
        </span>
      )}
      <h2 className="mt-2 text-4xl sm:text-5xl text-navy">{children}</h2>
      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-saltgold" />
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* 1. HERO — editorial split */}
      <section className="relative overflow-hidden border-b border-navy/10">
        {/* warm gradient depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 90% at 12% 8%, rgba(245,183,30,0.22) 0%, rgba(245,183,30,0) 45%), linear-gradient(160deg, #FAF6EF 0%, #ECE2D0 100%)',
          }}
        />
        {/* very low-opacity grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28">
          <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-12">
            {/* LEFT — oversized headline */}
            <div className="lg:col-span-5">
              <span className="font-head uppercase tracking-[0.35em] text-saltred text-xs sm:text-sm">
                Gospel TV + Radio
              </span>
              <h1
                className="mt-4 font-head font-bold uppercase text-navy leading-[0.86]"
                style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
              >
                SALTT
                <br />
                Network
              </h1>
              <div className="mt-6 inline-block">
                <p className="font-head uppercase tracking-[0.18em] text-lg sm:text-2xl text-navy/80">
                  Music. Ministry. More.
                </p>
                <span className="mt-2 block h-1 w-28 rounded-full bg-saltred" />
              </div>
              <p className="mt-8 text-navy/65 max-w-md leading-relaxed">
                Live and on demand — the message of faith, hope, and inspiration, broadcasting
                around the clock.
              </p>
              <div className="mt-9">
                <Link to="/connect" className="btn-red">
                  Team SALTT
                </Link>
              </div>
            </div>

            {/* RIGHT — framed live TV */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-navy/10 shadow-card bg-black ring-1 ring-black/5">
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '100%',
                    overflow: 'hidden',
                    paddingTop: '56.25%',
                    minHeight: '300px',
                  }}
                >
                  <iframe
                    src="https://way-network-streaming-solutions.mycloudstream.io/player/mrhr5vvo?autoplay=true"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    title="Saltt Video"
                  />
                </div>
              </div>
              <p className="mt-3 font-head uppercase tracking-[0.25em] text-xs text-navy/50 text-right">
                ● Now Streaming — Saltt Video
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE RADIO PLAYER */}
      <section className="section-pad bg-sand">
        <SectionTitle kicker="On Air">Live Radio</SectionTitle>
        <RadioPlayer />
        <p className="mt-6 text-center text-navy/60 text-sm">
          SALTT RADIO — Music, Ministry &amp; More
        </p>
      </section>

      {/* 3. YELLOW BLOCK */}
      <section id="support" className="bg-saltgold text-black">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-4xl sm:text-6xl text-black">Get Your Dose of SALTT</h2>
          <p className="mt-4 text-black/80 text-lg max-w-2xl mx-auto">
            Enter your name and email to join the SALTT Database and stay in the know on
            everything happening in the world of Gospel — music, ministry, events, and more.
          </p>
          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input className="field-dark flex-1" type="text" placeholder="Your name" />
            <input className="field-dark flex-1" type="email" placeholder="Your email" />
            <button type="submit" className="btn-dark whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-black/50 text-xs">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* 4. SPECIAL PROGRAMMING */}
      <section className="section-pad">
        <SectionTitle kicker="What's On">Special Programming</SectionTitle>
        <div className="mx-auto max-w-5xl">
          <ProgrammingCarousel />
        </div>
        <div className="mt-12 text-center">
          <Link to="/schedule" className="btn-red">
            See the Full Schedule Here
          </Link>
        </div>
      </section>

      {/* 5. GOSPEL NEWS */}
      <section className="section-pad bg-sand">
        {/* SALTT graphic banner */}
        <div className="mx-auto max-w-6xl mb-12">
          <div
            className="relative overflow-hidden rounded-2xl border border-navy/10 px-6 py-12 sm:py-16 text-center"
            style={{
              backgroundImage:
                'linear-gradient(120deg, rgba(21,19,31,0.78) 0%, rgba(216,30,44,0.78) 100%), url(https://picsum.photos/seed/gospelconcert/1600/600)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <span className="font-head uppercase tracking-[0.3em] text-saltgold text-sm">
              SALTT Newsroom
            </span>
            <p className="mt-3 font-head uppercase tracking-widest text-3xl sm:text-4xl text-white">
              ✦ Gospel · Faith · Culture ✦
            </p>
          </div>
        </div>

        <SectionTitle>What's Going On in Gospel News</SectionTitle>
        <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* Featured — dominant story */}
          <article className="group relative rounded-2xl overflow-hidden border border-navy/10 shadow-card lg:col-span-2 lg:row-span-2">
            <PlaceholderImage
              label="News"
              src={NEWS[0].img}
              alt={NEWS[0].title}
              ratio="aspect-[16/10] lg:aspect-auto lg:h-full"
              rounded="rounded-none"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="font-head uppercase tracking-[0.2em] text-xs text-saltgold">
                Featured · {NEWS[0].date}
              </span>
              <h3 className="mt-2 max-w-xl text-2xl sm:text-4xl leading-[1.05] text-white">
                {NEWS[0].title}
              </h3>
            </div>
          </article>

          {/* Supporting stories */}
          {NEWS.slice(1).map((n) => (
            <article
              key={n.title}
              className="group relative rounded-2xl overflow-hidden border border-navy/10 shadow-card"
            >
              <PlaceholderImage label="News" src={n.img} alt={n.title} ratio="aspect-[16/9]" rounded="rounded-none" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="font-head uppercase tracking-[0.2em] text-[11px] text-saltgold">
                  {n.date}
                </span>
                <h3 className="mt-1 text-lg leading-tight text-white">{n.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/news" className="btn-dark">
            Read More News
          </Link>
        </div>
      </section>

      {/* 6. EVENT FLYERS */}
      <section className="section-pad">
        <SectionTitle kicker="Mark Your Calendar">Upcoming Events</SectionTitle>
        <div className="mx-auto max-w-6xl grid gap-6 grid-cols-2 lg:grid-cols-4">
          {EVENTS.map((ev) => (
            <article
              key={ev.title}
              className="rounded-2xl bg-white border border-navy/10 overflow-hidden shadow-card hover:-translate-y-1 transition"
            >
              <PlaceholderImage label="Event Flyer" src={ev.img} alt={ev.title} ratio="aspect-[3/4]" rounded="rounded-none" />
              <div className="p-4">
                <span className="font-head uppercase tracking-widest text-xs text-saltred">
                  {ev.date}
                </span>
                <h3 className="mt-1 text-base text-navy leading-tight">{ev.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 7. MEET TEAM SALTT */}
      <section className="px-5 pb-20 text-center">
        <Link to="/about" className="btn-red">
          Meet Team SALTT
        </Link>
      </section>
    </div>
  )
}
