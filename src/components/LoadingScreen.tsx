import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2500; // 2.5 seconds total
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(onComplete, 500); // Wait a half second before triggering completion
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      key="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0f16] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 blur-[100px] rounded-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-12"
        >
          <img 
            src="/basmi_logo.png" 
            alt="BASMI Logo" 
            className="w-48 h-auto object-contain drop-shadow-2xl brightness-125"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          {/* Subtle pulse behind logo */}
          <motion.div 
            className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl -z-10"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Loading Percentage & Rocket Container */}
        <div className="relative w-64 h-24 flex flex-col items-center justify-center">
          
          {/* Percentage */}
          <motion.div 
            className="text-5xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {progress}%
          </motion.div>

          {/* Loading Bar Track */}
          <div className="w-full h-1 bg-white/10 mt-6 rounded-full overflow-hidden relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
