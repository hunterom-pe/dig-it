/**
 * SINGLE SOURCE OF TRUTH for business details and outgoing links.
 *
 * Everything here was read from the official site (digphx.com) on 2026-11-09.
 * Items marked CONFIRM should be re-checked with the owners before any
 * production launch. Nothing in this file is invented.
 */

export const site = {
  name: 'Dig It Gardens',
  designStudioName: 'Dig It Design',

  // Source: digphx.com/contact-1 — "3015 N. 16th Street / Phoenix, AZ 85016"
  address: {
    street: '3015 N 16th Street',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85016',
  },

  // Source: digphx.com/contact-1 — "Hours: 830AM - 5PM ( 7 Days a Week)"
  // CONFIRM: holiday / summer hours are not published on the site.
  hours: {
    days: 'Open 7 days a week',
    time: '8:30 AM – 5 PM',
    short: '8:30–5',
  },

  // Source: digphx.com/contact-1
  phone: { display: '602.812.7476', href: 'tel:+16028127476' },
  email: 'hello@digphx.com',

  links: {
    official: 'https://www.digphx.com/',
    workshops: 'https://www.digphx.com/workshops-events',
    design: 'https://www.digphx.com/design', // consultation form lives here
    privateEvents: 'https://www.digphx.com/privateevents',
    giftCards: 'https://www.digphx.com/gift-cards',
    crew: 'https://www.digphx.com/about',
    contact: 'https://www.digphx.com/contact-1',
    instagram: 'https://www.instagram.com/digphx/',
    facebook: 'https://www.facebook.com/DigPhx/',
    // Built from the verified address; opens Google Maps directions.
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=Dig+It+Gardens%2C+3015+N+16th+St%2C+Phoenix%2C+AZ+85016',
  },

  concept: {
    studio: 'Hunter Made',
    studioUrl: 'https://huntermade.studio',
  },
} as const

/** In-page navigation. `id` must match a section id on the page. */
export const nav = [
  { id: 'nursery', label: 'Nursery' },
  { id: 'workshops', label: 'Workshops' },
  { id: 'design', label: 'Design' },
  { id: 'events', label: 'Events' },
  { id: 'visit', label: 'Visit' },
] as const

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`
