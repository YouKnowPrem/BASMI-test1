import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  delay = 0,
  hoverEffect = true,
  ...props 
}) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative overflow-hidden glass-panel",
        hoverEffect && "glass-panel-hover",
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <div 
        className="liquid-glow" 
        style={{
          ['--x' as any]: `${mousePosition.x}px`,
          ['--y' as any]: `${mousePosition.y}px`,
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
