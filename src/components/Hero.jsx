export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[min(88vh,780px)] overflow-hidden bg-navy"
    >
      <img
        src="/hero-students.jpg"
        alt="Summit Secondary School students"
        className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy/20 via-transparent to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[min(88vh,780px)] max-w-7xl items-end px-4 pb-16 pt-28 md:items-center md:pb-24 md:pt-20">
        <div className="reveal max-w-xl rounded-2xl bg-navy/30 px-6 py-7 text-white shadow-[0_8px_28px_rgba(2,48,89,0.18)] backdrop-blur-[1.5px] sm:px-8 sm:py-8">
          <p className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-[46px]">
            Summit Secondary School
          </p>
          <div className="mt-4 h-[3px] w-16 bg-red" aria-hidden />
          <p className="mt-4 text-xs font-bold tracking-[0.16em] text-white/85 uppercase md:text-[13px]">
            Secondary school · Grades 9–12
          </p>
          <h1 className="mt-4 max-w-lg font-serif text-[26px] leading-[1.2] font-bold md:text-[34px]">
            A focused path through secondary school to graduation
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-7 text-white/90 md:text-base">
            Strong academics, caring teachers, and a close school community —
            preparing every student for life after high school.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#enroll"
              className="rounded-full bg-red-btn px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(191,4,4,0.35)] transition hover:-translate-y-0.5 hover:bg-red-deep"
            >
              Start enrollment
            </a>
            <a
              href="#future-ready"
              className="rounded-full border border-white/50 bg-white/15 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-navy"
            >
              Explore programs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
