import { BRAND } from '../brand'

export default function BrandMark({ light = false, compact = false }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-md font-serif text-sm font-bold ${
          light ? 'bg-white text-navy' : 'bg-navy text-white'
        }`}
        aria-hidden
      >
        S
      </span>
      <span className={light ? 'text-white' : 'text-navy'}>
        <span
          className={`block font-serif font-bold leading-tight ${
            compact ? 'text-base' : 'text-lg'
          }`}
        >
          Summit
        </span>
        <span
          className={`block text-[10px] font-semibold tracking-[0.14em] uppercase ${
            light ? 'text-white/70' : 'text-muted'
          }`}
        >
          Secondary School
        </span>
      </span>
      <span className="sr-only">{BRAND.name}</span>
    </span>
  )
}
