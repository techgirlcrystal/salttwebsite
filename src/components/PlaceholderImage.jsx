import { useState } from 'react'

export default function PlaceholderImage({
  label = 'IMAGE PLACEHOLDER',
  src,
  alt,
  className = '',
  ratio = 'aspect-video',
  rounded = 'rounded-xl',
}) {
  const [failed, setFailed] = useState(false)
  const showImage = src && !failed

  return (
    <div
      className={`relative ${ratio} ${rounded} overflow-hidden border border-navy/10 ${className}`}
      style={
        showImage
          ? undefined
          : {
              background:
                'linear-gradient(135deg, #ECE2D0 0%, #FAF6EF 55%, rgba(245,183,30,0.45) 100%)',
            }
      }
    >
      {showImage ? (
        <>
          <img
            src={src}
            alt={alt || label}
            loading="lazy"
            onError={() => setFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* unified branded tone — one look across every photo */}
          <div
            className="pointer-events-none absolute inset-0 mix-blend-overlay"
            style={{ background: 'rgba(245,183,30,0.30)' }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(21,19,31,0.62) 0%, rgba(21,19,31,0.18) 38%, rgba(21,19,31,0) 68%)',
            }}
          />
        </>
      ) : (
        <>
          {/* subtle diagonal sheen */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, rgba(21,19,31,0.04) 0px, rgba(21,19,31,0.04) 1px, transparent 1px, transparent 12px)',
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-3">
            <span className="font-head text-saltred/70 text-2xl leading-none">✦</span>
            <span className="font-head uppercase tracking-[0.2em] text-[11px] sm:text-xs text-navy/55">
              {label}
            </span>
          </div>
        </>
      )}
    </div>
  )
}
