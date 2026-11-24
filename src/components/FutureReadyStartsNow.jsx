export default function FutureReadyStartsNow() {
  return (
    <section
      id="future-ready"
      className="relative overflow-hidden bg-navy py-16 text-white md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(191,4,4,0.28),transparent_45%),radial-gradient(ellipse_at_90%_100%,rgba(255,255,255,0.08),transparent_40%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-red uppercase">
            Secondary school · Grades 9–12
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight md:text-4xl lg:text-[42px]">
            Future Ready Starts Now
          </h2>
          <div className="mt-4 h-[3px] w-16 bg-red" aria-hidden />
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/80 md:text-base">
            Give your student a clear secondary path from grade 9 through
            graduation — strong teaching, caring community, and preparation for
            life after high school.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
            {[
              'Grades 9–12 diploma pathways',
              'Core academics & electives',
              'Career-focused endorsements',
              'Family progress support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red/90 text-[10px]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm md:p-8">
          <p className="text-sm font-semibold text-white">
            Ready to take the next step?
          </p>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Speak with enrollment or request a guide for secondary school
            programs (grades 9–12).
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="#enroll"
              className="inline-flex items-center justify-center rounded-full bg-red px-6 py-3 text-sm font-bold text-white transition hover:bg-red-deep"
            >
              Begin enrollment
            </a>
            <a
              href="#info"
              className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-navy"
            >
              Request information
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
