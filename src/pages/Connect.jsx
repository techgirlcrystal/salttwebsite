import { useState } from 'react'

export default function Connect() {
  const [mode, setMode] = useState('event') // 'event' | 'street'

  return (
    <div>
      <section className="section-pad border-b border-navy/10 text-center">
        <span className="font-head uppercase tracking-[0.3em] text-saltred text-sm">
          Get Involved
        </span>
        <h1 className="mt-3 text-5xl sm:text-6xl text-navy">Connect with Team SALTT</h1>
        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-saltgold" />
        <p className="mt-5 text-navy/70 max-w-2xl mx-auto">
          Bring SALTT to your event, join our street team, or share your announcement with
          the SALTT community.
        </p>
      </section>

      {/* Toggle form */}
      <section className="section-pad">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white border border-navy/10 p-6 sm:p-9 shadow-card">
          {/* Toggle */}
          <div className="grid grid-cols-2 gap-2 rounded-lg bg-sand p-1.5 mb-8">
            <button
              onClick={() => setMode('event')}
              className={`rounded-md py-3 px-3 font-head uppercase tracking-wider text-xs sm:text-sm transition ${
                mode === 'event' ? 'bg-saltred text-white' : 'text-navy/60 hover:text-navy'
              }`}
            >
              Request Team SALTT at an Event
            </button>
            <button
              onClick={() => setMode('street')}
              className={`rounded-md py-3 px-3 font-head uppercase tracking-wider text-xs sm:text-sm transition ${
                mode === 'street' ? 'bg-saltred text-white' : 'text-navy/60 hover:text-navy'
              }`}
            >
              Join the Street Team
            </button>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="field" type="text" placeholder="Full name" />
              <input className="field" type="email" placeholder="Email address" />
            </div>
            <input className="field" type="tel" placeholder="Phone number" />

            {mode === 'event' ? (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input className="field" type="text" placeholder="Event name" />
                  <input className="field" type="date" placeholder="Event date" />
                </div>
                <input className="field" type="text" placeholder="Event location / venue" />
                <textarea
                  className="field min-h-[120px] resize-y"
                  placeholder="Tell us about your event and how SALTT can be involved…"
                />
              </>
            ) : (
              <>
                <input className="field" type="text" placeholder="City / region" />
                <textarea
                  className="field min-h-[120px] resize-y"
                  placeholder="Why do you want to join the SALTT street team? Tell us about yourself…"
                />
              </>
            )}

            <button type="submit" className="btn-red w-full">
              {mode === 'event' ? 'Submit Event Request' : 'Join the Street Team'}
            </button>
            <p className="text-center text-navy/50 text-xs">
              This is a demo form and is not yet connected.
            </p>
          </form>
        </div>
      </section>

      {/* Announcement */}
      <section className="section-pad bg-sand">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl text-navy">Submit Your Announcement</h2>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-saltgold" />
            <p className="mt-4 text-navy/70">
              Share your ministry news, event, or community announcement with the SALTT
              audience.
            </p>
          </div>

          <form
            className="space-y-4 rounded-2xl bg-white border border-navy/10 p-6 sm:p-9 shadow-card"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="field" type="text" placeholder="Full name" />
              <input className="field" type="email" placeholder="Email address" />
            </div>
            <textarea
              className="field min-h-[140px] resize-y"
              placeholder="Your announcement…"
            />

            {/* Flyer upload placeholder */}
            <label className="flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-navy/20 bg-cream py-10 px-4 text-center cursor-pointer hover:border-saltgold transition">
              <span className="font-head uppercase tracking-widest text-2xl text-saltred/70">
                ↑
              </span>
              <span className="font-head uppercase tracking-widest text-xs text-navy/70">
                Upload Flyer
              </span>
              <span className="text-navy/45 text-xs">PNG or JPG, up to 5MB</span>
              <input type="file" accept="image/*" className="hidden" />
            </label>

            <button type="submit" className="btn-red w-full">
              Submit Announcement
            </button>
            <p className="text-center text-navy/50 text-xs">
              This is a demo form and is not yet connected.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
