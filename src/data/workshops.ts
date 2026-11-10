import { images, type ImageKey } from './images'

/**
 * WORKSHOPS — edit this file to update the homepage. No component changes needed.
 *
 * - Add, remove or reorder entries freely. The page shows the next three by date.
 * - Entries whose date has passed are hidden automatically, so a stale listing
 *   is never shown as "upcoming". With none left, the section falls back to a
 *   preview that points at the official workshops page.
 * - `registerUrl` must be a real booking destination. There is no on-site checkout.
 *
 * Both entries below were read from digphx.com/workshops-events on 2026-11-09.
 * CONFIRM availability with the owners; seats can sell out.
 */
export type Workshop = {
  title: string
  /** YYYY-MM-DD, local Phoenix date */
  date: string
  /** e.g. "10:00 AM – 11:00 AM" */
  time: string
  /** Leave undefined if the price is not published */
  price?: string
  blurb: string
  registerUrl: string
  /** Key from data/images.ts. Placeholder photography until real photos exist. */
  image: ImageKey
}

export const workshops: Workshop[] = [
  {
    title: 'Plant Your Pumpkin',
    date: '2026-11-21',
    time: '10:00 AM – 11:00 AM',
    price: '$60 per person',
    blurb:
      'A Thanksgiving centerpiece you build yourself: pumpkin, succulents, moss and all the trimmings. Light bites and drinks included.',
    registerUrl: 'https://www.digphx.com/workshops-events/pumpkinsucculent',
    image: 'workshopA',
  },
  {
    title: 'Succulent Wreath Workshop',
    date: '2026-12-05',
    time: '10:00 AM – 11:00 AM',
    price: '$75 per person',
    blurb:
      'Build a living wreath to hang through the holidays and keep growing long after.',
    registerUrl: 'https://www.digphx.com/workshops-events/succulentw',
    image: 'workshopB',
  },
]

const parseLocalDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}

/** Next `limit` workshops that have not happened yet, soonest first. */
export function getUpcomingWorkshops(limit = 3, now = new Date()): Workshop[] {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return workshops
    .filter((w) => images[w.image] && parseLocalDate(w.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, limit)
}

export function formatWorkshopDate(iso: string) {
  const date = parseLocalDate(iso)
  return {
    iso,
    month: date.toLocaleDateString('en-US', { month: 'short' }),
    day: date.toLocaleDateString('en-US', { day: 'numeric' }),
    weekday: date.toLocaleDateString('en-US', { weekday: 'long' }),
    long: date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
  }
}
