import { useEffect, useState } from 'react'
import PlaceholderImage from './PlaceholderImage.jsx'

const SHOWS = [
  {
    title: 'Morning Manna',
    time: 'Weekdays · 7:00 AM',
    tag: 'Devotional',
    img: 'https://picsum.photos/seed/worship/800/450',
  },
  {
    title: 'Gospel Drive',
    time: 'Weekdays · 4:00 PM',
    tag: 'Music',
    img: 'https://picsum.photos/seed/microphone/800/450',
  },
  {
    title: 'Sunday Sanctuary',
    time: 'Sundays · 10:00 AM',
    tag: 'Worship',
    img: 'https://picsum.photos/seed/congregation/800/450',
  },
  {
    title: 'Real Talk Faith',
    time: 'Saturdays · 6:00 PM',
    tag: 'Talk Show',
    img: 'https://picsum.photos/seed/gospel/800/450',
  },
]

export default function ProgrammingCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SHOWS.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  const go = (dir) =>
    setIndex((i) => (i + dir + SHOWS.length) % SHOWS.length)

  return (
    <div className="relative">
      {/* Track */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SHOWS.map((show) => (
            <div key={show.title} className="min-w-full px-1">
              <div className="grid gap-6 md:grid-cols-2 items-center rounded-2xl bg-white border border-navy/10 p-5 sm:p-8 shadow-card">
                <PlaceholderImage label={show.title} src={show.img} alt={show.title} ratio="aspect-video" />
                <div>
                  <span className="inline-block rounded-full bg-saltred/15 text-saltred font-head uppercase tracking-widest text-xs px-3 py-1">
                    {show.tag}
                  </span>
                  <h3 className="mt-4 text-3xl sm:text-4xl text-navy">{show.title}</h3>
                  <p className="mt-2 text-saltred font-head tracking-wider">{show.time}</p>
                  <p className="mt-4 text-navy/65 leading-relaxed">
                    Tune in for inspired programming that uplifts, encourages, and brings the
                    very best of Gospel to your day.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous show"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 border border-white/15 text-white hover:bg-saltred transition"
      >
        ‹
      </button>
      <button
        aria-label="Next show"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 border border-white/15 text-white hover:bg-saltred transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {SHOWS.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to show ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? 'w-8 bg-saltred' : 'w-2.5 bg-navy/25 hover:bg-navy/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
