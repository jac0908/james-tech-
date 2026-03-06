import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Cases', href: '/#cases' },
    { name: 'Team', href: '/#team' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-sm border-slate-200 py-2 shadow-sm'
          : 'bg-transparent border-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className={cn(
              "text-xl font-bold tracking-tight transition-colors",
              (scrolled || !isHomePage) ? "text-slate-900" : "text-white"
            )}>
              ETHIOPRIME <span className="text-emerald-500">CONSULTING</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-emerald-500",
                  (scrolled || !isHomePage) ? "text-slate-600" : "text-slate-200",
                  location.pathname === link.href && "text-emerald-500"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold">
              Consultation
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={(scrolled || !isHomePage) ? "text-slate-900" : "text-white"} />
            ) : (
              <Menu className={(scrolled || !isHomePage) ? "text-slate-900" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block text-slate-700 font-medium py-2 border-b border-slate-50 last:border-0"
              onClick={() => handleLinkClick(link.href)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;