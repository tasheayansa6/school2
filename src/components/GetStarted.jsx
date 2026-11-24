import { ENROLL_STEPS } from '../data'
import FutureReady from './FutureReady'
import RequestInfoCard from './RequestInfoCard'

export default function GetStarted() {
  return (
    <section id="enroll" className="bg-white">
      <div className="px-4 py-14 md:py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-serif text-[32px] font-bold text-ink md:text-[42px]">
            Getting Started is Simple!
          </h2>
          <div className="mt-4 h-[3px] w-[72px] bg-red" aria-hidden />
          <p className="mt-5 text-[15px] leading-7 text-body md:text-[16px]">
            At Summit Secondary School, enrollment is quick and easy. You can
            choose to enroll on your own or let us guide you through the
            process. Whether you prefer to do it yourself or need a little help,
            we&apos;re here for you every step of the way.
          </p>
        </div>
      </div>

      <div className="bg-[#e8f2f5] py-12 md:py-16">
        <FutureReady embedded />
      </div>

      <div className="bg-white px-4 py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {ENROLL_STEPS.map((step, i) => (
            <article
              key={step.title}
              className="rounded-[10px] border-2 border-[#ca0300] bg-white p-8 shadow-[6px_6px_18px_rgba(0,0,0,0.22)]"
            >
              <p className="text-[15px] font-medium text-body">Step #{i + 1}</p>
              <h3 className="mt-3 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-body">{step.copy}</p>
              {i === 0 && (
                <a
                  href="#info"
                  className="mt-5 inline-flex rounded-full border-2 border-[#910204] bg-[#910204] px-5 py-2 text-[15px] font-medium text-white transition hover:bg-red-deep"
                >
                  Enroll Now
                </a>
              )}
            </article>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#cfe8ec] via-[#d9eef1] to-[#eaf6f8] px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <RequestInfoCard />
        </div>
      </div>
    </section>
  )
}
