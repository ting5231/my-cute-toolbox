import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV = [
  { id: 'home', label: 'Home', href: '#top' },
  { id: 'favorites', label: 'Favorites', href: '#tools' },
  { id: 'about', label: 'About', href: '#about' },
]

export default function Header({ active, favoritesCount, onNavigate }) {
  const [open, setOpen] = useState(false)

  // 選單開啟時按 Esc 關閉
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    onNavigate(id)
  }

  return (
    <header className="sticky top-0 z-40">
      <div className="lace-bottom border-b border-line/70 bg-blush/90 backdrop-blur-md">
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
          aria-label="主選單"
        >
          <a
            href="#top"
            onClick={(e) => go(e, 'home')}
            className="group flex items-center gap-2 rounded-full py-1 pr-2 font-display text-xl font-semibold tracking-wide text-ink-deep"
          >
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white font-symbol text-lg text-sakura-500 shadow-soft transition-transform duration-300 group-hover:rotate-12"
            >
              ꔛ
            </span>
            Cute Toolbox
          </a>

          {/* 桌機 / 平板 */}
          <ul className="hidden items-center gap-1 sm:flex">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => go(e, item.id)}
                  aria-current={active === item.id ? 'page' : undefined}
                  className={`relative inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-[15px] font-semibold transition-colors ${
                    active === item.id
                      ? 'bg-white text-ink-deep shadow-soft ring-1 ring-line'
                      : 'text-ink hover:bg-white/70 hover:text-ink-deep'
                  }`}
                >
                  {item.label}
                  {item.id === 'favorites' && (
                    <span className="inline-flex min-w-[22px] items-center justify-center rounded-full bg-sakura-300 px-1.5 text-xs text-ink-deep">
                      {favoritesCount}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* 手機選單按鈕 */}
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink-deep shadow-soft sm:hidden"
            aria-label={open ? '關閉選單' : '開啟選單'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} strokeWidth={2.2} /> : <Menu size={20} strokeWidth={2.2} />}
          </button>
        </nav>
      </div>

      {/* 手機下拉選單 */}
      {open && (
        <>
          <button
            type="button"
            aria-label="關閉選單"
            className="fixed inset-0 top-16 z-30 cursor-default bg-ink-deep/10 sm:hidden"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-menu"
            className="absolute inset-x-3 top-[74px] z-40 animate-fade-up rounded-card border border-line bg-white p-2 shadow-lift sm:hidden"
          >
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => go(e, item.id)}
                    aria-current={active === item.id ? 'page' : undefined}
                    className={`flex h-12 items-center justify-between rounded-2xl px-4 text-base font-semibold ${
                      active === item.id ? 'bg-blush text-ink-deep' : 'text-ink'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-symbol text-sakura-500" aria-hidden="true">
                      {item.id === 'favorites' ? `♥ ${favoritesCount}` : '♡'}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  )
}
