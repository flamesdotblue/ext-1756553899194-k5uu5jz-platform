import { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BattleShowcase() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="battle" className="relative w-full bg-black py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-fuchsia-500/5" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">In-Engine Battle Footage</h2>
            <p className="mt-2 max-w-2xl text-zinc-300">A glimpse at urban grid collapse and squad maneuvers in a live combat scenario.</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
        >
          <div className="relative aspect-video w-full">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1600"
              preload="metadata"
              controls={false}
            >
              <source src="https://videos.pexels.com/video-files/2583490/2583490-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/40" />

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-4">
              <div className="flex items-center gap-2 rounded-md bg-black/50 px-3 py-2 text-xs text-zinc-200 backdrop-blur">
                <span className="font-semibold text-cyan-300">Objective</span>
                <span className="opacity-80">Secure Power Node A3</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-black/50 px-3 py-2 text-xs text-zinc-200 backdrop-blur">
                <span className="font-semibold text-fuchsia-300">Hazard</span>
                <span className="opacity-80">Grid collapse in 00:45</span>
              </div>
            </div>

            <button
              onClick={togglePlay}
              className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {playing ? 'Pause' : 'Play'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
