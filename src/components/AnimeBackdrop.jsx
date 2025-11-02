export default function AnimeBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      {/* subtle scanlines */}
      <div className="absolute inset-0 opacity-[0.08] [background:repeating-linear-gradient(0deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_1px,transparent_1px,transparent_3px)]" />
      {/* neon gradient blooms */}
      <div className="absolute inset-0">
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
    </div>
  );
}
