import { Button } from './ui/button';
import { ArrowRight, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="relative p-10 sm:p-16 rounded-3xl bg-[#0F0F14] border border-[#7C3AED]/15 text-center overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] pointer-events-none opacity-30"
            style={{ background: 'radial-gradient(ellipse at bottom, #7C3AED 0%, transparent 65%)' }} />

          <div className="relative">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#7C3AED]/10 text-[#A78BFA] mb-6">
              Ready to automate? 🚀
            </span>

            <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Stop doing manually what a<br />
              system can do permanently.
            </h2>

            <p className="mb-8 text-lg text-[#6B6880] max-w-xl mx-auto leading-relaxed">
              One conversation. We'll tell you exactly what can be automated, how long it takes, and what it costs. No sales pitch. Just clarity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://zcal.co/i/Jf6k5GS5" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="group bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full px-8 font-semibold text-base transition-all shadow-xl shadow-violet-900/40 hover:shadow-violet-900/60 hover:scale-105"
                >
                  Book a Call
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a
                href="mailto:hrudayesh.w@hanlabs.in"
                className="inline-flex items-center gap-2 text-[#6B6880] hover:text-white transition-colors text-sm font-medium"
              >
                <Mail className="h-4 w-4" />
                hrudayesh.w@hanlabs.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
