
import { Shield, Users, Home, Briefcase } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    icon: Shield,
    title: "Life Insurance",
    description: "Protect your family's future with comprehensive life insurance plans"
  },
  {
    icon: Home,
    title: "Property Insurance",
    description: "Safeguard your home and assets with tailored property coverage"
  },
  {
    icon: Briefcase,
    title: "Business Insurance",
    description: "Comprehensive protection for your business operations"
  },
  {
    icon: Users,
    title: "Group Insurance",
    description: "Custom insurance solutions for organizations and teams"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive insurance solutions tailored to your specific needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-orange-500" />
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
