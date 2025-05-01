
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import CookieConsent from './CookieConsent';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {children}
      </main>

      <ScrollToTopButton />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Layout;
