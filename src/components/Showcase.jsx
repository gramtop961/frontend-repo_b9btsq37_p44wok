import { useEffect, useState } from 'react'
import { Globe2, Server, Database } from 'lucide-react'

export default function Showcase() {
  const [status, setStatus] = useState({ api: 'Checking...', db: '—', url: '' })

  useEffect(() => {
    const run = async () => {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      setStatus((s) => ({ ...s, url: baseUrl }))
      try {
        const res = await fetch(`${baseUrl}`)
        if (!res.ok) throw new Error('API not reachable')
        const data = await res.json()
        let dbStatus = 'Unknown'
        try {
          const dbRes = await fetch(`${baseUrl}/test`)
          dbStatus = dbRes.ok ? 'Connected' : 'Unavailable'
        } catch {
          dbStatus = 'Unavailable'
        }
        setStatus({ api: data.message || 'OK', db: dbStatus, url: baseUrl })
      } catch (e) {
        setStatus({ api: 'Unavailable', db: 'Unavailable', url: baseUrl })
      }
    }
    run()
  }, [])

  return (
    <section id="showcase" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-white/10 p-2 text-white"><Globe2 className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-blue-200/70">Backend URL</div>
                <div className="font-semibold text-white break-all">{status.url || '—'}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-white/10 p-2 text-white"><Server className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-blue-200/70">API</div>
                <div className="font-semibold text-white">{status.api}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-white/10 p-2 text-white"><Database className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-blue-200/70">Database</div>
                <div className="font-semibold text-white">{status.db}</div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-right">
            <a href="/test" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition">Open connectivity test</a>
          </div>
        </div>
      </div>
    </section>
  )
}
