import { useEffect } from 'react'

const GLITCH_STYLE_ID = 'glitch-keyframes'

function ensureGlitchStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById(GLITCH_STYLE_ID)) return

  const style = document.createElement('style')
  style.id = GLITCH_STYLE_ID
  style.textContent = `
        @keyframes glitch-clip {
            0%   { clip-path: inset(0 0 95% 0); transform: translate(-4px, 0); opacity: 1; }
            10%  { clip-path: inset(30% 0 50% 0); transform: translate(4px, 0); }
            20%  { clip-path: inset(60% 0 20% 0); transform: translate(-3px, 2px); }
            30%  { clip-path: inset(10% 0 80% 0); transform: translate(3px, -2px); }
            40%  { clip-path: inset(80% 0 5%  0); transform: translate(-4px, 0); }
            50%  { clip-path: inset(45% 0 45% 0); transform: translate(4px, 1px); }
            60%  { clip-path: inset(5%  0 85% 0); transform: translate(-2px, -1px); }
            70%  { clip-path: inset(70% 0 15% 0); transform: translate(2px, 2px); }
            80%  { clip-path: inset(20% 0 65% 0); transform: translate(-4px, 0); }
            90%  { clip-path: inset(55% 0 35% 0); transform: translate(4px, -1px); }
            100% { clip-path: inset(0 0 95% 0); transform: translate(0, 0); opacity: 0; }
        }
        @keyframes glitch-clip2 {
            0%   { clip-path: inset(50% 0 30% 0); transform: translate(4px, 0) scaleX(1.02); opacity: 1; }
            15%  { clip-path: inset(10% 0 70% 0); transform: translate(-4px, 1px) scaleX(0.98); }
            30%  { clip-path: inset(75% 0 10% 0); transform: translate(3px, -2px); }
            45%  { clip-path: inset(25% 0 55% 0); transform: translate(-3px, 2px) scaleX(1.01); }
            60%  { clip-path: inset(60% 0 20% 0); transform: translate(4px, 0); }
            75%  { clip-path: inset(5%  0 80% 0); transform: translate(-2px, -1px) scaleX(0.99); }
            90%  { clip-path: inset(40% 0 40% 0); transform: translate(2px, 1px); }
            100% { clip-path: inset(50% 0 30% 0); transform: translate(0, 0); opacity: 0; }
        }
        @keyframes rgb-shift {
            0%   { transform: translate(-2px, 0); opacity: 0.6; }
            25%  { transform: translate(2px, 1px); opacity: 0.4; }
            50%  { transform: translate(-1px, -1px); opacity: 0.5; }
            75%  { transform: translate(1px, 0); opacity: 0.3; }
            100% { transform: translate(0, 0); opacity: 0; }
        }
        .glitch-layer-1 {
            animation: glitch-clip 0.45s steps(1) forwards;
            mix-blend-mode: screen;
            filter: hue-rotate(90deg) saturate(3);
        }
        .glitch-layer-2 {
            animation: glitch-clip2 0.45s steps(1) forwards;
            mix-blend-mode: screen;
            filter: hue-rotate(200deg) saturate(3);
        }
        .glitch-rgb-r {
            animation: rgb-shift 0.45s steps(1) forwards;
            mix-blend-mode: screen;
            filter: saturate(5) hue-rotate(0deg);
            opacity: 0;
        }
        .glitch-rgb-b {
            animation: rgb-shift 0.45s steps(1) 0.05s forwards;
            mix-blend-mode: screen;
            filter: saturate(5) hue-rotate(240deg);
            opacity: 0;
        }
    `
  document.head.appendChild(style)
}

interface GlitchImageProps {
  images: string[]
  currentIndex: number
  nextIndex: number | null
  isGlitching: boolean
  alt?: string
  className?: string
}

export function GlitchImage({
  images,
  currentIndex,
  nextIndex,
  isGlitching,
  alt = 'Glitch image',
  className,
}: GlitchImageProps) {
  useEffect(() => {
    ensureGlitchStyles()
  }, [])

  const currentSrc = images[currentIndex]
  const nextSrc = nextIndex !== null ? images[nextIndex] : null

  return (
    <div className={className}>
      <img
        src={currentSrc}
        className="absolute inset-0 h-full w-full object-cover rounded-full"
        alt={alt}
      />
      {nextSrc !== null && (
        <img
          src={nextSrc}
          className="absolute inset-0 h-full w-full object-cover rounded-full"
          alt={alt}
          style={{ zIndex: 1 }}
        />
      )}

      {isGlitching && (
        <>
          <img
            src={currentSrc}
            className="absolute inset-0 h-full w-full object-cover rounded-full glitch-layer-1"
            alt=""
            aria-hidden="true"
            style={{ zIndex: 2 }}
          />
          <img
            src={currentSrc}
            className="absolute inset-0 h-full w-full object-cover rounded-full glitch-layer-2"
            alt=""
            aria-hidden="true"
            style={{ zIndex: 3 }}
          />
          <img
            src={currentSrc}
            className="absolute inset-0 h-full w-full object-cover rounded-full glitch-rgb-r"
            alt=""
            aria-hidden="true"
            style={{ zIndex: 4 }}
          />
          <img
            src={currentSrc}
            className="absolute inset-0 h-full w-full object-cover rounded-full glitch-rgb-b"
            alt=""
            aria-hidden="true"
            style={{ zIndex: 4 }}
          />
        </>
      )}
    </div>
  )
}
