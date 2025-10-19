import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 10);
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Focus management for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      // Focus first menu item when menu opens
      setTimeout(() => {
        firstMenuItemRef.current?.focus();
      }, 100);
    } else {
      // Return focus to menu button when menu closes
      setTimeout(() => {
        menuButtonRef.current?.focus();
      }, 100);
    }
  }, [isMenuOpen]);

  // Keyboard navigation for mobile menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isMenuOpen && event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrollingUp ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled 
            ? 'bg-primary/95 backdrop-blur-sm shadow-lg' 
            : 'bg-primary'
        }`}
        style={{ height: '64px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.webp"
                  alt="CycleBees Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                  priority
                />
                <span className="text-xl font-bold text-secondary-100">CycleBees</span>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-secondary-100 hover:text-secondary-400 transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <button 
                className="relative bg-secondary-100 text-white px-6 py-2 rounded-lg hover:bg-secondary-100/90 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl group overflow-hidden"
                onClick={() => {
                  const element = document.getElementById('download');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/30 via-white/20 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>
                <span className="relative z-10">Download App</span>
              </button>
            </div>

            <div className="lg:hidden">
              <button
                ref={menuButtonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-secondary-100 hover:text-secondary-400 transition-colors duration-200"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile menu overlay - positioned after header */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50" id="mobile-menu" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-heading">
          {/* Full-screen glass overlay - clickable to close */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-xl"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          ></div>
          
          {/* Menu content */}
          <div className="fixed inset-0 flex flex-col justify-center items-center px-6">
            <div className="w-full max-w-sm bg-primary/30 backdrop-blur-2xl rounded-2xl border border-white/30 shadow-2xl p-8">
              
              {/* Close button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-primary transition-colors duration-200 p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent rounded-lg"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h2 id="mobile-menu-heading" className="sr-only">Navigation menu</h2>

              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  ref={index === 0 ? firstMenuItemRef : undefined}
                  href={link.href}
                  className="block px-6 py-4 text-white hover:text-primary hover:bg-white/20 transition-all duration-200 font-semibold rounded-xl text-center text-lg mb-2 backdrop-blur-sm border border-transparent hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-white/30 mt-4">
                <button 
                  className="relative w-full bg-secondary-100/90 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-secondary-100 transition-all duration-200 font-semibold shadow-xl group overflow-hidden border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent"
                  onClick={() => {
                    setIsMenuOpen(false);
                    const element = document.getElementById('download');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  aria-label="Download CycleBees mobile app"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/30 via-white/20 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 text-lg">Download App</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;