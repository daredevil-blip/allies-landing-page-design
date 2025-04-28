
import React from 'react';
import { motion } from 'framer-motion';
import { Map, CreditCard, Plane } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const steps = [
  {
    icon: Map,
    title: 'בחר יעד',
    description: 'בחר את היעד המועדף עליך מתוך מגוון האפשרויות שלנו'
  },
  {
    icon: CreditCard,
    title: 'בצע תשלום',
    description: 'השלם את התשלום באופן מאובטח עם מגוון אפשרויות תשלום'
  },
  {
    icon: Plane,
    title: 'צא לדרך',
    description: 'קבל את פרטי ההזמנה שלך והתחל את החוויה שלך'
  }
];

const BookingSteps = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-emerald-600 font-medium mb-2">קל ומהיר</h6>
          <h2 className="text-3xl font-bold mb-4">הזמן את הטיול הבא שלך ב-3 צעדים פשוטים</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-4 items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <step.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/4bd12d73-9ea8-4226-8e9c-935fa4a3efa4.png"
                  alt="טיול ליוון"
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold">טיול ליוון</h4>
                    <span className="text-emerald-600">החל מ-1,999₪</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span>14-29 יוני</span>
                    <span>•</span>
                    <span>24 אנשים נרשמו</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
