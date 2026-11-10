import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** Stagger index: each step delays the reveal by 90ms */
  index?: number
  /** "clip" wipes the element in from the top; good for photographs */
  variant?: 'rise' | 'clip'
}

/** Reveals its children once, the first time they scroll into view. */
export function Reveal({ children, className = '', index = 0, variant = 'rise' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const style = { '--i': index } as CSSProperties

  // The clip variant animates an inner wrapper: a fully clipped element never
  // reports as intersecting, so the observed node itself must stay unclipped.
  if (variant === 'clip') {
    return (
      <div ref={ref} className={className}>
        <div data-shown={shown} style={style} className="reveal-clip h-full">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} data-shown={shown} style={style} className={`reveal ${className}`}>
      {children}
    </div>
  )
}
