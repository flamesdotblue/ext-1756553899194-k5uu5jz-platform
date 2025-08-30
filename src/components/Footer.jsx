export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-zinc-400 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-wide text-zinc-200">GRIDFALL</span>
          <span className="opacity-60">© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#features" className="hover:text-zinc-200">Features</a>
          <a href="#battle" className="hover:text-zinc-200">Showcase</a>
          <a href="#" className="hover:text-zinc-200">Press Kit</a>
        </nav>
      </div>
    </footer>
  );
}
