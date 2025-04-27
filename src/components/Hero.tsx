
import { Button } from '@/components/ui/button';
import { ArRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 animate-fade-in">
              Protect What Matters Most
            </h1>
            <p className="text-xl text-gray-600 md:pr-12 animate-fade-in">
              Expert insurance consultation tailored to your unique needs. We help you make informed decisions for a secure future.
            </p>
            <div className="flex gap-4 animate-fade-in">
              <Button className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6">
                Get Started
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80"
                alt="Insurance Consultation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-2xl transform translate-x-4 translate-y-4 -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
