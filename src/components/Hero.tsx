import type { CSSProperties } from 'react'
import { site } from '../data/site'
import { Photo } from './Photo'
import { Button, Spark, TrowelMark } from './ui'

/**
 * The hero copy is rendered twice on desktop: once in forest on the ivory page,
 * and once in ivory clipped to the photograph (see `.hero-clone`). The two
 * copies sit in exactly the same place, so the headline appears to change
 * colour where it crosses onto the image. The clone is inert and hidden from
 * assistive tech; everything in it except the headline is invisible.
 */
function HeroCopy({ clone = false }: { clone?: boolean }) {
  const Title = clone ? 'p' : 'h1'
  return (
    <div className="hero-copy">
      <p className="hero-hide rise label flex items-center gap-3 whitespace-nowrap">
        <span aria-hidden="true" className="h-px w-8 bg-current" />
        Phoenix, Arizona
        <span aria-hidden="true" className="opacity-50 max-[379px]:hidden">
          /
        </span>
        <span className="opacity-70 max-[379px]:hidden">N 16th Street</span>
      </p>

      <Title className="hero-title display mt-6 lg:mt-auto lg:pt-8">
        <span className="rise" style={{ '--i': 1 } as CSSProperties}>
          Grow
        </span>
        <span className="rise" style={{ '--i': 2 } as CSSProperties}>
          a little
        </span>
        <span
          className={`rise accent ${clone ? '' : 'text-terracotta-deep'}`}
          style={{ '--i': 3 } as CSSProperties}
        >
          wild.
        </span>
      </Title>

      <div
        className="hero-hide rise mt-7 lg:mt-9 lg:mb-auto"
        style={{ '--i': 5 } as CSSProperties}
      >
        <p className="max-w-[26rem] text-[1.0625rem] leading-relaxed lg:text-lg">
          Not your average plant nursery. Your neighborhood green escape in the heart of
          Phoenix.
        </p>
        <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row">
          <Button href="#visit">Plan your visit</Button>
          <Button href="#workshops" className="btn-outline">
            Explore workshops
          </Button>
        </div>
      </div>
    </div>
  )
}

/** Circular "stamp" that straddles the photo edge. */
function Sticker() {
  const text = `Open 7 days a week · ${site.hours.short} · Phoenix AZ · `
  return (
    <a
      href="#visit"
      aria-label={`${site.hours.days}, ${site.hours.time}. Plan your visit`}
      className="hero-sticker fade-in block transition-transform duration-700 ease-[var(--ease-out-expo)] hover:rotate-[20deg]"
      style={{ '--i': 7 } as CSSProperties}
    >
      <svg viewBox="0 0 200 200" className="block w-full" aria-hidden="true">
        <circle cx="100" cy="100" r="100" className="fill-terracotta" />
        <defs>
          <path id="sticker-arc" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <text
          className="fill-ink"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 17.5,
            fontWeight: 700,
            letterSpacing: '0.19em',
            textTransform: 'uppercase',
          }}
        >
          <textPath href="#sticker-arc" textLength="456">
            {text}
          </textPath>
        </text>
        <TrowelMark x="56" y="56" width="88" height="88" className="text-ink" />
      </svg>
    </a>
  )
}

export function Hero() {
  return (
    <section id="top" aria-label="Welcome" className="overflow-x-clip bg-ivory text-forest">
      <div className="hero-stage">
        <HeroCopy />

        <div className="hero-media">
          <div className="hero-image unveil drift">
            <Photo name="hero" sizes="(min-width: 1024px) 41vw, 83vw" priority />
            <div className="hero-clone" aria-hidden="true" inert>
              <HeroCopy clone />
            </div>
          </div>
          <Sticker />
          <p className="hero-side label text-forest/70" aria-hidden="true">
            <span className="flex items-center gap-3">
              <Spark className="h-3 w-3 text-terracotta-deep" />
              Plants / Pottery / Positive vibes
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
