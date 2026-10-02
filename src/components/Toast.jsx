export default function Toast({ toast }) {
  return (
    <div aria-live="polite" role="status" className="pointer-events-none fixed inset-x-0 bottom-0 z-50">
      {toast && (
        <div
          key={toast.id}
          className="absolute bottom-[calc(24px+env(safe-area-inset-bottom))] left-1/2 inline-flex max-w-[calc(100vw-32px)] animate-toast-in items-center gap-2 whitespace-nowrap rounded-full border border-sakura-400 bg-white px-5 py-3 text-[15px] font-bold text-ink-deep shadow-lift"
        >
          <span aria-hidden="true" className="font-symbol text-sakura-500">
            ♡
          </span>
          {toast.message}
        </div>
      )}
    </div>
  )
}
