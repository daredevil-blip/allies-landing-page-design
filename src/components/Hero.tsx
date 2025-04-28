
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-[#FFF5EA] to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-right">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-orange-500 font-medium mb-2"
            >
              הכי טוב בעולם
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold leading-tight text-[#0A142F]"
            >
              טייל, תהנה<br />
              <span className="relative">
                ותחיה חיים
                <svg className="absolute -bottom-2 right-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 4 150 4 200 4" stroke="#FFB6C6" strokeWidth="7" strokeLinecap="round"/>
                </svg>
              </span><br />
              מלאים ושמחים
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-gray-600 md:pr-12"
            >
              צא להרפתקה של פעם בחיים ותגלה מקומות חדשים, תרבויות מרתקות וחוויות בלתי נשכחות
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4 items-center justify-end"
            >
              <Button 
                variant="ghost" 
                className="text-gray-700 flex items-center gap-2 hover:bg-orange-50"
              >
                צפה בסרטון
                <PlayCircle className="h-5 w-5" />
              </Button>
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2"
              >
                מצא עוד
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/lovable-uploads/1724b198-8349-4894-893d-f4704f04cd58.png"
                alt="מטייל שמח"
                className="w-full h-auto max-w-xl mx-auto"
              />
              <div className="absolute -right-4 -top-4">
                <img src="/lovable-uploads/c6ef560d-ee3f-4a98-af56-2251abf83f99.png" alt="מטוס" className="w-16 h-16 animate-bounce" />
              </div>
              <div className="absolute -left-4 bottom-1/4">
                <img src="/lovable-uploads/c6ef560d-ee3f-4a98-af56-2251abf83f99.png" alt="מטוס" className="w-12 h-12 animate-bounce delay-150" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
