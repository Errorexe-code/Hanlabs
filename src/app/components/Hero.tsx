import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-36 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.18) 0%, transparent 65%)' }} />

      <div className="relative container mx-auto max-w-4xl text-center">

        <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
          We automate<br />
          the work.{' '}
          <span className="text-[#A78BFA]">You scale</span><br />
          the business.
        </h1>

        <p className="mb-10 text-lg sm:text-xl text-[#6B6880] max-w-2xl mx-auto leading-relaxed">
          HanLabs builds n8n automation systems for businesses that are done doing things manually.
          Faster ops. Cleaner data. Zero bottlenecks.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#work">
            <Button
              size="lg"
              className="group bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full px-8 font-semibold text-base transition-all shadow-xl shadow-violet-900/40 hover:shadow-violet-900/60 hover:scale-105"
            >
              See Our Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="#how-it-works">
            <Button
              size="lg"
              variant="ghost"
              className="text-[#6B6880] hover:text-white hover:bg-white/5 rounded-full px-8 font-medium text-base border border-white/8 transition-colors"
            >
              How it works
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
