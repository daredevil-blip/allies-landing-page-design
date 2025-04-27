
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Progress } from '@/components/ui/progress';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { Award, Check, Clock, HeartHandshake, ShieldCheck, Star, ThumbsUp } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'אמינות ומקצועיות',
    description: 'למעלה מ-15 שנות ניסיון בענף הביטוח עם צוות מומחים מקצועי ואמין'
  },
  {
    icon: HeartHandshake,
    title: 'שירות אישי',
    description: 'אנו מאמינים בגישה אישית ומותאמת לכל לקוח בהתאם לצרכים הייחודיים שלו'
  },
  {
    icon: Clock,
    title: 'זמינות 24/7',
    description: 'צוות השירות שלנו זמין עבורך בכל שעה כדי לענות על שאלות ולסייע בתביעות'
  },
  {
    icon: ThumbsUp,
    title: 'תנאים מועדפים',
    description: 'קשרים חזקים עם חברות הביטוח המובילות מאפשרים לנו להציע תנאים מועדפים'
  }
];

const stats = [
  { name: 'לקוחות מרוצים', value: 5000, color: '#10B981' },
  { name: 'פרויקטים', value: 1200, color: '#6366F1' },
  { name: 'תביעות שטופלו', value: 3500, color: '#F59E0B' },
  { name: 'שנות ניסיון', value: 15, color: '#3B82F6' }
];

const industries = [
  { name: 'ביטוח חיים', value: 35 },
  { name: 'ביטוח בריאות', value: 25 },
  { name: 'ביטוח רכב', value: 20 },
  { name: 'ביטוח דירה', value: 15 },
  { name: 'אחר', value: 5 }
];

const StatsArc = () => {
  const COLORS = ['#10B981', '#6366F1', '#F59E0B', '#3B82F6', '#EC4899'];
  
  // Fixed chart config with proper dark/light theme values
  const chartConfig = {
    category1: { label: "ביטוח חיים", theme: { light: "#10B981", dark: "#047857" } },
    category2: { label: "ביטוח בריאות", theme: { light: "#6366F1", dark: "#4F46E5" } },
    category3: { label: "ביטוח רכב", theme: { light: "#F59E0B", dark: "#D97706" } },
    category4: { label: "ביטוח דירה", theme: { light: "#3B82F6", dark: "#2563EB" } },
    category5: { label: "אחר", theme: { light: "#EC4899", dark: "#DB2777" } }
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            התמחות שלנו לפי תחומים
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            אנו מציעים מגוון רחב של פתרונות ביטוח בכל התחומים
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-1/2 h-80">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Pie
                    data={industries.map((item, index) => ({ 
                      name: item.name, 
                      value: item.value, 
                      key: `category${index + 1}` 
                    }))}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    innerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="key"
                  >
                    {industries.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>

          <div className="w-full md:w-1/2 space-y-6 text-right">
            {industries.map((industry, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{industry.value}%</span>
                  <span className="text-sm font-medium">{industry.name}</span>
                </div>
                <Progress value={industry.value} className="h-2" 
                  style={{ '--progress-background-color': COLORS[index % COLORS.length] } as React.CSSProperties} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CounterSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [counters, setCounters] = React.useState(stats.map(stat => 0));
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      
      stats.forEach((stat, index) => {
        const increment = Math.ceil(stat.value / 50); // 50 steps to reach target
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          
          setCounters(prevCounters => {
            const newCounters = [...prevCounters];
            newCounters[index] = current;
            return newCounters;
          });
        }, 30); // Update every 30ms
        
        return () => clearInterval(timer);
      });
    }
  }, [inView, controls]);
  
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
    <div className="py-16 bg-emerald-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">המספרים מדברים בעצמם</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            אנו גאים בהישגים שלנו ובאמון שלקוחותינו נותנים בנו
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
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
                style={{ backgroundColor: stat.color + '20', color: stat.color }}
              >
                <span className="text-3xl font-bold">{counters[index]}</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">{stat.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const WhyUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-16 bg-gradient-to-bl from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">למה לבחור בנו?</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              אנו מחויבים להעניק לכם את השירות האיכותי ביותר עם פתרונות ביטוח מותאמים אישית
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md text-right"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" 
                alt="שירותי ביטוח" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            
            <div className="order-1 md:order-2 space-y-6 text-right">
              <h2 className="text-3xl font-bold text-gray-900">אנחנו משרד ביטוח עם מוניטין מוכח</h2>
              <p className="text-lg text-gray-700">
                עם למעלה מ-15 שנות ניסיון בענף הביטוח, אנו גאים להיות אחד ממשרדי הביטוח המובילים בישראל. הצוות המקצועי שלנו מורכב ממומחים בעלי ניסיון רב בכל תחומי הביטוח.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center justify-end gap-2">
                  <span>שירות אישי ומקצועי</span>
                  <Check className="h-5 w-5 text-emerald-500" />
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>מחירים תחרותיים</span>
                  <Check className="h-5 w-5 text-emerald-500" />
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>זמינות 24/7</span>
                  <Check className="h-5 w-5 text-emerald-500" />
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>תמיכה בתביעות</span>
                  <Check className="h-5 w-5 text-emerald-500" />
                </li>
              </ul>
              
              <div className="pt-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600">צור קשר</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CounterSection />
      <StatsArc />
      <Footer />
    </div>
  );
};

export default WhyUs;
