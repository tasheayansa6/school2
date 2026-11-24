import { useEffect, useRef, useState } from 'react'
import BrandMark from './BrandMark'
import { ABOUT_MENU, NAV_ITEMS, PROGRAMS_MENU } from '../data/menus'

function MegaMenu({ menu, onNavigate }) {
  return (
    <div
      className="absolute top-full left-1/2 z-50 mt-0 w-[min(720px,90vw)] -translate-x-1/2 border-t-[3px] border-red bg-white shadow-[0_16px_40px_rgba(0,0,0,0.14)]"
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div className="grid gap-8 p-7 md:grid-cols-2 md:gap-10 md:p-8">
        {menu.columns.map((col) => (
          <div key={col.title}>
            <p className="border-b border-navy/15 pb-2 text-[15px] font-bold text-navy">
              {col.title}
            </p>
            <ul className="mt-4 space-y-3.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={onNavigate} className="group block">
                    <span className="text-[14px] font-semibold text-navy group-hover:text-red">
                      {link.label}
                    </span>
                    <span className="mt-0.5 block text-[12px] leading-snug text-body">
                      {link.desc}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {col.catalog && (
              <a
                href={col.catalog.href}
                onClick={onNavigate}
                className="mt-5 flex items-center gap-3 rounded-lg bg-[#eef3f7] p-3 transition hover:bg-[#e4ebf2]"
              >
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded bg-red text-white">
                  <i className="fa-regular fa-file-lines text-lg" aria-hidden />
                  <i
                    className="fa-solid fa-magnifying-glass absolute right-1 bottom-1 text-[10px]"
                    aria-hidden
                  />
                </span>
                <span>
                  <span className="block text-sm font-bold text-navy">
                    {col.catalog.label}
                  </span>
                  <span className="block text-xs text-body">{col.catalog.desc}</span>
                </span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    const onDocPointer = (e) => {
      if (!navRef.current?.contains(e.target)) setOpenMenu(null)
    }
    document.addEventListener('pointerdown', onDocPointer)
    return () => document.removeEventListener('pointerdown', onDocPointer)
  }, [])

  const closeAll = () => {
    setOpenMenu(null)
    setMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white shadow-[0_1px_0_rgba(0,0,0,0.03)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 lg:py-4">
        <a href="#top" className="shrink-0" onClick={closeAll}>
          <BrandMark compact />
        </a>

        <nav
          ref={navRef}
          className="relative hidden items-center gap-1 text-[13px] font-semibold text-navy lg:flex"
        >
          {NAV_ITEMS.map((item) => {
            const hasMenu = Boolean(item.menu)
            const isOpen = openMenu === item.menu
            return (
              <div key={item.label} className="relative">
                {hasMenu ? (
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 px-2.5 py-2 hover:text-red ${
                      isOpen ? 'text-red' : ''
                    }`}
                    aria-expanded={isOpen}
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation()
                      setOpenMenu((prev) => (prev === item.menu ? null : item.menu))
                    }}
                    onMouseEnter={() => setOpenMenu(item.menu)}
                  >
                    {item.label}
                    <span className="text-[10px]" aria-hidden>
                      ▾
                    </span>
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="inline-flex px-2.5 py-2 hover:text-red"
                    onClick={closeAll}
                  >
                    {item.label}
                  </a>
                )}

                {item.menu === 'about' && isOpen && (
                  <MegaMenu menu={ABOUT_MENU} onNavigate={closeAll} />
                )}
                {item.menu === 'programs' && isOpen && (
                  <MegaMenu menu={PROGRAMS_MENU} onNavigate={closeAll} />
                )}
              </div>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#info"
            className="rounded-full border border-red px-4 py-2 text-xs font-bold text-red transition hover:bg-red hover:text-white"
          >
            Request Info
          </a>
          <a
            href="#enroll"
            className="rounded-full bg-red px-4 py-2 text-xs font-bold text-white transition hover:bg-red-deep"
          >
            Apply Now
          </a>
        </div>

        <button
          type="button"
          className="rounded border border-navy/20 px-3 py-2 text-sm font-semibold text-navy lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
        >
          Menu
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-line bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-4 text-sm font-semibold text-navy">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <a href={item.href} onClick={closeAll} className="block py-1">
                  {item.label}
                </a>
                {item.menu === 'about' && (
                  <div className="mt-2 space-y-3 border-l-2 border-red/30 pl-3 font-normal">
                    {ABOUT_MENU.columns.flatMap((col) =>
                      col.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          onClick={closeAll}
                          className="block"
                        >
                          <span className="font-semibold">{link.label}</span>
                          <span className="mt-0.5 block text-xs text-body">
                            {link.desc}
                          </span>
                        </a>
                      )),
                    )}
                  </div>
                )}
                {item.menu === 'programs' && (
                  <div className="mt-2 space-y-3 border-l-2 border-red/30 pl-3 font-normal">
                    {PROGRAMS_MENU.columns.flatMap((col) =>
                      col.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          onClick={closeAll}
                          className="block"
                        >
                          <span className="font-semibold">{link.label}</span>
                          <span className="mt-0.5 block text-xs text-body">
                            {link.desc}
                          </span>
                        </a>
                      )),
                    )}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#info"
              className="rounded-full border border-red px-4 py-2 text-center text-red"
              onClick={closeAll}
            >
              Request Info
            </a>
            <a
              href="#enroll"
              className="rounded-full bg-red px-4 py-2 text-center text-white"
              onClick={closeAll}
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
