import { X } from 'lucide-react'
import { useEffect, useRef, type CSSProperties } from 'react'
import { fullAddress, nav, site } from '../data/site'
import { Button, TextLink } from './ui'

type Props = {
  onClose: () => void
  upcoming: number
}

const FOCUSABLE = 'a[href], button:not([disabled])'

/**
 * Full-screen navigation for small screens.
 * Modal dialog: focus moves in on open, is trapped while open, Escape closes,
 * and the page behind does not scroll.
 */
export function MobileMenu({ onClose, upcoming }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return
      const items = [...panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)]
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <div
      ref={panelRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="menu-in fixed inset-0 z-50 flex flex-col overflow-y-auto bg-forest text-ivory lg:hidden"
    >
      <div className="wrap flex h-14 flex-none items-center justify-between">
        <span className="inline-flex items-baseline gap-2 leading-none whitespace-nowrap">
          <span className="display text-[1.75rem]">Dig It</span>
          <span className="accent text-[1.35rem]">gardens</span>
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="-mr-2 flex h-11 items-center gap-2 px-2"
        >
          <span className="label">Close</span>
          <X size={22} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Primary" className="wrap flex-1 pt-6">
        <ul>
          {nav.map((item, index) => (
            <li
              key={item.id}
              className="rise border-b border-ivory/15"
              style={{ '--i': index + 1 } as CSSProperties}
            >
              <a
                href={`#${item.id}`}
                onClick={onClose}
                className="flex items-baseline gap-4 py-3"
              >
                <span aria-hidden="true" className="label w-6 text-terracotta">
                  0{index + 1}
                </span>
                <span className="display text-[clamp(2.75rem,15vw,4.5rem)]">{item.label}</span>
                {item.id === 'workshops' && upcoming > 0 && (
                  <span className="label ml-auto self-center bg-terracotta px-2 py-1 text-ink">
                    {upcoming} upcoming
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="wrap fade-in flex-none pt-8 pb-8" style={{ '--i': 6 } as CSSProperties}>
        <p className="text-[0.9375rem] leading-snug text-ivory/80">
          {fullAddress}
          <br />
          {site.hours.days}, {site.hours.time}
        </p>
        <div className="mt-5 grid gap-3">
          <Button href={site.links.directions} className="btn-on-dark w-full">
            Get directions
          </Button>
          <TextLink
            href={site.phone.href}
            className="label flex min-h-11 items-center justify-center text-ivory"
          >
            Call {site.phone.display}
          </TextLink>
        </div>
      </div>
    </div>
  )
}
