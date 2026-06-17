import PlaceholderImage from '../components/PlaceholderImage.jsx'

const EVENTS = [
  { title: 'Praise in the Park', date: 'July 4, 2026', city: 'Atlanta, GA', img: 'https://picsum.photos/seed/praisepark/600/800' },
  { title: 'Gospel Night Live', date: 'July 19, 2026', city: 'Houston, TX', img: 'https://picsum.photos/seed/gospelnight/600/800' },
  { title: 'Youth Worship Encounter', date: 'August 2, 2026', city: 'Memphis, TN', img: 'https://picsum.photos/seed/youthworship/600/800' },
  { title: 'Annual SALTT Gala', date: 'August 23, 2026', city: 'Atlanta, GA', img: 'https://picsum.photos/seed/salttgala/600/800' },
  { title: 'Faith & Family Fest', date: 'September 6, 2026', city: 'Charlotte, NC', img: 'https://picsum.photos/seed/familyfest/600/800' },
  { title: 'Worship Under the Stars', date: 'September 20, 2026', city: 'Dallas, TX', img: 'https://picsum.photos/seed/worshipstars/600/800' },
  { title: 'Choir Showcase Finale', date: 'October 4, 2026', city: 'Nashville, TN', img: 'https://picsum.photos/seed/choirshowcase/600/800' },
  { title: 'Harvest Praise Celebration', date: 'October 25, 2026', city: 'Birmingham, AL', img: 'https://picsum.photos/seed/harvestpraise/600/800' },
]

export default function Events() {
  return (
    <div>
      <section className="section-pad border-b border-navy/10 text-center">
        <span className="font-head uppercase tracking-[0.3em] text-saltred text-sm">
          Be There
        </span>
        <h1 className="mt-3 text-5xl sm:text-6xl text-navy">Upcoming Events</h1>
        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-saltgold" />
        <p className="mt-5 text-navy/70 max-w-2xl mx-auto">
          Gather, worship, and celebrate with the SALTT community at events near you.
        </p>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl grid gap-6 grid-cols-2 lg:grid-cols-4">
          {EVENTS.map((ev) => (
            <article
              key={ev.title}
              className="rounded-2xl bg-white border border-navy/10 overflow-hidden shadow-card hover:-translate-y-1 transition"
            >
              <PlaceholderImage label="Event Flyer" src={ev.img} alt={ev.title} ratio="aspect-[3/4]" rounded="rounded-none" />
              <div className="p-5">
                <span className="font-head uppercase tracking-widest text-xs text-saltred">
                  {ev.date}
                </span>
                <h3 className="mt-1 text-lg text-navy leading-tight">{ev.title}</h3>
                <p className="mt-1 text-navy/55 text-sm">{ev.city}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
