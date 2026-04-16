import { Hero } from '../components/Hero';
import { GlassCard } from '../components/GlassCard';
import { Shield, Settings, Server, Radar, CheckCircle } from 'lucide-react';

export const Home = () => {
  const highlights = [
    { title: "ISO 9001:2015 Certified" },
    { title: "Int. Standards: IWA 14, PAS 68, ASTM" },
    { title: "Only Asian OEM partnered with HORIBA MIRA (UK)" },
    { title: "Trusted by Defence, Govt & Private Sectors" }
  ];

  const solutions = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "HVM Systems",
      description: "Hostile vehicle mitigation systems designed to stop massive kinetic impacts."
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-500" />,
      title: "Access Control Systems",
      description: "Secure, high-throughput systems for pedestrian and vehicular access."
    },
    {
      icon: <Radar className="h-8 w-8 text-blue-500" />,
      title: "Perimeter Intrusion Detection",
      description: "Advanced sensory and radar solutions to monitor boundary perimeters."
    },
    {
      icon: <Server className="h-8 w-8 text-blue-500" />,
      title: "Tactical & Defence Equipment",
      description: "Highly specialized modular gear and integrated command hardware."
    }
  ];

  return (
    <div className="w-full">
      <Hero />
      
      {/* Intro Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-sm font-bold text-blue-500 mb-2 tracking-widest uppercase">About Basmi</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Built To Protect</h3>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  BASMI is a technology-driven security solutions provider based in New Delhi. We specialize in Hostile Vehicle Mitigation (HVM), Perimeter security, Access control systems, and Integrated protection solutions.
                </p>
                <div className="mb-8">
                   <h4 className="text-white font-semibold uppercase tracking-wider mb-4 border-b border-white/10 pb-2 inline-block">Serving Global Sectors:</h4>
                   <ul className="text-gray-400 space-y-2 font-medium">
                     <li>• Defence & Government</li>
                     <li>• Airports & Critical Infrastructure</li>
                     <li>• Industrial Complexes</li>
                     <li>• Smart Cities & Commercial Spaces</li>
                   </ul>
                </div>
             </div>
             
             {/* Key Highlights (Icons Section) */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((h, i) => (
                   <GlassCard key={i} className="p-6 flex flex-col justify-center items-center text-center h-40">
                      <CheckCircle className="text-blue-500 w-8 h-8 mb-3" />
                      <p className="text-white font-medium text-sm">{h.title}</p>
                   </GlassCard>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Integrated Solutions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((feature, idx) => (
              <GlassCard key={idx} delay={idx * 0.1} className="p-8">
                <div className="bg-white/5 inline-block p-4 rounded-xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
