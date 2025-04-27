
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2 space-x-reverse">
            <img src="/logo.svg" alt="לוגו" className="h-8" />
            <span className="text-xl font-bold text-gray-900">אלייז ביטוח</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#why" className="text-gray-700 hover:text-emerald-500 transition-colors">למה אלייז?</a>
            <a href="#features" className="text-gray-700 hover:text-emerald-500 transition-colors">שירותים</a>
            <a href="#pricing" className="text-gray-700 hover:text-emerald-500 transition-colors">מחירים</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-500 transition-colors">צור קשר</a>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
            התחברות
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
