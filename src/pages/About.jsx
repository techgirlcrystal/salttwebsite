import PlaceholderImage from '../components/PlaceholderImage.jsx'

const PARAGRAPHS = [
  'SALTT Radio (Servants Altering Lives Through Truth) is a dynamic online radio station dedicated to sharing the message of faith, hope, and inspiration through music, ministry, and meaningful conversation. Founded in 2017 by Ellyn Neal Favors and her late husband, Edwin Favors, SALTT Radio was established with a vision to use media as a tool to encourage, uplift, and transform lives through the power of faith-based programming.',
  'Broadcasting 24 hours a day, 7 days a week, SALTT Radio serves listeners around the world with an inspiring blend of Gospel music, ministry programming, engaging talk shows, artist features, community outreach, and content designed to strengthen faith and promote positive living.',
  'Built on a foundation of service, purpose, and excellence, SALTT Radio continues to honor the vision of its founders by providing a platform where listeners can find encouragement, hope, and truth. Under the leadership of Founder and CEO Ellyn Neal Favors, the station has grown into a trusted source for Gospel music and inspirational programming, while continuing to create opportunities for new voices, ministries, and community leaders to be heard.',
  "The legacy of Edwin Favors remains an integral part of SALTT Radio's story and mission. Together, he and Ellyn envisioned a media platform that would not only entertain but also inspire spiritual growth, foster meaningful connections, and make a lasting impact on communities around the world.",
  'Today, SALTT Radio remains committed to its founding purpose—serving as a beacon of faith, encouragement, and empowerment for listeners everywhere.',
]

const TEAM = [
  { role: 'Founder & CEO', img: 'https://picsum.photos/seed/founder/600/600' },
  { role: 'Program Director', img: 'https://picsum.photos/seed/director/600/600' },
  { role: 'On-Air Host', img: 'https://picsum.photos/seed/onairhost/600/600' },
  { role: 'Music Director', img: 'https://picsum.photos/seed/musicdirector/600/600' },
  { role: 'Community Outreach', img: 'https://picsum.photos/seed/outreach/600/600' },
  { role: 'Production Lead', img: 'https://picsum.photos/seed/producer/600/600' },
]

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="section-pad border-b border-navy/10 text-center">
        <span className="font-head uppercase tracking-[0.3em] text-saltred text-sm">
          Our Story
        </span>
        <h1 className="mt-3 text-5xl sm:text-6xl text-navy">About SALTT Radio</h1>
        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-saltgold" />
      </section>

      {/* Copy */}
      <section className="section-pad">
        <div className="mx-auto max-w-3xl space-y-6">
          {PARAGRAPHS.map((p, i) => (
            <p key={i} className="text-navy/80 text-lg leading-relaxed">
              {p}
            </p>
          ))}
          <p className="font-head uppercase tracking-widest text-2xl text-saltgold pt-2">
            SALTT Radio — Music, Ministry, and More.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-sand">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl text-navy">Our Programming Team</h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-saltgold" />
        </div>
        <div className="mx-auto max-w-6xl grid gap-6 grid-cols-2 md:grid-cols-3">
          {TEAM.map((member, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-navy/10 overflow-hidden shadow-card text-center hover:border-saltgold/60 transition"
            >
              <PlaceholderImage label="Team Photo" src={member.img} alt={member.role} ratio="aspect-square" rounded="rounded-none" />
              <div className="p-5">
                <h3 className="text-lg text-navy">Team Member</h3>
                <p className="mt-1 font-head uppercase tracking-widest text-xs text-saltred">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
