// 散落在 Hero 周圍的小裝飾：位置用百分比，手機只顯示 mobile: true 的幾個
const DECOS = [
  { t: '୭‌', cls: 'left-[6%] top-[14%] text-2xl', r: '-10deg', d: '0s', mobile: true },
  { t: '୨୧', cls: 'right-[7%] top-[12%] text-2xl', r: '8deg', d: '.8s', mobile: true },
  { t: '♡', cls: 'left-[14%] bottom-[30%] text-xl text-sakura-400', r: '-6deg', d: '1.6s' },
  { t: '⋆｡˚', cls: 'right-[15%] bottom-[34%] text-lg', r: '0deg', d: '.4s' },
  { t: '₊˚⊹', cls: 'left-[22%] top-[6%] text-lg', r: '0deg', d: '2.2s' },
  { t: 'ʕ•ᴥ•ʔ', cls: 'left-[4%] bottom-[12%] text-base', r: '-8deg', d: '1.2s', mobile: true },
  { t: '𓂂✿𓈒', cls: 'right-[4%] bottom-[10%] text-base', r: '6deg', d: '2.6s', mobile: true },
]

export default function Hero({ children }) {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-12">
      <div className="relative overflow-hidden rounded-[32px] border border-line bg-gradient-to-b from-white to-blush px-5 pb-10 pt-14 text-center shadow-sticker sm:rounded-[40px] sm:px-10 sm:pb-14 sm:pt-20">
        <span aria-hidden="true" className="stitch rounded-[24px] sm:rounded-[32px]" />

        {/* 漂浮裝飾 */}
        {DECOS.map((d, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={`pointer-events-none absolute select-none font-symbol text-sakura-500/80 animate-float ${d.cls} ${
              d.mobile ? '' : 'hidden md:block'
            }`}
            style={{ '--r': d.r, animationDelay: d.d }}
          >
            {d.t}
          </span>
        ))}

        <div className="relative animate-fade-up">
          <p className="mx-auto mb-4 inline-flex h-8 items-center gap-1.5 rounded-full border border-line bg-white/90 px-4 text-xs font-bold uppercase tracking-[0.2em] text-sakura-600">
            ✿ your cute internet box ✿
          </p>

          <h1 className="font-display text-[44px] font-semibold leading-[1.05] tracking-tight text-ink-deep sm:text-6xl lg:text-7xl">
            <span className="mr-2 inline-block origin-bottom animate-float" style={{ '--r': '-6deg' }} aria-hidden="true">
              🎀
            </span>
            Cute Toolbox
          </h1>

          <p className="mt-4 font-display text-lg font-medium tracking-wide text-sakura-600 sm:text-xl">
            ♡ cute things for your internet life ♡
          </p>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink sm:text-[17px]">
            顏文字、特殊符號、可愛 Emoji、字體工具
            <br />
            全部收藏在這裡 <span className="font-symbol text-sakura-500">୨୧</span>
          </p>
        </div>

        <div className="relative mt-8 animate-fade-up [animation-delay:150ms] sm:mt-10">{children}</div>
      </div>
    </section>
  )
}
