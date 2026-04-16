import React from 'react';
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
