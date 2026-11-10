import { site } from '../data/site'
import { formatWorkshopDate, getUpcomingWorkshops, type Workshop } from '../data/workshops'
import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { ArrowLink, Button, SectionLabel } from './ui'

function WorkshopRow({ workshop, index }: { workshop: Workshop; index: number }) {
  const date = formatWorkshopDate(workshop.date)

  return (
    <Reveal index={index}>
      <article className="group grid gap-x-8 gap-y-5 border-t border-forest/25 py-7 md:grid-cols-12 md:items-center lg:py-9">
        {/* Date */}
        <time
          dateTime={date.iso}
          className="flex items-baseline gap-3 md:col-span-2 md:block"
          aria-label={date.long}
        >
          <span className="label block text-terracotta-deep">{date.month}</span>
          <span className="display block text-[4.5rem] leading-[0.8] md:mt-2 lg:text-[6.5rem]">
            {date.day}
          </span>
          <span className="label block text-forest/70 md:mt-3">{date.weekday}</span>
        </time>

        {/* Image */}
        <div className="zoom relative aspect-[16/10] overflow-hidden md:col-span-3 md:aspect-[4/3]">
          <Photo name={workshop.image} alt="" sizes="(min-width: 768px) 25vw, 100vw" />
        </div>

        {/* Details */}
        <div className="md:col-span-4 lg:col-span-4">
          <h3 className="display text-[2.25rem] lg:text-5xl">{workshop.title}</h3>
          <p className="mt-3 max-w-md text-forest/85">{workshop.blurb}</p>
          <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-[0.9375rem] font-semibold">
            <div>
              <dt className="sr-only">Time</dt>
              <dd>{workshop.time}</dd>
            </div>
            {workshop.price && (
              <div>
                <dt className="sr-only">Price</dt>
                <dd>{workshop.price}</dd>
              </div>
            )}
            <div>
              <dt className="sr-only">Location</dt>
              <dd className="font-normal text-forest/75">at {site.name}</dd>
            </div>
          </dl>
        </div>

        {/* Action */}
        <div className="md:col-span-3 md:justify-self-end">
          <Button href={workshop.registerUrl} className="w-full md:w-auto">
            Register<span className="sr-only">: {workshop.title}</span>
          </Button>
        </div>
      </article>
    </Reveal>
  )
}

/** Shown when no dated workshops remain in data/workshops.ts. Makes no claims. */
function NoListings() {
  return (
    <Reveal>
      <div className="grid gap-8 border-y border-forest/25 py-10 md:grid-cols-12 md:items-center">
        <div className="zoom relative aspect-[16/10] overflow-hidden md:col-span-5">
          <Photo name="workshopGeneric" alt="" sizes="(min-width: 768px) 40vw, 100vw" />
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <h3 className="display text-4xl lg:text-6xl">The calendar lives on digphx.com</h3>
          <p className="mt-4 max-w-md text-lg text-forest/85">
            Dates, prices and sign-ups for every class are posted on the official workshops
            page.
          </p>
          <Button href={site.links.workshops} className="mt-6">
            See current workshops
          </Button>
        </div>
      </div>
    </Reveal>
  )
}

export function Workshops() {
  const upcoming = getUpcomingWorkshops(3)

  return (
    <section
      id="workshops"
      aria-labelledby="workshops-title"
      className="overflow-x-clip bg-ivory pt-20 pb-24 text-forest lg:pt-32 lg:pb-36"
    >
      <div className="wrap">
        <Reveal className="grid items-end gap-x-8 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionLabel n="03">Upcoming workshops</SectionLabel>
            <h2
              id="workshops-title"
              className="display mt-6 text-[clamp(3.5rem,17.5vw,7rem)] lg:text-[clamp(5rem,9.5vw,11rem)]"
            >
              Get your hands <span className="accent text-terracotta-deep">dirty.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-3">
            <p className="max-w-sm text-lg leading-relaxed">
              Small, hands-on classes at the nursery. Materials are covered, mess is
              encouraged, and you go home with what you made.
            </p>
            <Button href={site.links.workshops} className="btn-ink mt-6">
              View all workshops
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 lg:mt-20">
          {upcoming.length > 0 ? (
            <div className="border-b border-forest/25">
              {upcoming.map((workshop, index) => (
                <WorkshopRow key={workshop.registerUrl} workshop={workshop} index={index} />
              ))}
            </div>
          ) : (
            <NoListings />
          )}
        </div>

        <Reveal className="mt-8 flex flex-wrap items-center justify-between gap-x-10 gap-y-2">
          <p className="max-w-xl text-[0.9375rem] text-forest/75">
            Registration happens on digphx.com. Seats are limited, so check the official page
            for current availability.
          </p>
          <ArrowLink href={site.links.privateEvents}>Book a private plant workshop</ArrowLink>
        </Reveal>
      </div>
    </section>
  )
}
