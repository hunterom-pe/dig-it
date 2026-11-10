/**
 * IMAGERY — every photo on the page is declared here.
 *
 * ALL of these are PLACEHOLDERS: free-licence photographs from Unsplash
 * (https://unsplash.com/license), served from Unsplash's own CDN. None of them
 * show Dig It Gardens or Dig It Design work.
 *
 * To swap in real photography, replace `id` with a local path or full URL
 * (e.g. "/photos/nursery-entrance.jpg") and update `alt`. Anything that does
 * not start with "photo-" is used as-is, with no CDN resizing.
 */
export type SiteImage = {
  /** Unsplash CDN id, or a local path / absolute URL for real photography */
  id: string
  alt: string
  /** Unsplash page for attribution */
  source: string
  /** CSS object-position, to protect the crop */
  focus?: string
}

export const images = {
  hero: {
    id: 'photo-1774446931753-5c28039f1a41',
    alt: 'A sunlit nursery courtyard overflowing with hanging baskets, potted plants and wooden stools',
    source: 'https://unsplash.com/photos/HH-GUh9SORk',
    focus: '50% 55%',
  },
  experienceWide: {
    id: 'photo-1525033842647-a956848705f0',
    alt: 'An eclectic greenhouse shop crowded with plants, pots, crates and hand-lettered signs',
    source: 'https://unsplash.com/photos/gIXwJz10A9Q',
  },
  experienceDetail: {
    id: 'photo-1629380321696-99d97eaa492a',
    alt: 'Wooden shelves lined with hand-glazed ceramic pots in turquoise, cream and clay',
    source: 'https://unsplash.com/photos/X7HWXvoUrDI',
  },
  exploreNursery: {
    id: 'photo-1641816482997-515cdf9bb054',
    alt: 'Big glossy monstera and tropical leaves catching warm light under a timber roof',
    source: 'https://unsplash.com/photos/rgoAwoKaU6Y',
  },
  exploreWorkshops: {
    id: 'photo-1544928147-79a2dbc1f389',
    alt: 'A group gathered around a long table covered in greenery, making arrangements together',
    source: 'https://unsplash.com/photos/TdpSX7XAcKo',
  },
  exploreDesign: {
    id: 'photo-1762308759606-572c08ad6827',
    alt: 'Sculptural yuccas and an agave planted against a white stucco wall',
    source: 'https://unsplash.com/photos/b3ULHCrnDnY',
  },
  workshopA: {
    id: 'photo-1540909841243-4484853a8285',
    alt: 'Rosette succulents in pinks and greens arranged on weathered wood',
    source: 'https://unsplash.com/photos/rhleTEzH3Ak',
  },
  workshopB: {
    id: 'photo-1602269222671-99950cf86a5c',
    alt: 'Close view of blue-green and purple echeveria succulents',
    source: 'https://unsplash.com/photos/fdj91P1gZx0',
  },
  workshopGeneric: {
    id: 'photo-1622383563227-04401ab4e5ea',
    alt: 'Gloved hands settling a seedling into dark soil',
    source: 'https://unsplash.com/photos/CbZh3kaPxrE',
  },
  designLead: {
    id: 'photo-1766181465962-8cfd82c30bfb',
    alt: 'A towering cardon cactus beside a pale modern building and gravel walkway',
    source: 'https://unsplash.com/photos/vPZealPlqlQ',
    focus: '50% 40%',
  },
  designDetail: {
    id: 'photo-1761354295874-caa3a2fc2270',
    alt: 'Agaves planted in red earth along a sunlit block wall',
    source: 'https://unsplash.com/photos/rEdRQB8-YqE',
  },
  visit: {
    id: 'photo-1563746870516-07dc33b40b92',
    alt: 'A bright green cactus against a pink painted block wall',
    source: 'https://unsplash.com/photos/y_yKkAYsQRQ',
  },
} satisfies Record<string, SiteImage>

export type ImageKey = keyof typeof images
