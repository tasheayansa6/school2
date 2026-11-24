export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = 'center',
}) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <div className={`mx-auto flex max-w-3xl flex-col ${alignClass}`}>
      {eyebrow ? (
        <p
          className={`text-sm font-bold tracking-[0.14em] uppercase ${
            light ? 'text-white/65' : 'text-red'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-serif text-2xl font-bold md:text-[34px] ${
          eyebrow ? 'mt-3' : ''
        } ${light ? 'text-white' : 'text-navy'}`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-[3px] w-[72px] ${light ? 'bg-red' : 'bg-red'}`}
        aria-hidden
      />
      {subtitle ? (
        <p
          className={`mt-5 max-w-2xl text-[15px] leading-7 ${
            light ? 'text-white/80' : 'text-body'
          } ${align === 'center' ? 'text-center' : 'text-left'}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
