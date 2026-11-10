import { images, type ImageKey } from '../data/images'

const WIDTHS = [480, 768, 1080, 1440, 2000]

const cdn = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=72&w=${w}`

type Props = {
  name: ImageKey
  /** Standard `sizes` attribute so the browser picks the right file */
  sizes: string
  /** Load eagerly (above the fold only) */
  priority?: boolean
  className?: string
  /** Override alt, e.g. "" when the image is decorative next to a text link */
  alt?: string
}

/** Responsive, lazy-loaded photo that fills its (positioned, sized) parent. */
export function Photo({ name, sizes, priority = false, className = '', alt }: Props) {
  const image: { id: string; alt: string; focus?: string } = images[name]
  const hosted = image.id.startsWith('photo-')

  return (
    <img
      src={hosted ? cdn(image.id, 1080) : image.id}
      srcSet={hosted ? WIDTHS.map((w) => `${cdn(image.id, w)} ${w}w`).join(', ') : undefined}
      sizes={hosted ? sizes : undefined}
      alt={alt ?? image.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      style={{ objectPosition: image.focus }}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  )
}
