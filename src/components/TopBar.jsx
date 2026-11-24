function IconCircle({ children }) {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/45 text-[11px] font-semibold">
      {children}
    </span>
  )
}

export default function TopBar() {
  return (
    <div className="bg-navy-bar text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 text-sm">
        <div className="flex items-center gap-2">
          <IconCircle>f</IconCircle>
          <IconCircle>X</IconCircle>
          <IconCircle>in</IconCircle>
          <IconCircle>▶</IconCircle>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://wa.me/18006203844"
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#25D366]" aria-hidden>
              <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20Zm4.4-5.7c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.6 6.6 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.3-1.7c-.1-.3 0-.4.1-.5l.4-.4.2-.4c.1-.1 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.3a9.2 9.2 0 0 0 3.4 2.8c1.3.6 1.8.6 2.2.5.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1s-.2-.2-.4-.3Z" />
            </svg>
            WhatsApp
          </a>
          <a
            href="tel:18006203844"
            className="inline-flex items-center gap-2 font-medium hover:underline"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
              <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.2 1Z" />
            </svg>
            +1 (800) 620-3844
          </a>
          <a
            href="#enroll"
            className="inline-flex items-center gap-2 font-medium hover:underline"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
              <path d="M12 3 2 8l10 5 8-4v6h2V8L12 3Zm-6 9.2V15c0 2.2 2.7 4 6 4s6-1.8 6-4v-2.8l-6 3-6-3Z" />
            </svg>
            Student Login
          </a>
        </div>
      </div>
    </div>
  )
}
