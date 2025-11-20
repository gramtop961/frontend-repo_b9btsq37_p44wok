export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-blue-200/70">
            <p>Built with care. Refine it by telling the agent what you want.</p>
            <div className="flex items-center gap-6">
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#showcase" className="hover:text-white transition">Showcase</a>
              <a href="/test" className="hover:text-white transition">Backend Test</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
