import { useCallback, useEffect, useRef, useState } from 'react'
import { nav, site } from '../data/site'
import { getUpcomingWorkshops } from '../data/workshops'
import { useActiveSection, useHeaderState } from '../hooks/useHeaderState'
import { MobileMenu } from './MobileMenu'

const OBSERVED = ['top', ...nav.map((item) => item.id)]

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label={`${site.name}, back to top`}
      className={`inline-flex min-h-11 items-center gap-2 leading-none whitespace-nowrap ${className}`}
    >
      <span className="display text-[1.75rem] tracking-[-0.02em]">Dig It</span>
      <span className="accent text-[1.35rem]">gardens</span>
    </a>
  )
}

export function Header() {
  const { scrolled, hidden } = useHeaderState()
  const active = useActiveSection(OBSERVED)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const upcoming = getUpcomingWorkshops().length

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    // Return focus to the control that opened the menu
    requestAnimationFrame(() => toggleRef.current?.focus())
  }, [])

  // Leaving the mobile breakpoint with the menu open should not strand it
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onChange = () => desktop.matches && setMenuOpen(false)
    desktop.addEventListener('change', onChange)
    return () => desktop.removeEventListener('change', onChange)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-ivory text-forest transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-expo)] ${
          hidden && !menuOpen ? '-translate-y-full' : ''
        } ${scrolled ? 'shadow-[0_1px_0_rgb(32_56_47/0.14)]' : ''}`}
      >
        <div className="wrap flex h-14 items-center justify-between gap-3 sm:gap-6 lg:h-[4.25rem]">
          <Wordmark />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {nav.map((item) => {
                const current = active === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={current ? 'location' : undefined}
                      className="group relative flex h-11 items-center gap-2 text-[0.8125rem] font-semibold tracking-[0.14em] uppercase"
                    >
                      {item.label}
                      {item.id === 'workshops' && upcoming > 0 && (
                        <span className="grid h-5 min-w-5 place-items-center rounded-full bg-terracotta px-1 text-[0.6875rem] font-bold tracking-normal text-ink">
                          {upcoming}
                          <span className="sr-only"> upcoming</span>
                        </span>
                      )}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-0 bottom-1.5 h-[1.5px] origin-left bg-current transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-x-100 ${
                          current ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {/* Workshops stay one tap away on every screen size */}
            <a
              href="#workshops"
              className="btn min-h-10 px-3.5 py-2 text-[0.6875rem] sm:px-4 lg:min-h-11 lg:px-5 lg:text-xs"
            >
              <span className="sm:hidden">Workshops</span>
              <span className="hidden sm:inline">Book a workshop</span>
            </a>
            <button
              ref={toggleRef}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
              className="-mr-2 flex h-11 items-center gap-2.5 px-2 lg:hidden"
            >
              <span className="label max-[359px]:sr-only">Menu</span>
              <span aria-hidden="true" className="flex w-5 flex-col gap-[5px]">
                <span className="h-[2px] w-full bg-current" />
                <span className="h-[2px] w-3/5 self-end bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && <MobileMenu onClose={closeMenu} upcoming={upcoming} />}
    </>
  )
}
