import { FEATURES } from '../data'

export default function FeatureCards() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy-deep py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(191,4,4,0.18),transparent_45%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center text-white">
          <p className="text-sm font-bold tracking-[0.14em] text-white/60 uppercase">
            Why families choose Summit
          </p>
          <h2 className="mt-3 font-serif text-2xl font-bold md:text-3xl">
            Strong academics. Caring community. Real results.
          </h2>
          <div className="mt-4 h-[3px] w-[72px] bg-red" aria-hidden />
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {FEATURES.map((feature, i) => (
            <article
              key={feature.title}
              className="group flex flex-col items-center text-center text-white"
            >
              <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-white p-3 shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                <img
                  src={feature.image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-xs font-bold tracking-[0.16em] text-red/90 uppercase">
                0{i + 1}
              </p>
              <h3 className="mt-2 text-lg font-bold md:text-xl">{feature.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/80 md:text-[15px]">
                {feature.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
