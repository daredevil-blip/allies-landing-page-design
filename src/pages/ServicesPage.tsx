
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, Home, Briefcase, Car, HeartPulse, Plane } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: Shield,
    title: "ביטוח חיים",
    description: "הגן על עתיד משפחתך עם תוכניות ביטוח חיים מקיפות המותאמות לצרכים הייחודיים שלך",
    details: "ביטוח חיים מעניק לך שקט נפשי בידיעה שיקיריך יהיו מוגנים כלכלית. אנו מציעים מגוון רחב של תוכניות ביטוח חיים המותאמות לשלב החיים שלך ולצרכים הייחודיים של משפחתך."
  },
  {
    icon: Home,
    title: "ביטוח דירה",
    description: "הגן על הנכס שלך עם כיסוי מותאם אישית לדירה ולתכולתה",
    details: "ביטוח דירה מקיף מגן על הרכוש היקר לך ביותר. אנחנו מציעים פוליסות המכסות נזקי טבע, פריצות, נזקי מים וחבויות צד ג', כך שתוכל להיות רגוע בכל מצב."
  },
  {
    icon: Briefcase,
    title: "ביטוח עסקי",
    description: "הגנה מקיפה לפעילות העסקית שלך מפני סיכונים לא צפויים",
    details: "ביטוח עסקי חיוני להמשכיות העסק שלך. אנו מציעים פתרונות ביטוח מקיפים המגנים על העסק שלך מפני תביעות, נזקי רכוש, אחריות מקצועית ועוד."
  },
  {
    icon: Users,
    title: "ביטוח קבוצתי",
    description: "פתרונות ביטוח מותאמים לארגונים וקבוצות בתנאים מיוחדים",
    details: "ביטוח קבוצתי מאפשר לחברות וארגונים להציע כיסוי ביטוחי לעובדיהם בעלויות מופחתות. אנו מתאימים את הפוליסה לצרכי הארגון ומציעים תנאים מיוחדים לקבוצות."
  },
  {
    icon: Car,
    title: "ביטוח רכב",
    description: "פוליסות מקיפות וצד ג' עם תנאים אטרקטיביים ושירות מהיר",
    details: "ביטוח רכב הוא הכרחי לכל נהג. אנו מציעים פוליסות מקיפות וצד ג' במחירים תחרותיים, עם שירות תביעות מהיר ויעיל, כדי שתוכל לחזור לכביש במהירות."
  },
  {
    icon: HeartPulse,
    title: "ביטוח בריאות",
    description: "כיסוי רפואי מקיף להוצאות רפואיות בלתי צפויות",
    details: "ביטוח בריאות מעניק לך גישה לטיפול רפואי פרטי איכותי ומהיר. הפוליסות שלנו מכסות ניתוחים, השתלות, תרופות שאינן בסל הבריאות וטיפולים מיוחדים."
  },
  {
    icon: Plane,
    title: "ביטוח נסיעות",
    description: "ביטחון מלא בכל נסיעה לחו\"ל עם כיסוי להוצאות רפואיות וביטול טיסה",
    details: "ביטוח נסיעות לחו\"ל מעניק לך שקט נפשי בכל נסיעה. הפוליסות שלנו מכסות הוצאות רפואיות בחו\"ל, ביטול טיסה, אובדן כבודה ועוד, כך שתוכל ליהנות מהטיול ללא דאגות."
  }
];

const ServiceComponent = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  
  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const controls = useAnimation();
  
  if (inView) {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }));
  }
  
  return (
    <div className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">השירותים שלנו</h2>
          <p className="text-xl text-gray-600">
            אנו מציעים מגוון רחב של פתרונות ביטוח מותאמים אישית לצרכים שלך
          </p>
        </div>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
            >
              <Card 
                className={`h-full hover:shadow-lg transition-shadow text-right cursor-pointer ${
                  expanded === index ? 'ring-2 ring-emerald-500' : ''
                }`}
                onClick={() => toggleExpand(index)}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {expanded === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-700"
                    >
                      <p>{service.details}</p>
                      <Button className="mt-4 bg-emerald-500 hover:bg-emerald-600">קבל הצעת מחיר</Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const DetailedService = () => {
  return (
    <div className="py-16 bg-emerald-50">
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
            <h2 className="text-3xl font-bold text-gray-900">פתרונות ביטוח מותאמים אישית</h2>
            <p className="text-lg text-gray-700">
              בעולם עסקי הביטוח המשתנה תדיר, חשוב לבחור בשותף אמין עם ניסיון וידע. אנו מציעים מגוון פתרונות ביטוח מותאמים אישית לצרכים הייחודיים של כל לקוח.
            </p>
            <p className="text-lg text-gray-700">
              צוות המומחים שלנו בעל ניסיון רב בענף הביטוח ומחויב להעניק לך את השירות האיכותי והמקצועי ביותר. אנו עובדים עם מיטב חברות הביטוח בישראל ומתאימים לך את הפוליסה המתאימה ביותר במחיר הטוב ביותר.
            </p>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 rounded-lg text-lg">
              לפרטים נוספים
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-16 bg-gradient-to-bl from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">השירותים שלנו</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              אנו מציעים מגוון רחב של פתרונות ביטוח מותאמים אישית לצרכים הייחודיים שלך
            </p>
          </div>
        </div>
      </div>
      
      <DetailedService />
      <ServiceComponent />
      <Footer />
    </div>
  );
};

export default ServicesPage;
