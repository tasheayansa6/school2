import { useState } from 'react'
import { COURSE_TABS } from '../data'

const TAB_ICONS = {
  language: 'fa-solid fa-book',
  math: 'fa-solid fa-calculator',
  science: 'fa-solid fa-atlas',
  social: 'fa-solid fa-globe-americas',
  electives: 'fa-solid fa-cubes',
}

export default function Courses() {
  const [active, setActive] = useState(0)
  const tab = COURSE_TABS[active]

  return (
    <section id="courses" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-red">
            Tailored Course Recommendations
          </p>
          <h2 className="mt-3 font-serif text-2xl font-bold text-navy md:text-4xl">
            Explore our Courses
          </h2>
          <div className="mt-4 h-[3px] w-[72px] bg-red" aria-hidden />
          <p className="mt-5 text-[15px] leading-7 text-body">
            Browse core and elective courses for secondary school (grades 9–12).
            After enrollment, our team reviews transcripts and assigns focused
            course groups so students stay organized.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {COURSE_TABS.map((item, i) => {
            const isActive = active === i
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                className={`relative flex flex-col items-center justify-center gap-2 rounded-[5px] border px-[18px] py-[18px] transition ${
                  isActive
                    ? 'border-[#152c5b] bg-[#152c5b] text-white'
                    : 'border-[#e6e6e6] bg-white text-[#202426] hover:border-navy/30'
                }`}
              >
                <i
                  className={`${TAB_ICONS[item.id]} text-[42px] leading-none`}
                  aria-hidden
                />
                <span className="text-center text-[12px] font-bold tracking-wide uppercase md:text-[13px]">
                  {item.label}
                </span>
                {isActive && (
                  <span
                    className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[8px] border-t-[8px] border-x-transparent border-t-[#152c5b]"
                    aria-hidden
                  />
                )}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tab.courses.map((course) => (
            <article
              key={course}
              className="rounded-[5px] border border-[#e6e6e6] bg-white p-6 shadow-[0_4px_18px_rgba(0,0,0,0.06)]"
            >
              <h3 className="font-serif text-lg font-bold text-navy">
                {course}
              </h3>
              <div className="mt-4 space-y-2 text-sm text-body">
                <p>
                  <span className="font-semibold text-ink">Credits: </span>1.0
                </p>
                <p>
                  <span className="font-semibold text-ink">Course Type: </span>
                  Standard High School
                </p>
                <p>
                  <span className="font-semibold text-ink">Course Subject: </span>
                  {tab.label}
                </p>
              </div>
              <a
                href="#info"
                className="mt-5 inline-flex text-sm font-bold text-red hover:underline"
              >
                View Course Details →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
