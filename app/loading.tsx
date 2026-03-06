export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#000000] font-mono">
      <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.04) 2px, rgba(0,255,0,0.04) 4px)" }} />
      <div className="relative flex flex-col items-center gap-8">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#00ff00]">
          Initializing
        </p>
        <div className="h-px w-48 overflow-hidden bg-[#111]">
          <div className="h-full w-full origin-left animate-load-bar bg-[#00ff00]" />
        </div>
        <p className="flex items-center gap-1 text-xs text-[#333]">
          <span>SYSTEM_READY</span>
          <span className="cursor-blink inline-block h-3 w-2 bg-[#00ff00]" />
        </p>
      </div>
    </div>
  )
}
