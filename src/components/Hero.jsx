import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl font-bold tracking-tight text-white"
            >
              Build stunning apps through conversation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-blue-100/80"
            >
              Describe your idea and watch a production-ready application come to life.
              Design, backend, database — all handled for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#showcase"
                className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition"
              >
                See what it can build
              </a>
              <a
                href="/test"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 text-white px-5 py-3 font-semibold hover:bg-white/10 transition"
              >
                Check backend
              </a>
            </motion.div>

            <div className="mt-8 flex items-center gap-6 text-blue-200/70">
              <div className="text-sm">
                <span className="font-semibold text-white">Fast</span> setup
              </div>
              <div className="text-sm">
                <span className="font-semibold text-white">Modern</span> UI
              </div>
              <div className="text-sm">
                <span className="font-semibold text-white">Full-stack</span> ready
              </div>
            </div>
          </div>

          {/* Mock panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-3 backdrop-blur shadow-2xl">
              <div className="rounded-lg bg-slate-950/70 border border-white/10 p-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <div className="h-3 w-3 rounded-full bg-green-400/70" />
                </div>
                <div className="mt-4 h-[360px] w-full rounded-md bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(6,182,212,0.25),transparent_45%)] border border-white/5 grid place-items-center text-center">
                  <div>
                    <p className="text-blue-100/80">Your app will render here</p>
                    <p className="text-sm text-blue-300/60">Live preview refreshes as you build</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
