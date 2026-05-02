import { GlassCard } from '../components/GlassCard';

export const About = () => {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mb-16 space-y-6">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-8">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">BASMI</span>
          </h1>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            BASMI is an integrated, technology-driven security and force-protection solutions provider based in New Delhi, India, delivering end-to-end Hostile Vehicle Mitigation (HVM), perimeter security, access control, and integrated protection systems. BASMI serves a diverse client base that includes the Indian Army, Indian Navy, Indian Air Force, DRDO laboratories, Defence Public Sector Undertakings (DPSUs), critical government facilities, transportation hubs, industrial complexes, energy installations, commercial campuses, and other high-value strategic assets. Led by a leadership team with over two decades of operational experience in the Indian Armed Forces, BASMI combines real-world operational insight with globally certified security technologies to design, deploy, and sustain high-reliability protection systems across both defence and civilian domains. Operational reliability, lifecycle support, and system availability form the core of BASMI's approach.
          </p>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            BASMI partners with globally accredited manufacturers whose facilities are TÜV SÜD audited and certified to ISO 9001:2015 and ISO 45001:2018, meeting stringent international benchmarks including IWA 14-1:2013, ISO, and CE standards. The manufacturing facility is listed with the UK National Protective Security Authority (NPSA- formerly CPNI) and is a full member of the Perimeter Security Suppliers Association (PSSA), UK ensuring solutions suitable for defence, critical infrastructure, and high-risk commercial environments.
          </p>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            BASMI's range of innovative, independently tested solutions play a critical role in protecting valuable assets worldwide from vehicle-borne, asymmetric, and forced-entry threats. Its manufacturing partner is the only Asian OEM to have successfully crash-tested 14 HVM systems at HORIBA MIRA, UK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <GlassCard className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">Mission</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              To protect critical assets using advanced, reliable technologies tailored for rigorous modern security challenges.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider mt-6 border-t border-white/10 pt-6">Certifications</h2>
            <ul className="text-gray-400 space-y-2 font-medium">
               <li>• ISO 9001:2015</li>
               <li>• IWA 14:2013</li>
               <li>• PAS 68</li>
               <li>• ASTM Standards</li>
            </ul>
          </GlassCard>
          
          <GlassCard className="p-8 md:p-12" delay={0.2}>
            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">Vision</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              To become a global leader in integrated defence & security systems, continually advancing to outpace both physical and electronic threats.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider border-t border-white/10 pt-6">Global Partnerships</h2>
            <ul className="text-gray-400 space-y-4 font-medium">
               <li>
                 <span className="text-white">HORIBA MIRA (UK)</span>
                 <p className="text-sm">Crash-tested HVM systems deployment</p>
               </li>
               <li>
                 <span className="text-white">Southwest Microwave (USA)</span>
                 <p className="text-sm">Perimeter intrusion detection grids</p>
               </li>
            </ul>
          </GlassCard>
        </div>

        <div className="max-w-4xl">
           <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Industries Served</h2>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Defence Installations', 'Airports & Seaports', 'Government Facilities', 'Industrial Plants', 'Urban Smart Infrastructure'].map((ind, i) => (
                 <div key={i} className="border border-white/10 bg-white/5 rounded-md p-4 text-center text-gray-300 font-medium">
                    {ind}
                 </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};
