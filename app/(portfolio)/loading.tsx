export default function PortfolioLoading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-px w-32 overflow-hidden bg-[#1a1a1a]">
          <div className="h-full w-full origin-left animate-load-bar bg-[#00ff00]" />
        </div>
        <p className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-[#444]">
          <span className="cursor-blink inline-block h-2.5 w-1.5 bg-[#00ff00]" />
          LOADING
        </p>
      </div>
    </div>
  )
}
