import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StatsCounter from '@/components/StatsCounter';
import { Suspense } from 'react';
import { Users, CheckCircle, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

// Import the Shield model with lazy loading
import dynamic from '@/utils/react-dynamic-import';
const ShieldModel = dynamic(() => import('@/components/ShieldModel'), {
  ssr: false,
  loading: () => (
    <div className="h-96 flex items-center justify-center bg-emerald-50">
      <p>טוען מודל תלת מימד...</p>
    </div>
  )
});

const Stats = () => {
  const stats = [
    {
      icon: <Users size={36} />,
      label: 'לקוחות מרוצים',
      value: 5000,
      color: '#10B981'
    },
    {
      icon: <CheckCircle size={36} />,
      label: 'תביעות שטופלו',
      value: 3500,
      color: '#3B82F6'
    },
    {
      icon: <Calendar size={36} />,
      label: 'שנות ניסיון',
      value: 15,
      suffix: '+',
      color: '#F59E0B'
    },
    {
      icon: <Award size={36} />,
      label: 'זכיות בפרסים',
      value: 12,
      color: '#8B5CF6'
    },
  ];
  
  return <StatsCounter 
    stats={stats} 
    title="המספרים מספרים את הסיפור שלנו" 
    description="אנו גאים בהישגים שלנו ובאמון שלקוחותינו נותנים בנו"
  />;
};

const ServiceShowcase = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" 
              alt="שירותי ביטוח" 
              className="rounded-lg shadow-xl w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
          <motion.div 
            className="order-1 md:order-2 space-y-6 text-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">פתרונות ביטוח מותאמים אישית</h2>
            <p className="text-lg text-gray-700">
              בעולם עסקי הביטוח המשתנה תדיר, חשוב לבחור בשותף אמין עם ניסיון וידע. אנו מציעים מגוון פתרונות ביטוח מותאמים אישית לצרכים הייחודיים של כל לקוח.
            </p>
            <p className="text-lg text-gray-700">
              צוות המומחים שלנו בעל ניסיון רב בענף הביטוח ומחויב להעניק לך את השירות האיכותי והמקצועי ביותר. אנו עובדים עם מיטב חברות הביטוח בישראל ומתאימים לך את הפוליסה המתאימה ביותר במחיר הטוב ביותר.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Shield3D = () => {
  return (
    <div className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-right order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900">הגנה מלאה על העתיד שלך</h2>
            <p className="text-lg text-gray-700">
              אלייז ביטוח מספקת לך את הכיסוי הביטוחי המקיף ביותר, המותאם בדיוק לצרכים שלך.
              אנו מאמינים שכל אחד צריך להרגיש בטוח לגבי העתיד שלו ושל משפחתו.
            </p>
            <p className="text-lg text-gray-700">
              עם צוות המומחים המקצועי שלנו, אתה יכול להיות רגוע שאתה נמצא בידיים טובות.
              אנו מלווים אותך בכל שלב, מבחירת הפוליסה ועד טיפול בתביעות.
            </p>
          </div>
          <div className="h-96 order-1 md:order-2">
            <Suspense fallback={<div className="h-full flex items-center justify-center"><p>טוען...</p></div>}>
              {typeof window !== 'undefined' && <ShieldModel />}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <ServiceShowcase />
      <Shield3D />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
