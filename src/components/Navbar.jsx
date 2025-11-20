import { useState } from 'react'
import { Menu, X, Flame, TestTube2, Github } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Test', href: '/test', external: false },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 shadow-lg">
          <div className="flex h-16 items-center justify-between px-4">
            {/* Brand */}
            <a href="/" className="flex items-center gap-2 select-none">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg blur-lg bg-gradient-to-tr from-blue-500/40 to-cyan-400/40" />
                <div className="relative grid place-items-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 p-2 text-white">
                  <Flame className="h-5 w-5" />
                </div>
              </div>
              <span className="text-white font-semibold tracking-tight">Flames Blue</span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-blue-100/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white px-3 py-2 transition-colors"
              >
                <Github className="h-4 w-4" />
                Star us
              </a>
            </div>

            {/* Mobile button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:text-white hover:bg-white/10 transition"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-4 pb-4 pt-2 space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-blue-50/90 hover:bg-white/10 hover:text-white transition"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="/test"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-blue-50/90 hover:bg-white/10 hover:text-white transition"
                    onClick={() => setOpen(false)}
                  >
                    <TestTube2 className="h-4 w-4" />
                    Check Backend
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
