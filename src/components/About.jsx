const TIPS = [
  { mark: '♡', text: '點卡片右上角的 ♡ 就能收藏，收藏會保存在這台裝置的瀏覽器裡。' },
  { mark: '✂︎', text: '點卡片中間的大顏文字，可以直接複製貼上。' },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-3xl px-4 sm:px-6">
      <div className="relative rounded-[28px] border border-line bg-butter-100/80 p-6 shadow-sticker sm:p-8">
        <span aria-hidden="true" className="washi left-8 -top-3 -rotate-6 bg-sakura-300/80" />
        <h2 id="about-title" className="font-display text-2xl font-semibold text-ink-deep">
          About <span className="font-symbol text-sakura-500">୭‌</span>
        </h2>
        <p className="mt-3 leading-relaxed text-ink">
          Cute Toolbox 是一個收藏可愛網路小工具的盒子。寫 IG Bio、做手帳排版、傳訊息想加點可愛符號的時候，打開這裡就能找到需要的工具
          <span className="font-symbol"> ( ˶ˆᗜˆ˵ )</span>
        </p>
        <ul className="mt-5 flex flex-col gap-2.5">
          {TIPS.map((tip) => (
            <li key={tip.text} className="flex items-start gap-3 rounded-2xl bg-white/80 px-4 py-3 text-[15px] text-ink">
              <span aria-hidden="true" className="mt-0.5 font-symbol text-sakura-500">
                {tip.mark}
              </span>
              {tip.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
