import { Code, Database, Sparkles, Shield, Workflow, Wrench } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: Sparkles,
      title: 'AI-Powered Builder',
      desc: 'Describe what you want, and the agent writes clean, production-ready code.'
    },
    {
      icon: Code,
      title: 'Modern Frontend',
      desc: 'Vite + React + Tailwind for blazing-fast development and beautiful UI.'
    },
    {
      icon: Database,
      title: 'Persistent Database',
      desc: 'MongoDB-backed storage out of the box. No in-memory hacks.'
    },
    {
      icon: Shield,
      title: 'Type-Safe APIs',
      desc: 'FastAPI + Pydantic for validated requests and robust responses.'
    },
    {
      icon: Workflow,
      title: 'End-to-End Flow',
      desc: 'Backend first, then UI — ensuring endpoints exist before the app calls them.'
    },
    {
      icon: Wrench,
      title: 'Live Preview',
      desc: 'Hot reload on the frontend and auto-reload on the backend for instant feedback.'
    },
  ]

  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Why build with Flames Blue?</h2>
          <p className="mt-3 text-blue-100/70">Everything you need to go from idea to live app in minutes.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg hover:bg-white/10 transition">
              <div className="mb-4 inline-flex rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 p-2 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-blue-100/80 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
