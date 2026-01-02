import React from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import PageTransition from './PageTransition';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            {children}
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
