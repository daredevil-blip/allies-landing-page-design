
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { title: 'למה אלייז?', path: '/why-us' },
  { title: 'שירותים', path: '/services' },
  { title: 'מחירים', path: '/pricing' },
  { title: 'צור קשר', path: '/#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHashLink = (path: string) => path.startsWith('/#');

  const handleClick = (path: string) => {
    if (isHashLink(path)) {
      const element = document.querySelector(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="לוגו" className="h-8" />
              <span className="text-xl font-bold text-gray-900 mr-2">אלייז ביטוח</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <React.Fragment key={item.path}>
                {isHashLink(item.path) ? (
                  <a 
                    href={item.path.substring(1)} 
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.path);
                    }} 
                    className="text-gray-700 hover:text-emerald-500 transition-colors"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link 
                    to={item.path}
                    className={`text-gray-700 hover:text-emerald-500 transition-colors ${
                      location.pathname === item.path ? 'text-emerald-500 font-medium' : ''
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
          
          <Link to="/lets-start" className="hidden md:block">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              התחברות
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <React.Fragment key={item.path}>
                  {isHashLink(item.path) ? (
                    <a 
                      href={item.path.substring(1)} 
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(item.path);
                        setIsMobileMenuOpen(false);
                      }} 
                      className="text-gray-700 hover:text-emerald-500 transition-colors py-2 text-right"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link 
                      to={item.path}
                      className={`text-gray-700 hover:text-emerald-500 transition-colors py-2 text-right ${
                        location.pathname === item.path ? 'text-emerald-500 font-medium' : ''
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </React.Fragment>
              ))}
              <Link to="/lets-start" className="py-2">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white w-full">
                  התחברות
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
