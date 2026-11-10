import { site } from '../data/site'
import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { Button, SectionLabel } from './ui'

// Wording follows how digphx.com describes the studio: a boutique landscape
// design + build studio inside the nursery, backed by horticultural knowledge.
const SERVICES = [
  ['Design', 'A plan drawn for your space, your light and the way you actually live outside.'],
  ['Build', 'Design and implementation under one roof, from first sketch to final plant.'],
  ['Plant knowledge', 'Horticultural know-how from people who grow in this climate every day.'],
] as const

export function DesignStudio() {
  return (
    <section
      id="design"
      aria-labelledby="design-title"
      className="overflow-x-clip bg-ink text-ivory"
    >
      <div className="mx-auto grid max-w-[120rem] lg:grid-cols-12">
        {/* Lead image: full-bleed, tall */}
        <Reveal variant="clip" className="lg:col-span-6">
          <figure className="relative h-full min-h-[26rem] overflow-hidden sm:min-h-[34rem] lg:min-h-[54rem]">
            <div className="drift absolute inset-0">
              <Photo name="designLead" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <figcaption className="label absolute bottom-0 left-0 bg-ink px-4 py-3 text-ivory/80">
              Concept imagery &mdash; not a Dig It Design project
            </figcaption>
          </figure>
        </Reveal>

        <div className="px-5 pt-14 pb-20 sm:px-8 lg:col-span-6 lg:px-16 lg:pt-32 lg:pb-28 xl:px-24">
          <Reveal>
            <SectionLabel n="04">{site.designStudioName}</SectionLabel>
            <h2
              id="design-title"
              className="display mt-6 text-[clamp(3.25rem,15.5vw,6rem)] lg:text-[clamp(4rem,6.6vw,8rem)]"
            >
              Good design <span className="accent text-teal">grows</span> here.
            </h2>
            <p className="mt-8 max-w-[30rem] text-lg leading-relaxed text-ivory/85 lg:text-xl">
              {site.designStudioName} is the boutique landscape design and build studio
              inside the nursery. Outdoor spaces made for the desert, not in spite of it.
            </p>
          </Reveal>

          <dl className="mt-10 border-t border-ivory/20 lg:mt-14">
            {SERVICES.map(([term, detail], index) => (
              <Reveal
                key={term}
                index={index}
                className="grid gap-x-6 gap-y-1 border-b border-ivory/20 py-5 sm:grid-cols-[11rem_1fr]"
              >
                <dt className="label pt-1 text-teal">{term}</dt>
                <dd className="text-ivory/85">{detail}</dd>
              </Reveal>
            ))}
          </dl>

          <Reveal className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href={site.links.design} className="btn-teal">
              Request a consultation
            </Button>
            <p className="max-w-[15rem] text-sm text-ivory/70">
              The inquiry form is on digphx.com. The studio says it replies within 24 hours.
            </p>
          </Reveal>

          {/* Second image, pulled left so it overlaps the lead photo on desktop */}
          <Reveal variant="clip" className="mt-14 lg:mt-20 lg:-ml-40 xl:-ml-56">
            <figure className="zoom relative aspect-[16/10] overflow-hidden lg:outline lg:outline-[14px] lg:outline-ink">
              <Photo name="designDetail" sizes="(min-width: 1024px) 48vw, 100vw" />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
