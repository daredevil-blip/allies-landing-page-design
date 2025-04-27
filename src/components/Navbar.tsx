
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-gray-900">InsureConsult</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
