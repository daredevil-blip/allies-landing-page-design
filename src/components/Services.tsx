
import { Shield, Users, Home, Briefcase } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    icon: Shield,
    title: "ביטוח חיים",
    description: "הגן על עתיד משפחתך עם תוכניות ביטוח חיים מקיפות"
  },
  {
    icon: Home,
    title: "ביטוח דירה",
    description: "הגן על הנכס שלך עם כיסוי מותאם אישית"
  },
  {
    icon: Briefcase,
    title: "ביטוח עסקי",
    description: "הגנה מקיפה לפעילות העסקית שלך"
  },
  {
    icon: Users,
    title: "ביטוח קבוצתי",
    description: "פתרונות ביטוח מותאמים לארגונים וקבוצות"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">השירותים שלנו</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            אנו מציעים פתרונות ביטוח מקיפים המותאמים לצרכים הספציפיים שלך
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow text-right">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
