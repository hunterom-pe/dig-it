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
    id: 'photo-1776996875899-a876c90b93db',
    alt: 'Tall columnar cacti in terracotta pots crowding a sunlit greenhouse aisle',
    source: 'https://unsplash.com/photos/oq3KkGkAMwo',
    focus: '50% 60%',
  },
  experienceWide: {
    id: 'photo-1775500320661-18d40844aa1c',
    alt: 'Hundreds of cacti of every shape laid out under a glass greenhouse roof',
    source: 'https://unsplash.com/photos/OiTRHsoa-5Q',
  },
  experienceDetail: {
    id: 'photo-1526037908726-4ce5b8d33f78',
    alt: 'Small succulents in stacked terracotta pots with hard afternoon shadows',
    source: 'https://unsplash.com/photos/GAYPYNe2CXM',
  },
  exploreNursery: {
    id: 'photo-1787095632944-5fb2d0099f13',
    alt: 'Rows of potted cacti and succulents with handwritten plant labels',
    source: 'https://unsplash.com/photos/1h-6-UEI6eI',
  },
  exploreWorkshops: {
    id: 'photo-1634151389979-2dea7604b36f',
    alt: 'Several pairs of hands potting plants together around a soil-covered table',
    source: 'https://unsplash.com/photos/2S1JhFhhSi4',
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
