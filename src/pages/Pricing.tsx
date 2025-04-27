
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { CheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    id: 1,
    name: "בסיסי",
    price: "199",
    description: "פתרון ביטוח בסיסי לצרכים פשוטים",
    features: [
      "כיסוי צד ג'",
      "תמיכה בסיסית",
      "הגנה משפטית",
      "תשלום חודשי נוח"
    ]
  },
  {
    id: 2,
    name: "משפחתי",
    price: "599",
    description: "פתרון ביטוח מקיף למשפחות",
    features: [
      "כיסוי מקיף",
      "תמיכה 24/7",
      "הגנה משפטית מורחבת",
      "כיסוי לכל בני המשפחה",
      "הטבות ייחודיות למשפחות"
    ],
    recommended: true
  },
  {
    id: 3,
    name: "פרימיום",
    price: "999",
    description: "פתרון ביטוח מתקדם לעסקים",
    features: [
      "כיסוי מקיף פלוס",
      "תמיכה VIP",
      "הגנה משפטית מורחבת",
      "כיסוי לעסקים גדולים",
      "פגישות ייעוץ אישיות",
      "התאמה לפי דרישה"
    ]
  }
];

const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-16 bg-gradient-to-bl from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">תוכניות מחירים</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              בחר את התוכנית המתאימה לצרכים שלך עם אפשרויות גמישות ומחירים תחרותיים
            </p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {plans.map((plan, index) => (
              <motion.div 
                key={plan.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`relative ${hoveredPlan === plan.id ? 'scale-105' : 'scale-100'} transition-all duration-300`}
              >
                <Card className={`h-full border-2 ${plan.recommended ? 'border-emerald-500' : 'border-gray-200'} text-right`}>
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      מומלץ
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-end mb-4">
                      <span className="text-sm text-gray-500">₪ לחודש</span>
                      <span className="text-4xl font-bold text-gray-900 ms-2 font-mono">{plan.price}</span>
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-end text-gray-700">
                          {feature}
                          <CheckIcon className="h-5 w-5 text-emerald-500 flex-shrink-0 ms-2" />
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600">בחר תוכנית</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="bg-emerald-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">צריך עזרה בבחירת תוכנית?</h2>
            <p className="text-gray-600 mb-6">צוות המומחים שלנו כאן לעזור לך למצוא את הפתרון המושלם עבורך</p>
            <Button className="bg-emerald-500 hover:bg-emerald-600">צור קשר עכשיו</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
