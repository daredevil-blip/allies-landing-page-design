
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-right">
            <div className="flex items-center space-x-2 space-x-reverse mb-6">
              <Shield className="h-8 w-8 text-emerald-500" />
              <span className="text-xl font-bold">אלייז ביטוח</span>
            </div>
            <p className="text-gray-400">
              ייעוץ ביטוח מקצועי לשקט הנפשי שלך.
            </p>
          </div>
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-4">שירותים</h3>
            <ul className="space-y-2 text-gray-400">
              <li>ביטוח חיים</li>
              <li>ביטוח דירה</li>
              <li>ביטוח עסקי</li>
              <li>ביטוח קבוצתי</li>
            </ul>
          </div>
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-4">החברה</h3>
            <ul className="space-y-2 text-gray-400">
              <li>אודות</li>
              <li>הצוות שלנו</li>
              <li>המלצות</li>
              <li>צור קשר</li>
            </ul>
          </div>
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-4">משפטי</h3>
            <ul className="space-y-2 text-gray-400">
              <li>מדיניות פרטיות</li>
              <li>תנאי שימוש</li>
              <li>מדיניות עוגיות</li>
              <li>הצהרה משפטית</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 אלייז ביטוח. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
