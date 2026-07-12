import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#7C3AED]/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <div className="flex items-center">
            <span className="text-lg font-extrabold tracking-tight text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Han<span className="text-[#8B5CF6]">Labs</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-6">
            <a href="#work" className="text-[#3D3B50] hover:text-white transition-colors text-sm">Work</a>
            <a href="#services" className="text-[#3D3B50] hover:text-white transition-colors text-sm">Services</a>
            <a href="#how-it-works" className="text-[#3D3B50] hover:text-white transition-colors text-sm">How It Works</a>
          </div>

          <div className="flex gap-3">
            <a href="https://www.instagram.com/hanlabs.in" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#7C3AED]/20 flex items-center justify-center text-[#3D3B50] hover:text-[#A78BFA] transition-all" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-[#7C3AED]/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[#3D3B50] text-sm">© 2026 HanLabs. All rights reserved.</p>
          <p className="text-[#3D3B50] text-xs">Systems built to run without you.</p>
        </div>
      </div>
    </footer>
  );
}
