import { useState } from 'react'
import { ArrowUpRight, Copy } from 'lucide-react'

const TONES = {
  pink: {
    card: 'bg-blush',
    tape: 'bg-sakura-300/80',
    tag: 'bg-white text-sakura-600 border-line',
    iconBox: 'bg-white/80',
  },
  cream: {
    card: 'bg-butter-100',
    tape: 'bg-butter-400/70',
    tag: 'bg-white text-[#9A7A2E] border-butter-200',
    iconBox: 'bg-white/85',
  },
  lavender: {
    card: 'bg-lavender-100',
    tape: 'bg-lavender-400/60',
    tag: 'bg-white text-[#7B62B5] border-lavender-200',
    iconBox: 'bg-white/85',
  },
}

export default function ToolCard({ tool, index = 0, isFavorite, onToggleFavorite, onCopy }) {
  const tone = TONES[tool.tone] ?? TONES.pink
  const [popKey, setPopKey] = useState(0)

  const handleFav = () => {
    if (!isFavorite) setPopKey((k) => k + 1)
    onToggleFavorite(tool.id)
  }

  // 每張卡片的紙膠帶角度略有不同，像手貼的
  const tapeRotate = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3'][index % 4]
  const decoRotate = ['-rotate-6', 'rotate-6', '-rotate-3', 'rotate-3'][index % 4]

  return (
    // 外層負責淡入動畫，內層負責 hover 位移，避免 animation 蓋掉 transform
    <div className="h-full animate-fade-up" style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}>
    <article
      className={`group relative flex h-full flex-col rounded-card border border-line ${tone.card} p-5 pt-6 shadow-sticker transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.015] hover:shadow-lift sm:p-6 sm:pt-7`}
    >
      {/* 紙膠帶 */}
      <span aria-hidden="true" className={`washi left-1/2 -top-3 -translate-x-1/2 ${tapeRotate} ${tone.tape}`} />

      {/* 頂部：分類標籤 + 收藏 */}
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex h-7 items-center gap-1 rounded-full border px-3 text-xs font-bold uppercase tracking-wider ${tone.tag}`}
        >
          <span aria-hidden="true">✿</span>
          {tool.tag}
        </span>

        <button
          type="button"
          onClick={handleFav}
          aria-pressed={isFavorite}
          aria-label={isFavorite ? `從收藏移除 ${tool.name}` : `收藏 ${tool.name}`}
          title={isFavorite ? '取消收藏' : '加入收藏'}
          className="relative -mr-1.5 -mt-1.5 grid h-11 w-11 place-items-center rounded-full transition hover:bg-white/80 active:scale-90"
        >
          <span
            key={popKey}
            aria-hidden="true"
            className={`font-symbol text-[22px] leading-none ${
              isFavorite ? 'text-sakura-500' : 'text-sakura-400'
            } ${popKey ? 'animate-pop' : ''}`}
          >
            {isFavorite ? '💖' : '♡'}
          </span>
          {popKey > 0 && isFavorite && (
            <span
              key={`b${popKey}`}
              aria-hidden="true"
              className="pointer-events-none absolute inset-1 animate-burst rounded-full border-2 border-sakura-300"
            />
          )}
        </button>
      </div>

      {/* 大型顏文字，點擊複製 */}
      <button
        type="button"
        onClick={() => onCopy(tool.icon)}
        title="點一下複製 ♡"
        aria-label={`複製 ${tool.icon}`}
        className={`group/icon relative mt-4 flex min-h-[104px] items-center justify-center rounded-[20px] border border-dashed border-line ${tone.iconBox} px-3 py-5 transition hover:border-sakura-400`}
      >
        <span className="font-symbol text-[30px] leading-tight text-ink-deep sm:text-[32px]">{tool.icon}</span>
        <span className="absolute bottom-1.5 right-2.5 inline-flex items-center gap-1 text-[11px] font-semibold text-ink/60 opacity-0 transition group-hover/icon:opacity-100 group-focus-visible/icon:opacity-100">
          <Copy size={11} strokeWidth={2.4} /> copy
        </span>
      </button>

      {/* 工具名稱 */}
      <div className="mt-5 flex-1">
        <h3 className="text-xl font-bold leading-snug text-ink-deep">{tool.name}</h3>

      </div>

      {/* 前往按鈕 */}
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex h-12 items-center justify-center gap-1.5 rounded-full border border-sakura-400 bg-sakura-300 px-5 text-[15px] font-bold text-ink-deep transition hover:bg-sakura-400 active:scale-[.98]"
      >
        {tool.cta}
        <ArrowUpRight size={17} strokeWidth={2.4} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="sr-only">（另開新視窗）</span>
      </a>

      {/* 角落小貼紙 Emoji：小巧、微微傾斜，hover 時輕輕放大並晃動 */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-2.5 -right-1.5 grid h-10 w-10 place-items-center rounded-full border border-line bg-white shadow-soft transition-transform duration-300 group-hover:scale-110"
      >
        <span className={`inline-block text-[15px] leading-none opacity-90 ${decoRotate} group-hover:animate-wiggle`}>
          {tool.deco}
        </span>
      </span>
    </article>
    </div>
  )
}
