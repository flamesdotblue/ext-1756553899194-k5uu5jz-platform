import { Shield, Map, Zap, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: 'Squad Synergy',
    desc: 'Combine specialist abilities for devastating tactical chains and reactive defenses.',
  },
  {
    icon: Map,
    title: 'Collapsing Arenas',
    desc: 'Navigate dynamic city grids that crumble, flood, and ignite under pressure.',
  },
  {
    icon: Zap,
    title: 'Adaptive Tactics',
    desc: 'Exploit environmental hazards and power nodes to pivot the battle in an instant.',
  },
  {
    icon: Cpu,
    title: 'AI Nemesis',
    desc: 'Face an evolving AI commander that learns your strategies over time.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative isolate w-full overflow-hidden bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,255,255,0.08),transparent),radial-gradient(60%_40%_at_80%_0%,rgba(255,0,128,0.06),transparent)]">
      <AnimatedGridBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Command the Collapse</h2>
          <p className="mt-3 text-zinc-300">Every move reshapes the battlefield. Read the grid, anticipate failure points, and outthink the inevitable.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-lg"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(60% 60% at 50% 0%, rgba(0, 255, 255, 0.12), transparent)' }} />
              <f.icon className="h-6 w-6 text-cyan-400" />
              <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedGridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-[0]">
      <style>{`
        @keyframes pan { from { transform: translateY(0); } to { transform: translateY(-40px); } }
        @keyframes glow { 0%, 100% { opacity: .35; } 50% { opacity: .8; } }
        .gridlines line { stroke: rgba(120, 220, 255, 0.12); }
        .gridlines path { stroke: rgba(255, 80, 160, 0.08); }
      `}</style>
      <svg className="h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="1" className="[animation:glow_4s_ease-in-out_infinite]" />
          </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#grid)" className="[animation:pan_6s_linear_infinite]" />
        <g className="gridlines">
          {Array.from({ length: 30 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 40} y1={0} x2={i * 40} y2={800} strokeWidth="0.5" />
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={`h-${i}`} x1={0} y1={i * 40} x2={1200} y2={i * 40} strokeWidth="0.5" />
          ))}
        </g>
      </svg>
    </div>
  );
}
