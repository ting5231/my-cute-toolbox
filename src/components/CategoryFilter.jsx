import { Heart } from 'lucide-react'

export default function CategoryFilter({
  categories,
  active,
  onChange,
  counts,
  showFavorites,
  onToggleFavorites,
  favoritesCount,
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="chip-scroll -mx-4 flex w-[calc(100%+2rem)] gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:w-auto sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
        role="group"
        aria-label="分類篩選"
      >
        {categories.map((cat) => {
          const selected = active === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(cat.id)}
              className={`inline-flex h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-[15px] font-semibold transition-all duration-200 active:scale-95 ${
                selected
                  ? 'border-sakura-400 bg-sakura-300 text-ink-deep shadow-soft'
                  : 'border-line bg-white text-ink hover:-translate-y-0.5 hover:border-sakura-300 hover:bg-blush'
              }`}
            >
              <span aria-hidden="true" className="font-symbol text-sm opacity-80">
                {cat.mark}
              </span>
              {cat.label}
              <span
                className={`rounded-full px-1.5 text-xs ${
                  selected ? 'bg-white/60 text-ink-deep' : 'bg-blush text-ink/70'
                }`}
              >
                {counts[cat.id] ?? 0}
              </span>
            </button>
          )
        })}
      </div>

      <button
        type="button"
        aria-pressed={showFavorites}
        onClick={onToggleFavorites}
        className={`inline-flex h-11 items-center gap-2 rounded-full border-2 border-dashed px-5 text-[15px] font-semibold transition-all active:scale-95 ${
          showFavorites
            ? 'border-sakura-500 bg-sakura-300 text-ink-deep'
            : 'border-line bg-white/70 text-ink hover:border-sakura-400 hover:bg-white'
        }`}
      >
        <Heart
          size={17}
          strokeWidth={2.4}
          className={showFavorites ? 'fill-sakura-500 text-sakura-600' : 'text-sakura-500'}
        />
        My Favorites ♡
        <span className="rounded-full bg-white/70 px-2 text-xs text-ink-deep">{favoritesCount}</span>
      </button>
    </div>
  )
}
