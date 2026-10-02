import { Heart } from 'lucide-react'

// 首頁「My Favorites ♡」切換按鈕：只看收藏的工具
export default function FavoritesToggle({ active, onToggle, count }) {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        aria-pressed={active}
        onClick={onToggle}
        className={`inline-flex h-11 items-center gap-2 rounded-full border-2 border-dashed px-5 text-[15px] font-semibold transition-all active:scale-95 ${
          active
            ? 'border-sakura-500 bg-sakura-300 text-ink-deep'
            : 'border-line bg-white/70 text-ink hover:border-sakura-400 hover:bg-white'
        }`}
      >
        <Heart
          size={17}
          strokeWidth={2.4}
          className={active ? 'fill-sakura-500 text-sakura-600' : 'text-sakura-500'}
        />
        My Favorites ♡
        <span className="rounded-full bg-white/70 px-2 text-xs text-ink-deep">{count}</span>
      </button>
    </div>
  )
}
