
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => (
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
);

export default AboutSection;
