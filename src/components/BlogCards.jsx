import { BLOGS } from '../data'

export default function BlogCards() {
  return (
    <section id="blog" className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="text-sm font-bold tracking-[0.14em] text-red uppercase">
            Guides & answers
          </p>
          <h2 className="mt-3 font-serif text-[26px] font-bold text-navy md:text-[29px]">
            Let’s Take It Further
          </h2>
          <div className="mt-4 h-[3px] w-[72px] bg-red" aria-hidden />
          <p className="mt-5 text-[15px] leading-7 text-body">
            Helpful articles for families exploring secondary school pathways
            (grades 9–12) and preparing students for graduation and beyond.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-7">
          {BLOGS.map((post) => (
            <article
              key={post.title}
              className="flex flex-col border-t-[3px] border-red bg-white px-5 py-6 shadow-[0_12px_18px_-6px_rgba(0,0,0,0.3)]"
            >
              <h3 className="text-[17px] leading-snug font-semibold text-navy md:text-[18px]">
                <a href={post.href} className="hover:text-red">
                  {post.title}
                </a>
              </h3>
              <p className="mt-4 flex-1 text-[14px] leading-6 text-body">
                {post.excerpt}
              </p>
              <a
                href={post.href}
                className="mt-5 inline-flex items-center gap-2 self-start py-1.5 pr-6 text-sm font-semibold text-ink hover:text-red"
              >
                Read More
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
