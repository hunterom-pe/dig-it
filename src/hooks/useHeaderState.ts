import { useEffect, useState } from 'react'

/**
 * Header behaviour on scroll:
 * - `scrolled`: past the top of the page (adds a hairline rule)
 * - `hidden`: user is scrolling down, so tuck the bar away; it returns on scroll up
 */
export function useHeaderState() {
  const [state, setState] = useState({ scrolled: false, hidden: false })

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const update = () => {
      const y = window.scrollY
      const delta = y - lastY
      setState((prev) => {
        const scrolled = y > 24
        let hidden = prev.hidden
        if (y < 160) hidden = false
        else if (delta > 6) hidden = true
        else if (delta < -6) hidden = false
        return scrolled === prev.scrolled && hidden === prev.hidden ? prev : { scrolled, hidden }
      })
      lastY = y
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return state
}

/** Id of the section currently crossing the middle of the viewport. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids])

  return active
}
