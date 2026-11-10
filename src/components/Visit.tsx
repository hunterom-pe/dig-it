import { site } from '../data/site'
import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { Button, SectionLabel, TextLink } from './ui'

export function Visit() {
  const { address, hours, phone, email, links } = site

  return (
    <section
      id="visit"
      aria-labelledby="visit-title"
      className="overflow-x-clip bg-terracotta pt-20 pb-24 text-ink lg:pt-32 lg:pb-36"
    >
      <div className="wrap">
        <Reveal>
          <SectionLabel n="06">Come hang out</SectionLabel>
          <h2
            id="visit-title"
            className="display mt-6 text-[clamp(4rem,21vw,9rem)] lg:text-[clamp(7rem,14.5vw,17rem)]"
          >
            Come get <span className="accent">dirty.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-12 lg:mt-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="max-w-md text-xl leading-relaxed lg:text-2xl">
                No appointment, no dress code. Wander in, take your time, and bring your
                plant questions. The crew likes those.
              </p>
            </Reveal>

            <Reveal index={1}>
              <dl className="mt-10 border-t border-ink/30">
                <div className="grid grid-cols-[4.75rem_1fr] gap-4 min-[380px]:grid-cols-[6.5rem_1fr] border-b border-ink/30 py-5">
                  <dt className="label pt-1.5">Find us</dt>
                  <dd>
                    <address className="not-italic">
                      <span className="block font-semibold">{site.name}</span>
                      <span className="display mt-1 block text-[1.625rem] min-[380px]:text-[1.875rem] lg:text-[1.75rem] xl:text-4xl">
                        {address.street}
                      </span>
                      <span className="mt-1 block">
                        {address.city}, {address.state} {address.zip}
                      </span>
                    </address>
                  </dd>
                </div>
                <div className="grid grid-cols-[4.75rem_1fr] gap-4 min-[380px]:grid-cols-[6.5rem_1fr] border-b border-ink/30 py-5">
                  <dt className="label pt-1.5">Hours</dt>
                  <dd>
                    <span className="display block text-[1.625rem] min-[380px]:text-[1.875rem] lg:text-[1.75rem] xl:text-4xl">{hours.time}</span>
                    <span className="mt-1 block">{hours.days}</span>
                  </dd>
                </div>
                <div className="grid grid-cols-[4.75rem_1fr] gap-4 min-[380px]:grid-cols-[6.5rem_1fr] border-b border-ink/30 py-5">
                  <dt className="label pt-1.5">Say hi</dt>
                  <dd className="flex flex-col items-start">
                    <TextLink href={phone.href} className="link-quiet flex min-h-11 items-center font-semibold">
                      {phone.display}
                    </TextLink>
                    <TextLink href={`mailto:${email}`} className="link-quiet flex min-h-11 items-center font-semibold">
                      {email}
                    </TextLink>
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal index={2} className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
              <Button href={links.directions} className="btn-ink">
                Get directions
              </Button>
              <Button href={phone.href} className="btn-outline">
                Call the nursery
              </Button>
            </Reveal>
          </div>

          <div className="relative lg:col-span-6 lg:col-start-7">
            <Reveal variant="clip">
              <figure className="relative -mr-5 aspect-[4/5] overflow-hidden sm:-mr-8 sm:aspect-[4/3] lg:mr-0 lg:aspect-[4/5]">
                <div className="drift absolute inset-0">
                  <Photo name="visit" sizes="(min-width: 1024px) 46vw, 100vw" />
                </div>
              </figure>
            </Reveal>
            {/* Overlapping note card */}
            <Reveal
              index={2}
              className="absolute -bottom-8 left-0 w-[15.5rem] -rotate-3 bg-ivory p-5 text-forest lg:-left-16 lg:bottom-14 lg:w-72 lg:p-6"
            >
              <p className="label text-terracotta-deep">Good to know</p>
              <p className="accent mt-3 text-[1.75rem] leading-[1.05] lg:text-[2rem]">
                Open every single day, {hours.short}.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
