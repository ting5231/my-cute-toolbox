import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import FavoritesToggle from './components/FavoritesToggle.jsx'
import ToolCard from './components/ToolCard.jsx'
import CutePick from './components/CutePick.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Toast from './components/Toast.jsx'
import { tools, cutePicks } from './data/tools.js'
import useFavorites from './hooks/useFavorites.js'
import { copyText } from './utils/clipboard.js'

const cleanUrl = () => window.location.pathname + window.location.search

export default function App() {
  const [showFavorites, setShowFavorites] = useState(
    () => typeof window !== 'undefined' && window.location.hash === '#favorites',
  )
  const [activeNav, setActiveNav] = useState(showFavorites ? 'favorites' : 'home')
  const [toast, setToast] = useState(null)
  const toastTimer = useRef(null)
  const { favorites, toggleFavorite, isFavorite } = useFavorites()
  // 只計算目前仍存在的工具（之後從 tools.js 刪除工具時，收藏數字也會正確）
  const favoriteCount = useMemo(() => tools.filter((t) => favorites.includes(t.id)).length, [favorites])

  const showToast = useCallback((message) => {
    clearTimeout(toastTimer.current)
    setToast({ id: Date.now(), message })
    toastTimer.current = setTimeout(() => setToast(null), 1800)
  }, [])

  useEffect(() => () => clearTimeout(toastTimer.current), [])

  const handleCopy = useCallback(
    async (text) => {
      const ok = await copyText(text)
      showToast(ok ? 'Copied ♡' : '複製失敗，請手動選取 (｡•́︿•̀｡)')
    },
    [showToast],
  )

  const visibleTools = useMemo(
    () => (showFavorites ? tools.filter((t) => favorites.includes(t.id)) : tools),
    [showFavorites, favorites],
  )

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleNavigate = (id) => {
    setActiveNav(id)
    if (id === 'home') {
      setShowFavorites(false)
      history.replaceState(null, '', cleanUrl())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (id === 'favorites') {
      setShowFavorites(true)
      history.replaceState(null, '', '#favorites')
      requestAnimationFrame(() => scrollToId('tools'))
    } else if (id === 'about') {
      history.replaceState(null, '', '#about')
      scrollToId('about')
    }
  }

  const toggleFavoritesView = () => {
    const next = !showFavorites
    setShowFavorites(next)
    setActiveNav(next ? 'favorites' : 'home')
    history.replaceState(null, '', next ? '#favorites' : cleanUrl())
  }

  // 首次載入若網址是 #favorites / #about，捲到對應位置
  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#favorites') setTimeout(() => scrollToId('tools'), 120)
    if (hash === '#about') {
      setActiveNav('about')
      setTimeout(() => scrollToId('about'), 120)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#tools"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:shadow-lift"
      >
        跳到工具列表
      </a>

      <Header active={activeNav} favoritesCount={favoriteCount} onNavigate={handleNavigate} />

      <main className="flex-1">
        <Hero>
          <FavoritesToggle
            active={showFavorites}
            onToggle={toggleFavoritesView}
            count={favoriteCount}
          />
        </Hero>

        {/* 工具卡片 */}
        <section
          id="tools"
          aria-labelledby={showFavorites ? 'tools-title' : undefined}
          aria-label={showFavorites ? undefined : '工具列表'}
          className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 sm:pt-16"
        >
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              {showFavorites && (
                <h2 id="tools-title" className="font-display text-[28px] font-semibold text-ink-deep sm:text-3xl">
                  My Favorites <span className="text-sakura-500">♡</span>
                </h2>
              )}
              <p className={`${showFavorites ? 'mt-1 ' : ''}text-sm text-ink/80`}>
                {showFavorites ? '你收藏的可愛工具都在這裡' : '挑一個卡哇依的工具８～☁️⊹˚🎠ꔛ˚₊🐇⋆｡'}
              </p>
            </div>
          </div>

          {visibleTools.length > 0 ? (
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
              {visibleTools.map((tool, i) => (
                <li key={tool.id}>
                  <ToolCard
                    tool={tool}
                    index={i}
                    isFavorite={isFavorite(tool.id)}
                    onToggleFavorite={toggleFavorite}
                    onCopy={handleCopy}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState onExitFavorites={toggleFavoritesView} />
          )}
        </section>

        <div className="mt-20 flex flex-col gap-14">
          <CutePick picks={cutePicks} onCopy={handleCopy} />
          <About />
        </div>
      </main>

      <Footer />
      <Toast toast={toast} />
    </div>
  )
}

// 收藏模式下還沒有收藏任何工具時顯示
function EmptyState({ onExitFavorites }) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-card border border-dashed border-sakura-300 bg-white/80 px-6 py-12 text-center">
      <p className="font-symbol text-4xl text-ink-deep">( ˘ ³˘)♡</p>
      <p className="text-base font-semibold text-ink-deep">還沒有收藏任何工具</p>
      <p className="text-sm text-ink/80">點卡片右上角的 ♡，就可以把喜歡的工具收進這裡。</p>
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={onExitFavorites}
          className="h-11 rounded-full border border-line bg-white px-5 text-sm font-semibold text-ink transition hover:bg-blush"
        >
          看全部工具 ♡
        </button>
      </div>
    </div>
  )
}
