import { site } from '../data/site'
import { Spark } from './ui'

const ITEMS = [
  site.hours.days,
  site.hours.time,
  'Plants',
  'Pottery',
  'Workshops',
  site.designStudioName,
  site.address.street,
]

function Run({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex flex-none items-center">
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap">
          <span className="display px-5 text-[1.375rem] lg:px-7 lg:text-[1.75rem]">{item}</span>
          <Spark className="h-4 w-4 flex-none lg:h-5 lg:w-5" />
        </li>
      ))}
    </ul>
  )
}

/** Slow ticker of the practical facts: hours, address, what's here. */
export function Marquee() {
  return (
    <div className="marquee overflow-hidden bg-terracotta py-3 text-ink lg:py-4">
      <div className="marquee-track">
        <Run />
        <Run hidden />
      </div>
    </div>
  )
}
