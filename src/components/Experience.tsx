import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { SectionLabel } from './ui'

const NOTES = [
  ['Plants', 'One of the most diverse selections in Phoenix, from desert natives to leafy oddballs.'],
  ['Pottery', 'Pots with a point of view. The kind you plan a whole corner around.'],
  ['People', 'A crew of plant people who know what actually survives a summer here.'],
] as const

export function Experience() {
  return (
    <section
      id="nursery"
      aria-labelledby="experience-title"
      className="overflow-x-clip bg-ivory pt-20 pb-24 text-forest lg:pt-36 lg:pb-40"
    >
      <div className="wrap grid gap-x-8 gap-y-14 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:pt-6">
          <Reveal>
            <SectionLabel n="01">The Dig It experience</SectionLabel>
            <h2
              id="experience-title"
              className="display mt-6 text-[clamp(2.75rem,13.5vw,5.5rem)] lg:text-[clamp(3.25rem,5.9vw,6.75rem)]"
            >
              A plant shop with a{' '}
              <span className="accent text-terracotta-deep">personality</span> of its own.
            </h2>
          </Reveal>
          <Reveal index={1}>
            <p className="mt-8 max-w-[30rem] text-lg leading-relaxed lg:text-xl">
              Part nursery, part art-filled hideout. Come for one plant, stay for an hour,
              leave with something you didn&rsquo;t know existed.
            </p>
          </Reveal>
        </div>

        {/* Photo pair: wide environment + overlapping detail */}
        <div className="relative pb-[22%] lg:col-span-7 lg:col-start-6 lg:pb-[16%] lg:pl-10">
          <Reveal variant="clip">
            <figure className="relative -mr-5 aspect-[4/3] overflow-hidden sm:-mr-8 lg:-mr-12 2xl:mr-0">
              <div className="drift absolute inset-0">
                <Photo name="experienceWide" sizes="(min-width: 1024px) 58vw, 100vw" />
              </div>
            </figure>
          </Reveal>
          <Reveal
            index={2}
            className="absolute bottom-0 left-0 w-[44%] lg:-left-[12%] lg:w-[38%]"
          >
            <figure className="zoom relative aspect-[3/4] overflow-hidden outline outline-[10px] outline-ivory lg:outline-[14px]">
              <Photo name="experienceDetail" sizes="(min-width: 1024px) 22vw, 44vw" />
            </figure>
          </Reveal>
          <p className="label absolute right-0 bottom-[6%] max-w-[46%] text-right text-forest/70 lg:bottom-[5%] lg:max-w-none">
            Fig. 01 &mdash; Wander. Touch things. Ask questions.
          </p>
        </div>
      </div>

      <div className="wrap mt-16 lg:mt-28">
        <dl className="grid border-t border-forest/20 md:grid-cols-3">
          {NOTES.map(([term, detail], index) => (
            <Reveal
              key={term}
              index={index}
              className="flex gap-5 border-b border-forest/20 py-6 md:block md:border-b-0 md:py-8 md:pr-10"
            >
              <dt className="display w-28 flex-none text-[1.75rem] md:w-auto md:text-4xl">
                {term}
              </dt>
              <dd className="max-w-xs leading-relaxed text-forest/85 md:mt-3">{detail}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
