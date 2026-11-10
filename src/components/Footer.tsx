import type { ReactNode } from 'react'
import { site } from '../data/site'
import { TextLink } from './ui'

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="label text-terracotta">{title}</h3>
      <ul className="mt-4">{children}</ul>
    </div>
  )
}

function Item({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <TextLink
        href={href}
        className="flex min-h-10 items-center text-[1.0625rem] text-ivory/90 underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:text-ivory hover:decoration-current"
      >
        {children}
      </TextLink>
    </li>
  )
}

export function Footer() {
  const { address, hours, phone, email, links, concept } = site

  return (
    <footer className="overflow-hidden bg-forest text-ivory">
      <div className="wrap pt-16 lg:pt-24">
        <div className="grid gap-x-8 gap-y-12 lg:grid-cols-12">
          <p className="display max-w-[12ch] text-[clamp(2.75rem,11vw,4.5rem)] lg:col-span-5 lg:text-[clamp(3rem,4.6vw,5.25rem)]">
            Go on. Grow a little <span className="accent text-terracotta">wild.</span>
          </p>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:col-span-7"
          >
            <Column title="Explore">
              <Item href="#nursery">The Nursery</Item>
              <Item href="#workshops">Workshops</Item>
              <Item href="#design">{site.designStudioName}</Item>
              <Item href="#events">Private Events</Item>
              <Item href={links.giftCards}>Gift Cards</Item>
              <Item href={links.crew}>Our Crew</Item>
            </Column>
            <Column title="Visit">
              <Item href={links.directions}>
                <span>
                  {address.street}
                  <br />
                  {address.city}, {address.state} {address.zip}
                </span>
              </Item>
              <li className="py-2 text-[1.0625rem] text-ivory/90">
                {hours.time}
                <br />
                {hours.days}
              </li>
              <Item href="#visit">Plan your visit</Item>
            </Column>
            <Column title="Connect">
              <Item href={links.instagram}>Instagram</Item>
              <Item href={links.facebook}>Facebook</Item>
              <Item href={`mailto:${email}`}>{email}</Item>
              <Item href={phone.href}>{phone.display}</Item>
            </Column>
          </nav>
        </div>
      </div>

      {/* Oversized sign-off, cropped by the bottom edge of the page */}
      <p
        aria-hidden="true"
        className="display mt-14 -mb-[0.2em] text-center text-[45vw] leading-[0.8] whitespace-nowrap text-ivory/[0.09] select-none lg:mt-20"
      >
        Dig It
      </p>

      <div className="relative border-t border-ivory/15 bg-forest">
        <div className="wrap flex flex-col gap-2 py-5 text-[0.8125rem] leading-relaxed text-ivory/75 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <p>
            <strong className="font-semibold text-ivory">Unofficial design concept.</strong>{' '}
            An independent exploration by{' '}
            <TextLink href={concept.studioUrl} className="link-quiet text-ivory">
              {concept.studio}
            </TextLink>
            , not affiliated with or endorsed by {site.name}. The official site is{' '}
            <TextLink href={links.official} className="link-quiet text-ivory">
              digphx.com
            </TextLink>
            .
          </p>
          <p className="flex-none">
            Placeholder photography via{' '}
            <TextLink href="https://unsplash.com/license" className="link-quiet text-ivory">
              Unsplash
            </TextLink>
          </p>
        </div>
      </div>
    </footer>
  )
}
