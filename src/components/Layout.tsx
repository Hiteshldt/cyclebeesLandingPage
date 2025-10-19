import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import ErrorBoundary from './ErrorBoundary';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-secondary-100 px-4 py-2 rounded-lg z-50">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" role="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </ErrorBoundary>
  );
};

export default Layout;