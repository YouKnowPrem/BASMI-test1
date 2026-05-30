import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield, Cpu, Award } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-white/10 rounded-none shadow-none bg-[#050505]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <NavLink to="/" className="flex items-center space-x-3 py-2">
            <img 
              src="/BASMI_svg.svg" 
              alt="BASMI Logo" 
              className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]" 
              onError={(e) => { e.currentTarget.style.display = 'none'; }} 
            />
          </NavLink>
          
          <div className="hidden lg:flex items-center space-x-6">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              About BASMI
            </NavLink>

            {/* Integrated Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                  isSolutionsOpen ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Integrated Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Dropdown Panel */}
              {isSolutionsOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[850px] glass-panel bg-[#050505]/95 border border-white/15 shadow-2xl p-6 grid grid-cols-3 gap-6 rounded-xl animate-fade-in backdrop-blur-2xl">
                  {/* Column 1 */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-1.5" /> Foundations & Tech
                      </h4>
                      <ul className="space-y-2.5 text-sm">
                        <li>
                          <Link to="/about" className="text-gray-300 hover:text-white block font-medium transition-colors">1. Core Capabilities</Link>
                          <span className="text-xs text-gray-500 block">Strategic aerospace, defence & military systems</span>
                        </li>
                        <li className="pt-2">
                          <Link to="/tactical" className="text-gray-300 hover:text-white block font-medium transition-colors">2. Defence Equipment & Technology Solutions</Link>
                          <span className="text-xs text-gray-500 block">Strategic systems integration & equipment supply</span>
                        </li>
                        <li className="pt-2">
                          <Link to="/about" className="text-gray-300 hover:text-white block font-medium transition-colors">7. Advanced & Dual-Use Technologies</Link>
                          <span className="text-xs text-gray-500 block">Next-generation tech & dual-use applications</span>
                        </li>
                        <li className="pt-2">
                          <Link to="/contact" className="text-gray-300 hover:text-white block font-medium transition-colors">9. Project & Lifecycle Management</Link>
                          <span className="text-xs text-gray-500 block">Sustainment support & program consulting</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-3 flex items-center">
                        <Cpu className="h-4 w-4 mr-1.5" /> Aerospace & Indigenisation
                      </h4>
                      <ul className="space-y-2.5 text-sm">
                        <li>
                          <span className="text-white font-medium block">3. Aerospace Systems</span>
                          <div className="pl-3 mt-1 space-y-1 text-xs">
                            <Link to="/uas" className="text-gray-400 hover:text-white block transition-colors">• Unmanned Aircraft Systems</Link>
                            <Link to="/uas" className="text-gray-400 hover:text-white block transition-colors">• Counter UAS Systems</Link>
                          </div>
                        </li>
                        <li className="pt-2">
                          <span className="text-white font-medium block">4. Surface and Sub-Surface Systems</span>
                          <div className="pl-3 mt-1 space-y-1 text-xs">
                            <Link to="/aerospace" className="text-gray-400 hover:text-white block transition-colors">• Unmanned Surface Vessels</Link>
                            <Link to="/aerospace" className="text-gray-400 hover:text-white block transition-colors">• Autonomous Underwater Vehicles</Link>
                          </div>
                        </li>
                        <li className="pt-2">
                          <span className="text-white font-medium block">8. Indigenisation & Self-reliance</span>
                          <div className="pl-3 mt-1 space-y-1 text-xs">
                            <Link to="/indigenization" className="text-gray-400 hover:text-white block transition-colors">• Aviation Systems</Link>
                            <Link to="/indigenization" className="text-gray-400 hover:text-white block transition-colors">• Marine Systems</Link>
                            <Link to="/indigenization" className="text-gray-400 hover:text-white block transition-colors">• Sub-Marine Systems</Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-3 flex items-center">
                        <Shield className="h-4 w-4 mr-1.5" /> Force Protection
                      </h4>
                      <ul className="space-y-2.5 text-sm">
                        <li>
                          <span className="text-white font-medium block">6. Security & Force Protection Systems</span>
                          <div className="pl-3 mt-1 space-y-1 text-xs">
                            <Link to="/security" className="text-gray-400 hover:text-white block transition-colors">• Hostile Vehicle Mitigation (HVM)</Link>
                            <Link to="/security" className="text-gray-400 hover:text-white block transition-colors">• Perimeter Security & Intrusion Detection</Link>
                            <Link to="/security" className="text-gray-400 hover:text-white block transition-colors">• Access Control & Integrated Security</Link>
                          </div>
                        </li>
                        <li className="pt-3">
                          <Link to="/tactical" className="text-gray-300 hover:text-white block font-medium transition-colors">5. Tactical & Mission Support</Link>
                          <span className="text-xs text-gray-500 block">Tactical gear & specialized support systems</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/indigenization"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              Indigenisation
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden glass-panel rounded-none border-t border-white/10 bg-[#050505]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              About BASMI
            </NavLink>

            {/* Mobile Dropdown Header for Solutions */}
            <div className="px-3 py-2 text-base font-medium text-blue-500 border-t border-white/5 mt-2">
              Integrated Solutions
            </div>
            
            <div className="pl-4 space-y-1 text-sm border-l-2 border-blue-500/30 ml-3">
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-1.5 text-gray-400 hover:text-white font-semibold">• Core Capabilities</Link>
              <Link to="/tactical" onClick={() => setIsOpen(false)} className="block px-3 py-1.5 text-gray-400 hover:text-white font-semibold">• Defence Equipment & Technology Solutions</Link>
              
              <div className="px-3 py-1 text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Aerospace Systems</div>
              <Link to="/uas" onClick={() => setIsOpen(false)} className="block pl-6 py-1 text-gray-400 hover:text-white">• Unmanned Aircraft Systems</Link>
              <Link to="/uas" onClick={() => setIsOpen(false)} className="block pl-6 py-1 text-gray-400 hover:text-white">• Counter UAS Systems</Link>
              
              <div className="px-3 py-1 text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Surface and Sub-Surface Systems</div>
              <Link to="/aerospace" onClick={() => setIsOpen(false)} className="block pl-6 py-1 text-gray-400 hover:text-white">• Unmanned Surface Vessels</Link>
              <Link to="/aerospace" onClick={() => setIsOpen(false)} className="block pl-6 py-1 text-gray-400 hover:text-white">• Autonomous Underwater Vehicles</Link>
              
              <Link to="/tactical" onClick={() => setIsOpen(false)} className="block px-3 py-1.5 text-gray-400 hover:text-white font-semibold">• Tactical & Mission Support</Link>
              
              <div className="px-3 py-1 text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Security & Force Protection Systems</div>
              <Link to="/security" onClick={() => setIsOpen(false)} className="block pl-6 py-1 text-gray-400 hover:text-white">• Hostile Vehicle Mitigation (HVM)</Link>
              <Link to="/security" onClick={() => setIsOpen(false)} className="block pl-6 py-1 text-gray-400 hover:text-white">• Perimeter Security & Intrusion Detection</Link>
              <Link to="/security" onClick={() => setIsOpen(false)} className="block pl-6 py-1 text-gray-400 hover:text-white">• Access Control & Integrated Security</Link>
              
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-1.5 text-gray-400 hover:text-white font-semibold">• Advanced & Dual-Use Technologies</Link>
              
              <div className="px-3 py-1 text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Indigenisation & Self-reliance</div>
              <Link to="/indigenization" onClick={() => setIsOpen(false)} className="block pl-6 py-1 text-gray-400 hover:text-white">• Aviation Systems</Link>
              <Link to="/indigenization" onClick={() => setIsOpen(false)} className="block pl-6 py-1 text-gray-400 hover:text-white">• Marine Systems</Link>
              <Link to="/indigenization" onClick={() => setIsOpen(false)} className="block pl-6 py-1 text-gray-400 hover:text-white">• Sub-Marine Systems</Link>
              
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-1.5 text-gray-400 hover:text-white font-semibold">• Project & Lifecycle Management</Link>
            </div>

            <NavLink
              to="/indigenization"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium border-t border-white/5 mt-2 ${
                  isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              Indigenisation
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};
