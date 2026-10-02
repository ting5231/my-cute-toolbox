export default function Footer() {
  return (
    <footer className="mt-20 border-t border-dashed border-line bg-blush/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-10 text-center sm:px-6">
        <p className="font-display text-lg font-medium text-ink-deep">Made for cute internet things ♡</p>
        <p aria-hidden="true" className="font-symbol text-lg tracking-[0.35em] text-sakura-500">
          ꔛ ୨୧ ♡ ⋆｡˚ ₊˚⊹
        </p>
        <p className="mt-2 text-xs text-ink/70">
          所有工具皆連結至外部網站，版權屬於各網站作者 ✿ © {new Date().getFullYear()} Cute Toolbox
        </p>
      </div>
    </footer>
  )
}
