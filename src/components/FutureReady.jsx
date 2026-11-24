export default function FutureReady({ embedded = false }) {
  const cards = (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:gap-10">
      <article className="flex flex-col rounded-[14px] border border-[#d8e2ea] bg-white p-8 shadow-[0_18px_40px_rgba(2,48,89,0.1)] md:p-10 lg:min-h-[560px] lg:p-12">
        <p className="text-3xl" aria-hidden>
          🎓
        </p>
        <h3 className="mt-3 font-serif text-[26px] leading-tight font-bold text-navy md:text-[30px]">
          Future Ready Middle School
        </h3>
        <p className="mt-2 text-sm font-bold tracking-[0.12em] text-red uppercase">
          Grades 6–8
        </p>
        <div className="mt-4 h-[3px] w-14 bg-red" aria-hidden />
        <p className="mt-5 text-[15px] leading-7 text-body">
          Prepare Students for High School, College, and Career Success. Future
          Ready Middle School provides a strong academic foundation while
          helping students discover their interests, strengths, and future
          career pathways. Students learn in a flexible environment while
          receiving personalized support and guidance.
        </p>
        <h4 className="mt-7 text-[16px] font-bold text-navy">
          What Future Ready Middle School Provides
        </h4>
        <ul className="mt-4 flex-1 space-y-3 text-[15px] leading-6 text-body">
          {[
            'Comprehensive grades 6–8 academic program',
            'Career exploration tied to endorsement pathways',
            'Flexible learning with teacher guidance',
            'Dedicated Success Coach support',
            'Weekly parent progress reporting',
            'Middle school-appropriate, safety-first design',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <a
          href="#info"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-navy px-6 py-3.5 text-sm font-bold text-white transition hover:bg-navy-deep"
        >
          Explore Middle School →
        </a>
      </article>

      <article className="flex flex-col rounded-[14px] border border-[#d8e2ea] bg-white p-8 shadow-[0_18px_40px_rgba(2,48,89,0.1)] md:p-10 lg:min-h-[560px] lg:p-12">
        <p className="text-3xl" aria-hidden>
          🚀
        </p>
        <h3 className="mt-3 font-serif text-[26px] leading-tight font-bold text-navy md:text-[30px]">
          Future Ready High School
        </h3>
        <p className="mt-2 text-sm font-bold tracking-[0.12em] text-red uppercase">
          Grades 9–12
        </p>
        <div className="mt-4 h-[3px] w-14 bg-red" aria-hidden />
        <p className="mt-5 text-[15px] leading-7 text-body">
          Earn an Accredited High School Diploma with Career-Focused Pathways.
          Future Ready High School combines accredited academics, career
          endorsements, flexible learning, and personalized coaching to prepare
          students for college, careers, military service, and life after
          graduation.
        </p>
        <h4 className="mt-7 text-[16px] font-bold text-navy">
          The Five Endorsement Areas
        </h4>
        <ul className="mt-4 flex-1 space-y-3 text-[15px] leading-6 text-body">
          {[
            'STEM',
            'Business & Industry',
            'Public Services',
            'Arts & Humanities',
            'Multidisciplinary Studies',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <a
          href="#courses"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-red-btn px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-deep"
        >
          Explore High School →
        </a>
      </article>
    </div>
  )

  if (embedded) {
    return <div className="py-4 md:py-6">{cards}</div>
  }

  return <section className="bg-[#eef5f7] py-16 md:py-20">{cards}</section>
}
