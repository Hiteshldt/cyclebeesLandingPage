import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BrandMark from '@/components/BrandMark';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  /**
   * The previous implementation kept `lastScrollY` in state and listed it as an
   * effect dependency, so every single scroll event tore down and re-attached
   * the listener. A ref holds the previous offset instead: the effect now runs
   * once and the handler stays put.
   */
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      // Batch the state update into the next frame rather than every event.
      window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Move focus into the mobile menu when it opens, and back to the trigger on close.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (isMenuOpen) {
        firstMenuItemRef.current?.focus();
      } else {
        menuButtonRef.current?.focus();
      }
    }, 100);
    return () => window.clearTimeout(timer);
  }, [isMenuOpen]);

  // Escape closes the menu; body scroll is locked while it is open.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const isActive = (href: string) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#download');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-16 transition-all duration-300 ${
          isScrollingUp ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg' : 'bg-primary'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Inline mark: no image request, and it inherits brand colour. */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="CycleBees home"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary-100 text-primary shadow-sm transition-transform duration-200 group-hover:scale-105">
                <BrandMark className="w-7" />
              </span>
              <span className="text-xl font-bold tracking-tight text-secondary-100">
                Cycle<span className="text-secondary-100/70">Bees</span>
              </span>
            </Link>

            <nav
              className="hidden lg:flex items-center space-x-7"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`transition-colors duration-200 font-medium ${
                    isActive(link.href)
                      ? 'text-secondary-100 underline underline-offset-8 decoration-2'
                      : 'text-secondary-100/80 hover:text-secondary-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <button
                type="button"
                className="relative bg-secondary-100 text-white px-6 py-2 rounded-lg hover:bg-secondary-100/90 transition-colors duration-200 font-semibold shadow-lg group overflow-hidden"
                onClick={scrollToDownload}
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-primary/30 via-white/20 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                ></span>
                <span className="relative z-10">Download App</span>
              </button>
            </div>

            <div className="lg:hidden">
              <button
                type="button"
                ref={menuButtonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-secondary-100 hover:text-secondary-400 transition-colors duration-200 p-1"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-heading"
        >
          <button
            type="button"
            className="fixed inset-0 bg-black/50 backdrop-blur-xl w-full h-full"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            tabIndex={-1}
          ></button>

          <div className="fixed inset-0 flex flex-col justify-center items-center px-6 pointer-events-none">
            <div className="w-full max-w-sm bg-primary/30 backdrop-blur-2xl rounded-2xl border border-white/30 shadow-2xl p-8 pointer-events-auto">
              <div className="flex justify-end mb-4">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-primary transition-colors duration-200 p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h2 id="mobile-menu-heading" className="sr-only">
                Navigation menu
              </h2>

              <nav aria-label="Mobile navigation">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    ref={index === 0 ? firstMenuItemRef : undefined}
                    href={link.href}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className="block px-6 py-3.5 text-white hover:text-primary hover:bg-white/20 transition-all duration-200 font-semibold rounded-xl text-center text-lg mb-2 border border-transparent hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="pt-4 border-t border-white/30 mt-4">
                <button
                  type="button"
                  className="relative w-full bg-secondary-100/90 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-secondary-100 transition-colors duration-200 font-semibold shadow-xl group overflow-hidden border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToDownload();
                  }}
                  aria-label="Download CycleBees mobile app"
                >
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-primary/30 via-white/20 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  ></span>
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
