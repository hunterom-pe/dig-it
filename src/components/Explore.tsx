import { getUpcomingWorkshops } from '../data/workshops'
import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { ArrowLink, SectionLabel } from './ui'

function Numeral({ children }: { children: string }) {
  return (
    <span aria-hidden="true" className="accent text-3xl text-terracotta lg:text-4xl">
      {children}
    </span>
  )
}

export function Explore() {
  const upcoming = getUpcomingWorkshops().length

  return (
    <section
      aria-labelledby="explore-title"
      className="overflow-x-clip bg-forest pt-16 pb-20 text-ivory lg:pt-28 lg:pb-28"
    >
      <div className="wrap">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel n="02">Explore Dig It</SectionLabel>
            <h2
              id="explore-title"
              className="display mt-6 text-[clamp(3.5rem,17vw,7rem)] lg:text-[clamp(5rem,9.5vw,11rem)]"
            >
              Three ways <span className="accent text-terracotta">in.</span>
            </h2>
          </div>
          <p className="max-w-xs pb-2 text-ivory/75 lg:text-right">
            Browse the nursery, make something with your hands, or let us rethink your whole
            yard.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-x-8 gap-y-16 lg:mt-16 lg:grid-cols-12">
          {/* 01 — Nursery: the big one */}
          <article className="group lg:col-span-7">
            <Reveal variant="clip">
              <a href="#visit" tabIndex={-1} aria-hidden="true" className="block">
                <div className="zoom relative -ml-5 aspect-[5/4] overflow-hidden sm:-ml-8 lg:ml-0">
                  <Photo name="exploreNursery" alt="" sizes="(min-width: 1024px) 56vw, 100vw" />
                </div>
              </a>
            </Reveal>
            <Reveal className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-[auto_1fr] lg:mt-8">
              <Numeral>01</Numeral>
              <div>
                <h3 className="display text-5xl lg:text-7xl">The Nursery</h3>
                <p className="mt-4 max-w-md text-ivory/80 lg:text-lg">
                  Plants, pottery, greenery, and the thing you weren&rsquo;t looking for but
                  can&rsquo;t leave without.
                </p>
                <ArrowLink href="#visit" className="mt-4 text-ivory">
                  Plan a visit
                </ArrowLink>
              </div>
            </Reveal>
          </article>

          {/* 02 — Workshops: narrow, dropped down the page */}
          <article className="group pl-[18%] lg:col-span-4 lg:col-start-9 lg:pt-28 lg:pl-0">
            <Reveal variant="clip">
              <a href="#workshops" tabIndex={-1} aria-hidden="true" className="block">
                <div className="zoom relative aspect-[3/4] overflow-hidden">
                  <Photo name="exploreWorkshops" alt="" sizes="(min-width: 1024px) 31vw, 80vw" />
                  {upcoming > 0 && (
                    <span className="label absolute top-0 left-0 bg-lavender px-3 py-2 text-ink">
                      {upcoming} on the calendar
                    </span>
                  )}
                </div>
              </a>
            </Reveal>
            <Reveal className="mt-6 lg:mt-8">
              <Numeral>02</Numeral>
              <h3 className="display mt-3 text-5xl lg:text-6xl">Workshops</h3>
              <p className="mt-4 max-w-sm text-ivory/80 lg:text-lg">
                Hands-on classes and creative sessions. Learn something, make something, take
                it home.
              </p>
              <ArrowLink href="#workshops" className="mt-4 text-ivory">
                See what&rsquo;s coming up
              </ArrowLink>
            </Reveal>
          </article>

          {/* 03 — Design: wide strip, text leading */}
          <article className="group grid items-end gap-x-8 gap-y-6 lg:col-span-11 lg:col-start-2 lg:-mt-10 lg:grid-cols-11">
            <Reveal className="order-2 lg:order-1 lg:col-span-4 lg:pb-2">
              <Numeral>03</Numeral>
              <h3 className="display mt-3 text-5xl lg:text-6xl">Dig It Design</h3>
              <p className="mt-4 max-w-sm text-ivory/80 lg:text-lg">
                Landscape design and outdoor transformations, drawn up by people who work
                with these plants every day.
              </p>
              <ArrowLink href="#design" className="mt-4 text-ivory">
                Meet the studio
              </ArrowLink>
            </Reveal>
            <Reveal variant="clip" className="order-1 lg:order-2 lg:col-span-7">
              <a href="#design" tabIndex={-1} aria-hidden="true" className="block">
                <div className="zoom relative -mr-5 aspect-[16/10] overflow-hidden sm:-mr-8 lg:mr-0 lg:aspect-[16/9]">
                  <Photo name="exploreDesign" alt="" sizes="(min-width: 1024px) 56vw, 100vw" />
                </div>
              </a>
            </Reveal>
          </article>
        </div>
      </div>
    </section>
  )
}
