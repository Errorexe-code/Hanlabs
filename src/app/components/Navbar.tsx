import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#07070A]/90 backdrop-blur-md border-b border-[#7C3AED]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-extrabold tracking-tight text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Han<span className="text-[#8B5CF6]">Labs</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-[#6B6880] hover:text-white transition-colors text-sm font-medium">How It Works</a>
            <a href="#services" className="text-[#6B6880] hover:text-white transition-colors text-sm font-medium">Services</a>
            <a href="#work" className="text-[#6B6880] hover:text-white transition-colors text-sm font-medium">Our Work</a>
            <a href="https://zcal.co/i/Jf6k5GS5" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full px-5 text-sm font-semibold transition-colors shadow-lg shadow-violet-900/40">
                Book a Call
              </Button>
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-[#6B6880] hover:text-white transition-colors">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-5 space-y-4 border-t border-[#7C3AED]/10">
            <a href="#how-it-works" className="block text-[#6B6880] hover:text-white transition-colors text-sm font-medium" onClick={() => setOpen(false)}>How It Works</a>
            <a href="#services" className="block text-[#6B6880] hover:text-white transition-colors text-sm font-medium" onClick={() => setOpen(false)}>Services</a>
            <a href="#work" className="block text-[#6B6880] hover:text-white transition-colors text-sm font-medium" onClick={() => setOpen(false)}>Our Work</a>
            <a href="https://zcal.co/i/Jf6k5GS5" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full text-sm font-semibold transition-colors">
                Book a Call
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
