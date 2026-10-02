import { useState } from 'react'
import { Copy, Shuffle } from 'lucide-react'

function pickRandom(list, exclude) {
  if (list.length < 2) return list[0]
  let next = exclude
  while (next === exclude) next = list[Math.floor(Math.random() * list.length)]
  return next
}

export default function CutePick({ picks, onCopy }) {
  // 每次重新整理隨機一組
  const [pick, setPick] = useState(() => pickRandom(picks))
  const [spin, setSpin] = useState(0)

  return (
    <section aria-labelledby="cute-pick-title" className="mx-auto max-w-3xl px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-[28px] border border-line bg-white p-6 shadow-sticker sm:p-8">
        <span aria-hidden="true" className="stitch" />
        <span aria-hidden="true" className="washi -left-3 top-5 -rotate-[30deg] bg-butter-400/70" />
        <span aria-hidden="true" className="washi -right-4 bottom-6 -rotate-[28deg] bg-lavender-400/60" />

        <div className="relative flex flex-col items-center gap-5 text-center">
          <div>
            <h2 id="cute-pick-title" className="font-display text-2xl font-semibold text-ink-deep sm:text-[28px]">
              Today&apos;s Cute Pick <span className="font-symbol text-sakura-500">୨୧</span>
            </h2>
            <p className="mt-1 text-sm text-ink/80">每次打開都會抽一組可愛文字給你</p>
          </div>

          <output
            key={spin}
            aria-live="polite"
            className="flex min-h-[96px] w-full max-w-md animate-fade-up items-center justify-center rounded-[20px] border border-dashed border-sakura-300 bg-blush px-4 py-5 font-symbol text-[34px] leading-tight text-ink-deep sm:text-[40px]"
          >
            {pick}
          </output>

          <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => onCopy(pick)}
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-sakura-400 bg-sakura-300 px-6 text-base font-bold text-ink-deep shadow-soft transition hover:bg-sakura-400 active:scale-[.97]"
            >
              <Copy size={17} strokeWidth={2.4} />
              Copy ♡
            </button>
            <button
              type="button"
              onClick={() => {
                setPick((p) => pickRandom(picks, p))
                setSpin((s) => s + 1)
              }}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 text-base font-semibold text-ink transition hover:bg-blush active:scale-[.97]"
            >
              <Shuffle size={17} strokeWidth={2.4} className="transition-transform duration-300 group-hover:rotate-180" />
              換一組
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
