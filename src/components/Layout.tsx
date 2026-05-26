import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-white">
      <Navigation />
      <main ref={contentRef}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
