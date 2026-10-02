import { Search, X } from 'lucide-react'

export default function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form
      role="search"
      className="relative mx-auto w-full max-w-xl"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit?.()
      }}
    >
      <label htmlFor="tool-search" className="sr-only">
        搜尋工具
      </label>
      <input
        id="tool-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="搜尋顏文字、Emoji、字體工具 ♡"
        autoComplete="off"
        enterKeyHint="search"
        className="h-14 w-full rounded-full border-2 border-line bg-white pl-6 pr-[104px] text-base text-ink-deep shadow-sticker outline-none transition placeholder:text-ink/55 focus:border-sakura-400 focus:shadow-lift [&::-webkit-search-cancel-button]:appearance-none"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="清除搜尋"
          className="absolute right-[60px] top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full text-ink/60 transition hover:bg-blush hover:text-ink-deep"
        >
          <X size={18} strokeWidth={2.2} />
        </button>
      )}

      <button
        type="submit"
        aria-label="搜尋"
        className="group absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-sakura-300 text-ink-deep transition hover:bg-sakura-400 active:scale-95"
      >
        <Search size={19} strokeWidth={2.4} className="transition-transform group-hover:-rotate-12" />
        <span
          aria-hidden="true"
          className="absolute -right-0.5 -top-0.5 font-symbol text-[11px] leading-none text-sakura-500"
        >
          ♡
        </span>
      </button>
    </form>
  )
}
