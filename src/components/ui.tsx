import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

const isExternal = (href: string) => /^https?:/.test(href)

/** Adds safe new-tab behaviour (and a screen-reader hint) to off-site links. */
const externalProps = (href: string) =>
  isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}

const NewTabHint = ({ href }: { href: string }) =>
  isExternal(href) ? <span className="sr-only"> (opens in a new tab)</span> : null

type LinkProps = {
  href: string
  children: ReactNode
  className?: string
}

/** Square-cut button link. Variants: default (terracotta), btn-outline, btn-ink, btn-teal. */
export function Button({ href, children, className = '' }: LinkProps) {
  const Icon = isExternal(href) ? ArrowUpRight : ArrowRight
  return (
    <a href={href} className={`btn ${className}`} {...externalProps(href)}>
      <span>
        {children}
        <NewTabHint href={href} />
      </span>
      <Icon size={18} strokeWidth={2.25} aria-hidden="true" />
    </a>
  )
}

/** Underlined text link with an arrow. */
export function ArrowLink({ href, children, className = '' }: LinkProps) {
  const Icon = isExternal(href) ? ArrowUpRight : ArrowRight
  return (
    <a href={href} className={`link-arrow ${className}`} {...externalProps(href)}>
      <span>
        {children}
        <NewTabHint href={href} />
      </span>
      <Icon size={16} strokeWidth={2.25} aria-hidden="true" />
    </a>
  )
}

/** Plain external/internal text link with the same new-tab handling. */
export function TextLink({ href, children, className = '' }: LinkProps) {
  return (
    <a href={href} className={className} {...externalProps(href)}>
      {children}
      <NewTabHint href={href} />
    </a>
  )
}

/** Numbered editorial section label, e.g. "(02) Explore Dig It". */
export function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <p className="label flex items-center gap-3">
      <span aria-hidden="true" className="tabular-nums opacity-60">
        ({n})
      </span>
      <span>{children}</span>
    </p>
  )
}

/** The page's one recurring graphic mark: an eight-point spark. */
export function Spark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M12 1v22M1 12h22M4.2 4.2l15.6 15.6M19.8 4.2 4.2 19.8"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  )
}
