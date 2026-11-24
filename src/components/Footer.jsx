import BrandMark from './BrandMark'
import { BRAND } from '../brand'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <BrandMark light />
          <div className="mt-4 h-[3px] w-12 bg-red" aria-hidden />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
            A secondary school community for grades 9–12 — strong academics,
            character, and readiness for life after graduation.
          </p>
          <div className="mt-5 space-y-2 text-sm font-semibold">
            <a href={`tel:${BRAND.phone.replace(/\D/g, '')}`} className="block hover:text-white/80">
              {BRAND.phone}
            </a>
          </div>
        </div>

        <div className="text-sm leading-6 text-white/80">
          <p className="font-bold text-white">Main campus</p>
          <p className="mt-2">
            Admissions Office
            <br />
            Open weekdays 8:00 AM – 5:00 PM
            <br />
            Phone: {BRAND.phone}
          </p>
        </div>

        <div className="text-sm leading-6 text-white/80">
          <p className="font-bold text-white">Visit & enroll</p>
          <p className="mt-2">
            Schedule a campus tour or begin enrollment today.
            <br />
            <a href="#info" className="mt-2 inline-block font-semibold text-white hover:underline">
              Request information →
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/55">
        © {new Date().getFullYear()} {BRAND.name}
      </div>
    </footer>
  )
}
