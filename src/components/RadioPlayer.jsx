import { useRef, useState } from 'react'

const STREAM_URL = 'https://salttnetwork.com/proxy/salttradio?mp=/stream'

export default function RadioPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      try {
        setLoading(true)
        await audio.play()
        setPlaying(true)
      } catch (err) {
        // Autoplay/stream errors shouldn't crash the UI
        console.warn('Radio stream could not start:', err)
        setPlaying(false)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card">
        {/* glow */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, #D81E2C 0%, transparent 70%)' }}
        />
        <div className="relative flex flex-col sm:flex-row items-center gap-6 p-7 sm:p-9">
          {/* Play / Pause */}
          <button
            onClick={toggle}
            aria-label={playing ? 'Pause radio' : 'Play radio'}
            className="group relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-saltred shadow-card transition-transform hover:scale-105 active:scale-95"
          >
            {playing && (
              <span className="absolute inset-0 rounded-full bg-saltred animate-ping opacity-30" />
            )}
            <span className="relative text-white">
              {loading ? (
                <span className="block h-6 w-6 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              ) : playing ? (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5.14v13.72c0 .79.87 1.27 1.54.84l10.78-6.86a1 1 0 000-1.69L9.54 4.3A1 1 0 008 5.14z" />
                </svg>
              )}
            </span>
          </button>

          {/* Labels */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="live-dot inline-block h-2.5 w-2.5 rounded-full bg-saltred" />
              <span className="font-head uppercase tracking-[0.3em] text-saltred text-sm font-semibold">
                Live
              </span>
            </div>
            <h3 className="mt-1.5 text-xl sm:text-2xl text-navy">SALTT Radio</h3>
            <p className="text-navy/60 text-sm mt-0.5">Music, Ministry &amp; More</p>
          </div>

          {/* Now playing bars (visual) */}
          <div className="hidden sm:flex items-end gap-1 h-10">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="w-1.5 rounded-full bg-saltgold"
                style={{
                  height: playing ? '100%' : '20%',
                  animation: playing
                    ? `eq 0.9s ease-in-out ${i * 0.12}s infinite alternate`
                    : 'none',
                  transition: 'height 0.3s',
                }}
              />
            ))}
          </div>
        </div>

        <audio ref={audioRef} src={STREAM_URL} preload="none" />
      </div>

      <style>{`
        @keyframes eq {
          0% { height: 20%; }
          100% { height: 100%; }
        }
      `}</style>
    </div>
  )
}
