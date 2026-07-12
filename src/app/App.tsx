import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PullQuote } from './components/PullQuote';
import { Features } from './components/Features';
import { Work } from './components/Work';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Testimonial } from './components/Testimonial';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement || document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = '/favicon.svg';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-[#020204]">
      <Navbar />
      <main>
        <Hero />
        <PullQuote />
        <Features />
        <Process />
        <Services />
        <Work />
        <CTASection />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
