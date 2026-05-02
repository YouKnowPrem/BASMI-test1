import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: 'url(/background.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        {/* We can remove the right gradient or keep it, but centered text doesn't need right-gradient as much. We'll make it radial or just keep a darker overlay. */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">Defence. Innovation. Technology.</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Integrated Security & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600">Force Protection Solutions</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed">
            Delivering end-to-end hostile vehicle mitigation, perimeter security, access control, and integrated protection systems.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <Link 
              to="/security"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-md font-medium transition-all group backdrop-blur-md"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/5 text-gray-300 hover:text-white rounded-md font-medium transition-all"
            >
              Request Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
