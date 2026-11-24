const EXCELLENCE = [
  {
    title: 'Rigorous Academics',
    copy: 'A structured secondary curriculum across core subjects and electives, built for grades 9–12.',
    icon: 'fa-solid fa-book-open',
  },
  {
    title: 'Secondary Pathways',
    copy: 'Clear diploma tracks that help students grow in character, skills, and readiness for life after graduation.',
    icon: 'fa-solid fa-compass',
  },
  {
    title: 'Trusted Standards',
    copy: 'Programs held to the same rigorous expectations as respected public secondary schools.',
    icon: 'fa-solid fa-award',
  },
  {
    title: 'Student Support',
    copy: 'Dedicated coaching, clear progress tracking, and family communication throughout the journey.',
    icon: 'fa-solid fa-user-graduate',
  },
]

export default function Accreditation() {
  return (
    <section id="accreditation" className="bg-soft py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_16px_40px_rgba(2,48,89,0.08)]">
          <div className="bg-gradient-to-r from-navy to-navy-deep px-6 py-8 text-white md:px-10 md:py-10">
            <p className="text-xs font-bold tracking-[0.16em] text-white/70 uppercase">
              Our standard
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold md:text-3xl">
              Excellence in Education
            </h2>
            <div className="mt-4 h-[3px] w-16 bg-red" aria-hidden />
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80 md:text-[15px]">
              A secondary school experience for grades 9–12 — academic depth,
              character growth, and readiness for what comes next.
            </p>
          </div>

          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {EXCELLENCE.map((item, i) => (
              <article
                key={item.title}
                className={`border-t border-line p-6 md:p-7 ${
                  i % 2 === 1 ? 'sm:border-l' : ''
                } ${i >= 2 ? 'lg:border-l' : ''} lg:border-t-0`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-red">
                  <i className={`${item.icon} text-lg`} aria-hidden />
                </span>
                <h3 className="mt-4 text-[15px] font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-body">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
