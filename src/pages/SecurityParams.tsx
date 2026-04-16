import { GlassCard } from '../components/GlassCard';

export const SecurityParams = () => {
  const hvm_systems = [
    {
      title: "Crash Rated Automatic Bollards",
      points: [
         "Hydraulic system with PLC control",
         "Crash-rated (IWA 14 standards)",
         "Heights: 900–1200 mm",
         "Integrated with access control"
      ]
    },
    {
      title: "Fixed Bollards",
      points: [
         "Shallow foundation (as low as 170 mm)",
         "Stops 7.2-ton truck",
         "Ideal for urban & high-security zones"
      ]
    },
    {
      title: "Crash Rated Arm Barriers",
      points: [
         "Beam barrier with crash rating",
         "Width: 3–6 meters",
         "Hydraulic/manual operation",
         "Fast response for high-frequency access"
      ]
    },
    {
      title: "Road Blockers",
      points: [
         "Shallow mount (300 mm foundation)",
         "Stops 7200 kg vehicle",
         "Suitable for high-security checkpoints"
      ]
    },
    {
      title: "Tyre Killers",
      points: [
         "Electromechanical system",
         "Punctures tyres instantly",
         "Works in both directions"
      ]
    },
    {
      title: "Movable Barriers",
      points: [
         "Modular design",
         "Stops heavy vehicles",
         "Quick deployment for events or temporary zones"
      ]
    },
    {
      title: "Crash Rated Gates",
      points: [
         "Sliding gate system",
         "Stops 7.2-ton truck",
         "Optional ballistic protection"
      ]
    },
    {
      title: "Bollards (Non-Crash Rated)",
      points: [
         "Hydraulic system",
         "LED customization",
         "Integrated with access systems"
      ]
    },
    {
      title: "Boom Barriers",
      points: [
         "Up to 10 million cycles",
         "Anti-collision & fast operation",
         "Length up to 6 meters"
      ]
    },
    {
      title: "Tripod Turnstile",
      points: [
         "Compact design",
         "40 persons/min throughput",
         "Emergency drop-arm feature"
      ]
    },
    {
      title: "Full Height Turnstile",
      points: [
         "High-security access",
         "30 persons/min",
         "Ideal for restricted areas"
      ]
    },
    {
      title: "Flap Barriers",
      points: [
         "Sleek glass design",
         "Anti-tailgating system",
         "Emergency opening"
      ]
    },
    {
      title: "Speed Gates",
      points: [
         "Premium design",
         "30 persons/min",
         "Suitable for corporate & airports"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-4">
          HVM <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Systems</span>
        </h1>
        <p className="text-lg text-gray-400 font-light max-w-3xl mb-16">
          Rigorous technical specifications for Hostile Vehicle Mitigation and Access Control.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hvm_systems.map((system, idx) => (
             <GlassCard key={idx} className="p-8 border-l-4 border-l-blue-500/50 flex flex-col justify-between">
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{system.title}</h3>
                <ul className="space-y-2 mt-auto">
                   {system.points.map((point, i) => (
                      <li key={i} className="text-sm text-gray-400 border-b border-white/5 pb-2 last:border-0 last:pb-0">
                         {point}
                      </li>
                   ))}
                </ul>
             </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};
