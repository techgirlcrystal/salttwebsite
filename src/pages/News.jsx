import PlaceholderImage from '../components/PlaceholderImage.jsx'

const NEWS = [
  { title: 'Gospel Artist of the Year Announced', date: 'June 12, 2026', img: 'https://picsum.photos/seed/gospelchoir/800/450' },
  { title: 'New Worship Album Tops the Charts', date: 'June 8, 2026', img: 'https://picsum.photos/seed/worshipalbum/800/450' },
  { title: 'Faith & Community Tour Hits the Road', date: 'June 1, 2026', img: 'https://picsum.photos/seed/communitytour/800/450' },
  { title: 'SALTT Radio Expands Global Reach', date: 'May 26, 2026', img: 'https://picsum.photos/seed/radiostudio/800/450' },
  { title: 'Choir Competition Crowns New Champions', date: 'May 18, 2026', img: 'https://picsum.photos/seed/choircomp/800/450' },
  { title: 'Ministry Spotlight: Voices of Hope', date: 'May 9, 2026', img: 'https://picsum.photos/seed/ministry/800/450' },
  { title: 'Behind the Mic with Rising Stars', date: 'May 2, 2026', img: 'https://picsum.photos/seed/microphone/800/450' },
  { title: 'Community Outreach Feeds Thousands', date: 'April 24, 2026', img: 'https://picsum.photos/seed/outreachevent/800/450' },
  { title: 'Gospel Brunch Series Returns', date: 'April 15, 2026', img: 'https://picsum.photos/seed/gospelbrunch/800/450' },
]

export default function News() {
  return (
    <div>
      <section className="section-pad border-b border-navy/10 text-center">
        <span className="font-head uppercase tracking-[0.3em] text-saltred text-sm">
          The Newsroom
        </span>
        <h1 className="mt-3 text-5xl sm:text-6xl text-navy">Gospel News</h1>
        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-saltgold" />
        <p className="mt-5 text-navy/70 max-w-2xl mx-auto">
          The latest headlines, features, and stories from across the world of Gospel.
        </p>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((n) => (
            <article
              key={n.title}
              className="group rounded-2xl bg-white border border-navy/10 overflow-hidden shadow-card hover:border-saltred/50 transition"
            >
              <PlaceholderImage label="News" src={n.img} alt={n.title} ratio="aspect-video" rounded="rounded-none" />
              <div className="p-6">
                <span className="font-head uppercase tracking-widest text-xs text-saltred">
                  {n.date}
                </span>
                <h3 className="mt-2 text-xl text-navy group-hover:text-saltred transition">
                  {n.title}
                </h3>
                <p className="mt-3 text-navy/65 text-sm leading-relaxed">
                  A closer look at the people, music, and ministry shaping today's Gospel
                  community — read the full story on SALTT.
                </p>
                <span className="mt-4 inline-block font-head uppercase tracking-widest text-xs text-saltred">
                  Read More →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
