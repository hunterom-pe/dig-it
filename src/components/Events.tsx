import { site } from '../data/site'
import { Reveal } from './Reveal'
import { Button, SectionLabel, Spark } from './ui'

/** Compact band introducing private events. Details live on the official page. */
export function Events() {
  return (
    <section
      id="events"
      aria-labelledby="events-title"
      className="overflow-x-clip bg-lavender py-16 text-ink lg:py-24"
    >
      <div className="wrap grid items-end gap-x-8 gap-y-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <SectionLabel n="05">Private events</SectionLabel>
          <h2
            id="events-title"
            className="display mt-6 text-[clamp(2.75rem,13vw,5rem)] lg:text-[clamp(3.5rem,6.4vw,7.5rem)]"
          >
            Weddings, parties
            <Spark className="mx-[0.18em] inline-block h-[0.42em] w-[0.42em] align-[0.12em]" />
            <span className="accent">your thing,</span> among the plants.
          </h2>
        </Reveal>
        <Reveal index={1} className="lg:col-span-4 lg:pb-2">
          <p className="max-w-sm text-lg leading-relaxed">
            The nursery hosts weddings, private and corporate events, and private plant
            workshops. Tell the crew what you have in mind.
          </p>
          <Button href={site.links.privateEvents} className="btn-ink mt-6">
            Private event details
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
