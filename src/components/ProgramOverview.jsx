import { HOW_IT_WORKS } from '../data'
import LeadForm from './LeadForm'

export default function ProgramOverview() {
  return (
    <section id="overview" className="bg-[#f7f8fa] py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12">
        <div>
          <p className="text-sm font-bold text-red md:text-[15px]">
            Program Overview
          </p>
          <h2 className="mt-2 font-serif text-[28px] leading-tight font-bold text-navy md:text-[36px]">
            A clear secondary path — mastery, support, progress
          </h2>
          <div className="mt-4 h-[3px] w-16 bg-red" aria-hidden />

          <div className="mt-5 space-y-4 text-[15px] leading-7 text-body">
            <p>
              Our{' '}
              <strong className="font-semibold text-ink">
                secondary school programs (grades 9–12)
              </strong>{' '}
              help students move through coursework with clarity. Competency-based
              options let learners demonstrate mastery and advance with focus —
              not busywork.
            </p>
            <p>
              Courses open with a short assessment. Pass to earn credit and move
              forward. Need more practice? Continue through lessons with study
              guides and coaching support.
            </p>
          </div>

          <h3 className="mt-10 font-serif text-xl font-bold text-navy md:text-2xl">
            How it works
          </h3>

          <div className="mt-6 space-y-5">
            {HOW_IT_WORKS.map((item, i) => (
              <div
                key={item.title}
                className="rounded-xl border border-line bg-white p-5 shadow-[0_8px_24px_rgba(2,48,89,0.05)] md:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="text-[16px] font-bold text-navy">
                      {item.title}
                    </h4>
                    <ul className="mt-3 space-y-2 text-[15px] leading-7 text-body">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
