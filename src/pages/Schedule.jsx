const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const SLOTS = [
  {
    time: '6:00 AM',
    shows: ['Morning Manna', 'Morning Manna', 'Morning Manna', 'Morning Manna', 'Morning Manna', 'Weekend Praise', 'Sunday Sanctuary'],
  },
  {
    time: '9:00 AM',
    shows: ['Gospel Mix', 'Gospel Mix', 'Gospel Mix', 'Gospel Mix', 'Gospel Mix', 'Artist Hour', 'Sunday Sanctuary'],
  },
  {
    time: '12:00 PM',
    shows: ['Midday Word', 'Midday Word', 'Midday Word', 'Midday Word', 'Midday Word', 'Throwback Gospel', 'Worship Live'],
  },
  {
    time: '3:00 PM',
    shows: ['Afternoon Lift', 'Afternoon Lift', 'Afternoon Lift', 'Afternoon Lift', 'Afternoon Lift', 'Youth Zone', 'Hymns & Praise'],
  },
  {
    time: '4:00 PM',
    shows: ['Gospel Drive', 'Gospel Drive', 'Gospel Drive', 'Gospel Drive', 'Gospel Drive', 'Spotlight', 'Quiet Reflections'],
  },
  {
    time: '6:00 PM',
    shows: ['Evening Worship', 'Real Talk Faith', 'Evening Worship', 'Ministry Now', 'Evening Worship', 'Real Talk Faith', 'Evening Worship'],
  },
  {
    time: '9:00 PM',
    shows: ['Night Praise', 'Night Praise', 'Night Praise', 'Night Praise', 'Late Night Gospel', 'Late Night Gospel', 'Night Praise'],
  },
]

function cellTone(show) {
  if (show.includes('Sanctuary') || show.includes('Worship Live')) return 'bg-saltred text-white font-medium'
  if (show.includes('Real Talk') || show.includes('Spotlight') || show.includes('Artist')) return 'bg-saltgold/40 text-navy font-medium'
  return 'bg-sand text-navy/80'
}

export default function Schedule() {
  return (
    <div>
      <section className="section-pad border-b border-navy/10 text-center">
        <span className="font-head uppercase tracking-[0.3em] text-saltred text-sm">
          On Air 24/7
        </span>
        <h1 className="mt-3 text-5xl sm:text-6xl text-navy">Broadcast Schedule</h1>
        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-saltgold" />
        <p className="mt-5 text-navy/70 max-w-2xl mx-auto">
          Your weekly guide to SALTT Radio programming. All times shown in ET.
        </p>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl overflow-x-auto rounded-2xl border border-navy/10 shadow-card bg-white">
          <table className="w-full border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-navy">
                <th className="p-4 text-left font-head uppercase tracking-widest text-xs text-saltgold sticky left-0 bg-navy z-10">
                  Time
                </th>
                {DAYS.map((d) => (
                  <th
                    key={d}
                    className="p-4 font-head uppercase tracking-widest text-xs text-white"
                  >
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SLOTS.map((slot) => (
                <tr key={slot.time} className="border-t border-navy/10">
                  <td className="p-3 font-head uppercase tracking-wider text-sm text-saltred whitespace-nowrap sticky left-0 bg-white z-10">
                    {slot.time}
                  </td>
                  {slot.shows.map((show, i) => (
                    <td key={i} className="p-2">
                      <div
                        className={`rounded-lg px-3 py-3 text-xs sm:text-sm leading-tight h-full ${cellTone(
                          show
                        )}`}
                      >
                        {show}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mx-auto max-w-6xl mt-6 flex flex-wrap gap-4 justify-center text-sm text-navy/70">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-saltred" /> Worship & Service
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-saltgold/60" /> Talk & Features
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-sand" /> Music Programming
          </span>
        </div>
      </section>
    </div>
  )
}
