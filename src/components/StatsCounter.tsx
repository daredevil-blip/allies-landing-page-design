
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type StatItem = {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: string;
  suffix?: string;
};

interface StatsCounterProps {
  stats: StatItem[];
  title?: string;
  description?: string;
}

const StatsCounter = ({ stats, title, description }: StatsCounterProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      stats.forEach((stat, index) => {
        const duration = 2000; // 2 seconds
        const interval = 20; // Update every 20ms
        const steps = duration / interval;
        const increment = stat.value / steps;
        let current = 0;
        let timer: ReturnType<typeof setInterval> | null = null;
        
        timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            if (timer) clearInterval(timer);
          }
          
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, interval);
        
        return () => {
          if (timer) clearInterval(timer);
        };
      });
    }
  }, [inView, stats, controls]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-emerald-50 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
            {description && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>}
          </div>
        )}
        
        <motion.div 
          className={`grid grid-cols-2 ${stats.length > 2 ? 'md:grid-cols-4' : 'md:grid-cols-2 max-w-2xl mx-auto'} gap-8`}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={itemVariants}
            >
              <div 
                className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
              >
                {stat.icon ? (
                  <div className="text-3xl">{stat.icon}</div>
                ) : (
                  <span className="text-3xl font-bold">
                    {counters[index].toLocaleString()}
                    {stat.suffix}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-medium text-gray-900">{stat.label}</h3>
              {stat.icon && (
                <div className="mt-2 text-2xl font-bold" style={{ color: stat.color }}>
                  {counters[index].toLocaleString()}{stat.suffix}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StatsCounter;
