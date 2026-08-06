import React from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import BrandMark, { BrandWatermark } from '@/components/BrandMark';
import { BUSINESS_INFO, CONTACT_INFO } from '@/constants';
import { GOOGLE_BUSINESS } from '@/lib/site';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const policies = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Refund Policy', href: '/refund' },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/cyclebees/about/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ridewithcyclebees/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/CycleBees',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary-100 text-white overflow-hidden">
      {/* Oversized mark adds depth to an otherwise flat navy block. */}
      <BrandWatermark className="-right-16 -bottom-16 w-80 text-white/[0.04]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-secondary-100">
                <BrandMark className="w-8" />
              </span>
              <span className="text-xl font-bold text-primary tracking-tight">
                CycleBees
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md pr-4 mb-4">
              Professional bicycle services at your doorstep. Quality repairs,
              rentals, and coaching — trusted by riders across Coimbatore.
            </p>
            <a
              href={GOOGLE_BUSINESS.placeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 hover:bg-white/20 transition-colors duration-200 px-3 py-2 rounded-lg"
            >
              <Icon name="google" className="w-4 h-4" />
              Find us on Google Maps
            </a>
          </div>

          <nav aria-labelledby="footer-quick-links">
            <h2
              id="footer-quick-links"
              className="text-white font-semibold mb-3 text-sm"
            >
              Quick Links
            </h2>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-white font-semibold mb-3 text-sm">Contact</h2>
            <address className="space-y-2 text-xs text-gray-300 not-italic">
              <p className="flex items-start gap-2">
                <Icon name="phone" className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:+${CONTACT_INFO.WHATSAPP_NUMBER}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {CONTACT_INFO.PHONE}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Icon name="mail" className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.EMAIL}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {CONTACT_INFO.EMAIL}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Icon name="map-pin" className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>
                  {CONTACT_INFO.ADDRESS}
                </span>
              </p>
            </address>
            <p className="text-primary font-semibold mt-3 text-xs">
              Visit fee: {BUSINESS_INFO.VISIT_FEE}
              <span className="block font-normal text-gray-400 mt-0.5">
                Technician callout; parts &amp; replacements billed separately
                with an upfront quote.
              </span>
            </p>
          </div>

          <nav aria-labelledby="footer-legal">
            <h2 id="footer-legal" className="text-white font-semibold mb-3 text-sm">
              Legal
            </h2>
            <ul className="space-y-1.5">
              {policies.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/15 mt-8 pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs text-center md:text-left">
              © {currentYear} CycleBees • Professional Bicycle Services •
              Coimbatore, India • All rights reserved
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-xs">Follow us:</span>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                  aria-label={`Follow CycleBees on ${link.name}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
