
import { GlassCard } from '../components/GlassCard';
import { motion } from 'framer-motion';

export const Tactical = () => {
  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mehler-inspired 3-personal section */}
        <section className="relative mb-24 overflow-hidden rounded-2xl glass-panel group border-white/5">
          <div className="absolute inset-0 z-0">
            <img 
              src="/tactical_gear.png" 
              alt="Elite Tactical Personnel" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/50" />
          </div>
          
          <div className="relative z-10 px-8 py-20 md:py-32 md:px-16 flex flex-col justify-end h-full min-h-[70vh]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase mb-4">
                Unyielding <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Performance</span>
              </h1>
              <p className="text-lg text-gray-300 font-light max-w-lg mb-8">
                Engineered for specialized mission profiles. Total modularity for plate carriers, helmets, and biomechanically optimized tactical suits.
              </p>
              
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-md uppercase tracking-widest text-sm font-semibold transition-all backdrop-blur-md">
                Configure Loadout
              </button>
            </motion.div>
          </div>
        </section>

        {/* Immersive Product Section */}
        <div className="mb-24 w-full bg-[#020202] rounded-xl overflow-hidden glass-panel border border-white/5 relative shadow-2xl">
          <div className="group/container flex flex-col md:flex-row w-full h-[800px] md:h-[700px] bg-[#020202]">
            
            {/* Card 1 */}
            <div className="flex-1 relative overflow-hidden group/card transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] filter brightness-[0.6] contrast-[1.1] md:group-hover/container:opacity-40 md:group-hover/container:brightness-50 md:hover:!opacity-100 md:hover:!brightness-110 md:hover:!contrast-125 md:hover:flex-[1.2] cursor-pointer">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_50%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-[800ms] pointer-events-none z-10 mix-blend-screen" />
              <img src="/soldier_ballistic.png" alt="Ballistic Protection" className="absolute w-full h-full object-cover object-top transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] scale-[1.02] group-hover/card:scale-[1.08] z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-80" />
              <div className="absolute inset-x-0 bottom-16 md:bottom-28 z-20 flex justify-center items-end text-center px-4">
                <h3 className="font-black text-white text-2xl md:text-4xl uppercase tracking-[0.1em] md:tracking-[0.15em] transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/card:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
                  Ballistic<br/>Protection
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-1 relative overflow-hidden group/card transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] filter brightness-[0.6] contrast-[1.1] border-y md:border-y-0 md:border-x border-white/5 md:group-hover/container:opacity-40 md:group-hover/container:brightness-50 md:hover:!opacity-100 md:hover:!brightness-110 md:hover:!contrast-125 md:hover:flex-[1.2] cursor-pointer">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_50%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-[800ms] pointer-events-none z-10 mix-blend-screen" />
              <img src="/soldier_carrying.png" alt="Carrying Systems" className="absolute w-full h-full object-cover object-top transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] scale-[1.02] group-hover/card:scale-[1.08] z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-80" />
              <div className="absolute inset-x-0 bottom-16 md:bottom-28 z-20 flex justify-center items-end text-center px-4">
                <h3 className="font-black text-white text-2xl md:text-4xl uppercase tracking-[0.1em] md:tracking-[0.15em] transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/card:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
                  Carrying<br/>Systems
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex-1 relative overflow-hidden group/card transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] filter brightness-[0.6] contrast-[1.1] md:group-hover/container:opacity-40 md:group-hover/container:brightness-50 md:hover:!opacity-100 md:hover:!brightness-110 md:hover:!contrast-125 md:hover:flex-[1.2] cursor-pointer">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_50%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-[800ms] pointer-events-none z-10 mix-blend-screen" />
              <img src="/soldier_clothing.png" alt="Tactical Clothing" className="absolute w-full h-full object-cover object-top transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] scale-[1.02] group-hover/card:scale-[1.08] z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-80" />
              <div className="absolute inset-x-0 bottom-16 md:bottom-28 z-20 flex justify-center items-end text-center px-4">
                <h3 className="font-black text-white text-2xl md:text-4xl uppercase tracking-[0.1em] md:tracking-[0.15em] transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/card:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
                  Tactical<br/>Clothing
                </h3>
              </div>
            </div>

          </div>
        </div>

        {/* Product Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 tracking-wider uppercase border-l-4 border-white/20 pl-4">Equipment Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="h-80 flex flex-col justify-end p-6 relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
               <div className="absolute inset-0 bg-[#111] z-0 flex items-center justify-center">
                  <span className="text-gray-700 font-mono text-xs">[VISUAL REDACTED]</span>
               </div>
               <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                 <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Ballistic Vests</h3>
                 <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Lightweight composite armor offering maximum mobility without compromising Level IV rating.</p>
               </div>
            </GlassCard>
            
            <GlassCard delay={0.1} className="h-80 flex flex-col justify-end p-6 relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
               <div className="absolute inset-0 bg-[#111] z-0 flex items-center justify-center">
                  <span className="text-gray-700 font-mono text-xs">[VISUAL REDACTED]</span>
               </div>
               <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                 <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Combat Helmets</h3>
                 <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Integrated rail systems, NVG mounts, and impact-absorbing inner geometries.</p>
               </div>
            </GlassCard>

            <GlassCard delay={0.2} className="h-80 flex flex-col justify-end p-6 relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
               <div className="absolute inset-0 bg-[#111] z-0 flex items-center justify-center">
                  <span className="text-gray-700 font-mono text-xs">[VISUAL REDACTED]</span>
               </div>
               <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                 <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Load Bearing</h3>
                 <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Modular chest rigs and belts for agile ammunition distribution and critical med-kits.</p>
               </div>
            </GlassCard>
          </div>
        </div>

      </div>
    </div>
  );
};
